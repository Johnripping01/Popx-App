import React, { useState } from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [agency, setAgency] = useState('yes');
  return (
    <div className="main-container">
      <div className="card">
        <div className="welcome-section">
          <h2 style={{fontWeight:700, fontSize:'1.6rem', marginBottom:8}}>Create your<br/>PopX account</h2>
          <form>
            <div className="input-group">
              <label className="input-label" htmlFor="fullname">Full Name<span style={{color:'#a259ff'}}>*</span></label>
              <input id="fullname" type="text" placeholder="Marry Doe" required className="input-box" />
            </div>
            <div className="input-group">
              <label className="input-label" htmlFor="phone">Phone number<span style={{color:'#a259ff'}}>*</span></label>
              <input id="phone" type="text" placeholder="Marry Doe" required className="input-box" />
            </div>
            <div className="input-group">
              <label className="input-label" htmlFor="email">Email address<span style={{color:'#a259ff'}}>*</span></label>
              <input id="email" type="email" placeholder="Marry Doe" required className="input-box" />
            </div>
            <div className="input-group">
              <label className="input-label" htmlFor="password">Password <span style={{color:'#a259ff'}}>*</span></label>
              <input id="password" type="password" placeholder="Marry Doe" required className="input-box" />
            </div>
            <div className="input-group">
              <label className="input-label" htmlFor="company">Company name</label>
              <input id="company" type="text" placeholder="Marry Doe" className="input-box" />
            </div>
            <div style={{margin:'18px 0 24px 0'}}>
              <span className="input-label" style={{fontWeight:600}}>Are you an Agency?<span style={{color:'#a259ff'}}>*</span></span>
              <div style={{display:'flex',alignItems:'center',marginTop:'8px',gap:'24px'}}>
                <label style={{display:'flex',alignItems:'center',gap:'6px',fontWeight:500}}>
                  <input type="radio" name="agency" checked={agency==='yes'} onChange={()=>setAgency('yes')} style={{accentColor:'#a259ff'}} /> Yes
                </label>
                <label style={{display:'flex',alignItems:'center',gap:'6px',fontWeight:500}}>
                  <input type="radio" name="agency" checked={agency==='no'} onChange={()=>setAgency('no')} style={{accentColor:'#a259ff'}} /> No
                </label>
              </div>
            </div>
            <button type="submit" className="create-btn" style={{marginTop:'12px'}}>Create Account</button>
          </form>
        </div>
      </div>
      <div className="nav-bar">
        <span className="nav-icon home" onClick={() => navigate('/')}>🏠</span>
        <span className="nav-icon left" style={{opacity:1}} onClick={() => navigate('/login')}>{'<'}</span>
        <span className="nav-text" style={{color:'#6f42c1'}}>3 of 4</span>
        <span className="nav-icon right" style={{opacity:1}} onClick={() => navigate('/account-settings')}>{'>'}</span>
      </div>
    </div>
  );
}
