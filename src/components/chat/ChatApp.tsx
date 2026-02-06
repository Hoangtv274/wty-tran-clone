import React, { useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import './ChatApp.css';

interface Message {
    id: string;
    username: string;
    text: string;
    timestamp: Date;
    isPersonal: boolean;
    isLoading?: boolean;
}

const ChatApp: React.FC = () => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isExpanded, setIsExpanded] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const messagesContentRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom when new messages arrive
    const scrollToBottom = () => {
        if (messagesContentRef.current) {
            messagesContentRef.current.scrollTop = messagesContentRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Initialize socket connection
    useEffect(() => {
        const newSocket = io('http://localhost:3000', {
            transports: ['websocket', 'polling']
        });

        setSocket(newSocket);

        newSocket.on('connect', () => {
            console.log('Connected to chat server');
            const username = `User${Math.floor(Math.random() * 10000)}`;
            newSocket.emit('adduser', username);
        });

        newSocket.on('updatechat', (user: string, text: string) => {
            const newMessage: Message = {
                id: Date.now().toString() + Math.random(),
                username: user,
                text: text,
                timestamp: new Date(),
                isPersonal: user !== 'Chat Bot',
                isLoading: false
            };

            setMessages(prev => [...prev, newMessage]);
        });

        newSocket.on('msg_user_handle', (user: string, text: string) => {
            const newMessage: Message = {
                id: Date.now().toString() + Math.random(),
                username: user,
                text: text,
                timestamp: new Date(),
                isPersonal: false,
                isLoading: false
            };

            setMessages(prev => [...prev, newMessage]);
        });

        return () => {
            newSocket.close();
        };
    }, []);

    const handleSendMessage = () => {
        if (!inputMessage.trim() || !socket) return;

        socket.emit('sendchat', inputMessage);
        setInputMessage('');
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const formatTime = (date: Date) => {
        const hours = date.getHours();
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const toggleChat = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`chat ${isExpanded ? 'expanded' : 'collapsed'}`}>
            <div className="chat-title" onClick={toggleChat}>
                <h1>Chat With Us</h1>
                <figure className="avatar">
                    <img src="/cb2.jpg" alt="Avatar" />
                    <span className="chat-message-counter">3</span>
                </figure>
                <span className="online-bullet"></span>
            </div>

            {isExpanded && (
                <>
                    <div className="messages">
                        <div className="messages-content" ref={messagesContentRef}>
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`message ${msg.isPersonal ? 'message-personal' : ''} ${msg.isLoading ? 'loading' : ''} new`}
                                >
                                    {!msg.isPersonal && msg.username !== 'Chat Bot' && (
                                        <figure className="avatar">
                                            <img src="/sa.png" alt="Avatar" />
                                        </figure>
                                    )}
                                    {msg.isLoading ? (
                                        <span></span>
                                    ) : (
                                        <>
                                            {msg.text}
                                            <div className="timestamp">{formatTime(msg.timestamp)}</div>
                                        </>
                                    )}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                    </div>

                    <div className="message-box">
                        <textarea
                            className="message-input"
                            placeholder="Type message..."
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button
                            type="submit"
                            className="message-submit"
                            onClick={handleSendMessage}
                        >
                            Send
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ChatApp;
