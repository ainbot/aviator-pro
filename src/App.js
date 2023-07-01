import React, { useEffect, useState } from 'react';
import { firebaseApp1, auth1 } from './firebase';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/home/Home';
import Home from './pages/login/Login';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const unsubscribe = auth1.onAuthStateChanged((user) => {
      setLoggedIn(!!user);
      if (user) {
        setUsername(user.email);
      } else {
        setUsername('');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await auth1.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login setUsername={setUsername} />} />
          <Route path="/" element={loggedIn ? <Home username={username} onLogout={handleLogout} /> : <Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
