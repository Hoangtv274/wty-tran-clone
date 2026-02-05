import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const httpServer = createServer(app);

// Enable CORS for Vite dev server
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        credentials: true
    }
});

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.send('Socket.IO Chat Server is running');
});

// usernames which are currently connected to the chat
let usernames = {};

const check_key = (v) => {
    let val = '';
    for (let key in usernames) {
        if (usernames[key] == v) val = key;
    }
    return val;
};

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // when the client emits 'sendchat', this listens and executes
    socket.on('sendchat', (data) => {
        console.log(`${socket.username}: ${data}`);
        io.emit('updatechat', socket.username, data);
    });

    // when the client emits 'adduser', this listens and executes
    socket.on('adduser', (username) => {
        // we store the username in the socket session for this client
        socket.username = username;
        // add the client's username to the global list
        usernames[username] = socket.id;
        console.log(`User ${username} joined the chat`);

        // echo to client they've connected
        socket.emit('updatechat', 'Chat Bot', `${socket.username} you have joined the chat`);
        // echo to client their username
        socket.emit('store_username', username);
        // echo globally (all clients) that a person has connected
        socket.broadcast.emit('updatechat', 'Chat Bot', `${username} has connected`);
    });

    // when the user disconnects.. perform this
    socket.on('disconnect', () => {
        if (socket.username) {
            console.log(`User ${socket.username} disconnected`);
            // remove the username from global usernames list
            delete usernames[socket.username];
            // echo globally that this client has left
            socket.broadcast.emit('updatechat', 'Chat Bot', `${socket.username} has left chat`);
        }
    });

    // when the user sends a private msg to a user id, first find the username
    socket.on('check_user', (asker, id) => {
        io.to(usernames[asker]).emit('msg_user_found', check_key(id));
    });

    // when the user sends a private message to a user.. perform this
    socket.on('msg_user', (to_user, from_user, msg) => {
        // emits 'msg_user_handle', this updates the chat body on client-side
        io.to(usernames[to_user]).emit('msg_user_handle', from_user, msg);

        // write the chat message to a txt file
        const wstream = fs.createWriteStream('chat_data.txt', { flags: 'a' });
        wstream.write(`[${new Date().toISOString()}] ${from_user} -> ${to_user}: ${msg}\n`);
        wstream.end();
    });
});

const PORT = process.env.PORT || 3000;

httpServer.listen(PORT, () => {
    console.log(`Socket.IO server listening on port ${PORT}`);
});
