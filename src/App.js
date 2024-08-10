
import './App.css';
import React, { useState } from 'react';
import Register from './Component/Register';
import Login from './Component/Login';
import Chat from './Component/Chat';


const App = () => {
  const [token, setToken] = useState(null);

  return (
    <div>
      {!token ? (
        <>
          <Register />
          <Login setToken={setToken} />
        </>
      ) : (
        <Chat token={token} />
      )}
    </div>
  );
};

export default App;

