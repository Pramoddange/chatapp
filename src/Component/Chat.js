import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './chat.css';
const socket = io('http://localhost:8080');

const Chat = ({ token }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('sendMessage', { token, message });
    setMessage('');
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.username}: </strong>{msg.message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
