import { getDB } from '../db.js';

export async function saveMessage(messageData) {
    const db = getDB();
    const messages = db.collection('messages');

    const message = {
        username: messageData.username,
        text: messageData.text,
        timestamp: new Date(),
        isPrivate: messageData.isPrivate || false,
        to: messageData.to || null,
        from: messageData.from || null
    };

    const result = await messages.insertOne(message);
    return result;
}

export async function getRecentMessages(limit = 50) {
    const db = getDB();
    const messages = db.collection('messages');

    const recentMessages = await messages
        .find({ isPrivate: false })
        .sort({ timestamp: -1 })
        .limit(limit)
        .toArray();

    return recentMessages.reverse(); // Return in chronological order
}

export async function getPrivateMessages(user1, user2, limit = 50) {
    const db = getDB();
    const messages = db.collection('messages');

    const privateMessages = await messages
        .find({
            isPrivate: true,
            $or: [
                { from: user1, to: user2 },
                { from: user2, to: user1 }
            ]
        })
        .sort({ timestamp: -1 })
        .limit(limit)
        .toArray();

    return privateMessages.reverse();
}

export default { saveMessage, getRecentMessages, getPrivateMessages };
