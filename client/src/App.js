import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Register from './Register';
import Login from './Login';
import AccountSettings from './AccountSettings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account-settings" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
