import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <div className="card">
        <div className="circles">
          <div className="circle">1</div>
          <div className="circle">2</div>
          <div className="circle">3</div>
          <div className="circle">4</div>
          <div className="circle">5</div>
        </div>
        <div className="welcome-section">
          <h2>Welcome to PopX</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <button className="create-btn" onClick={() => navigate('/register')}>Create Account</button>
          <button className="login-btn" onClick={() => navigate('/login')}>Already Registered? Login</button>
        </div>
      </div>
      <div className="nav-bar">
        <span className="nav-icon home" onClick={() => navigate('/')}>🏠</span>
        <span className="nav-icon left" style={{opacity:0.5}}>&#60;</span>
        <span className="nav-text">1 of 4</span>
  <span className="nav-icon right" style={{opacity:1,cursor:'pointer'}} onClick={() => navigate('/register')}>{'>'}</span>
      </div>
    </div>
  );
}
