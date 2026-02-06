import { getDB } from '../db.js';

export async function saveUser(username, socketId) {
    const db = getDB();
    const users = db.collection('users');

    const user = {
        username: username,
        socketId: socketId,
        joinedAt: new Date(),
        lastSeen: new Date(),
        isActive: true
    };

    // Upsert: update if exists, insert if not
    const result = await users.updateOne(
        { username: username },
        {
            $set: {
                socketId: socketId,
                lastSeen: new Date(),
                isActive: true
            },
            $setOnInsert: { joinedAt: new Date() }
        },
        { upsert: true }
    );

    return result;
}

export async function removeUser(username) {
    const db = getDB();
    const users = db.collection('users');

    const result = await users.updateOne(
        { username: username },
        {
            $set: {
                isActive: false,
                lastSeen: new Date()
            }
        }
    );

    return result;
}

export async function getActiveUsers() {
    const db = getDB();
    const users = db.collection('users');

    const activeUsers = await users
        .find({ isActive: true })
        .toArray();

    return activeUsers;
}

export default { saveUser, removeUser, getActiveUsers };
