import React, { useState } from 'react';
import axios from 'axios';
import './chat.css';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post('http://localhost:8080/api/users/register', {
            // Your request body
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true // if you need to send cookies or authentication data
        });
        console.log('User registered:', response.data);
    } catch (error) {
        console.error('Error registering user:', error);
    }
};

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
