import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login and navigate to account settings
    navigate('/account-settings');
  };
  return (
    <div className="main-container">
      <div className="card">
        <div className="welcome-section">
          <h2 style={{fontWeight:700, fontSize:'1.6rem', marginBottom:8}}>Signin to your<br/>PopX account</h2>
          <p style={{color:'#888', fontSize:'1rem', marginBottom:32}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="input-label" htmlFor="email">Email Address</label>
              <input id="email" type="email" placeholder="Enter email address" required className="input-box" value={email} onChange={e=>setEmail(e.target.value)} />
            </div>
            <div className="input-group">
              <label className="input-label" htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="Enter password" required className="input-box" value={password} onChange={e=>setPassword(e.target.value)} />
            </div>
            <button type="submit" className="login-btn" style={{background:'#d3d3d3', color:'#fff', fontWeight:600, marginTop:16}}>Login</button>
          </form>
        </div>
      </div>
      <div className="nav-bar">
        <span className="nav-icon home" onClick={() => navigate('/')}>🏠</span>
        <span className="nav-icon left" style={{opacity:1}} onClick={() => navigate('/')}>{'<'}</span>
        <span className="nav-text" style={{color:'#6f42c1'}}>2 of 4</span>
        <span className="nav-icon right" style={{opacity:1}} onClick={() => navigate('/register')}>{'>'}</span>
      </div>
    </div>
  );
}
