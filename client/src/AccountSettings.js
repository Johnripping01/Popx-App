import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

export default function AccountSettings() {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <div className="card" style={{paddingTop:0}}>
        <div style={{padding:'24px 32px 0 32px'}}>
          <h2 style={{fontWeight:600, fontSize:'1.2rem', marginBottom:16, color:'#444'}}>Account Settings</h2>
          <div style={{display:'flex',alignItems:'center',gap:'18px',marginBottom:'16px',background:'#fafbfc',padding:'16px 0'}}>
            <div style={{width:64,height:64,borderRadius:'50%',background:'#e5e5e5',display:'flex',alignItems:'center',justifyContent:'center',position:'relative'}}>
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="profile" style={{width:'64px',height:'64px',borderRadius:'50%'}} />
              <span style={{position:'absolute',bottom:6,right:6,background:'#a259ff',borderRadius:'50%',width:24,height:24,display:'flex',alignItems:'center',justifyContent:'center'}}>
                <svg width="16" height="16" fill="#fff" viewBox="0 0 24 24"><path d="M12 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-7 13v-1a5 5 0 0 1 10 0v1H5zm14-1v1a1 1 0 0 1-1 1h-1v-1a7 7 0 0 0-14 0v1H3a1 1 0 0 1-1-1v-1a9 9 0 0 1 18 0z"/></svg>
              </span>
            </div>
            <div>
              <div style={{fontWeight:700,fontSize:'1.1rem',marginBottom:2}}>Marry Doe</div>
              <div style={{color:'#888',fontSize:'1rem'}}>Marry@Gmail.Com</div>
            </div>
          </div>
          <div style={{color:'#444',fontSize:'1rem',marginBottom:'16px',lineHeight:'1.5'}}>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </div>
          <hr style={{border:'none',borderTop:'1px dashed #e5e5e5',margin:'16px 0'}} />
        </div>
      </div>
      <div className="nav-bar">
        <span className="nav-icon home" onClick={() => navigate('/')}>🏠</span>
        <span className="nav-icon left" style={{opacity:1}} onClick={() => navigate('/register')}>{'<'}</span>
        <span className="nav-text" style={{color:'#6f42c1'}}>4 of 4</span>
        <span className="nav-icon right" style={{opacity:0.5}}>{'>'}</span>
      </div>
    </div>
  );
}
