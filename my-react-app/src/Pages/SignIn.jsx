import React, { useState } from 'react';

export default function SignIn({ onSignUpClick, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Logged in successfully!');
    if (onLogin) onLogin();
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h1>The EDGE</h1>
      </div>

      <div className="right-panel">
        <div className="form-box">
          <h2>Hi, Welcome Back</h2>
          <p className="subtitle">Login to continue</p>

          <form onSubmit={handleSubmit}>
            <div className="field" style={{ position: 'relative', zIndex: 2 }}>
              <label htmlFor="email-input">Email</label>
              <input 
                id="email-input"
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                style={{ width: '100%', boxSizing: 'border-box' }}
              />
            </div>

            <div className="field" style={{ position: 'relative', zIndex: 2, marginTop: '15px' }}>
              <label htmlFor="password-input">Password</label>
              <input 
                id="password-input"
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                style={{ width: '100%', boxSizing: 'border-box' }}
              />
            </div>

            <div className="checkbox" style={{ justifyContent: 'flex-end', marginTop: '8px' }}>
              <span>Forgot Password? <a href="#reset" style={{ color: '#f0c040', textDecoration: 'none' }}>Reset</a></span>
            </div>

            <button type="submit" className="btn primary-btn" style={{ marginTop: '20px' }}>Log In</button>
            <div className="divider">or</div>
            <button type="button" className="btn google-btn">Login with Google</button>

            <p className="subtitle" style={{ textAlign: 'center', marginTop: '16px' }}>
              Don't have an account? {' '}
              <span 
                onClick={onSignUpClick} 
                style={{ color: '#f0c040', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Sign Up
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}