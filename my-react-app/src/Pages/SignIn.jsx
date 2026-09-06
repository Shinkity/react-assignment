import React, { useState } from 'react';

export default function SignIn({ onSignUpClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Logged in successfully!');
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
            <div className="field">
              <label>Email</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>

            <div className="field">
              <label>Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>

            <div className="checkbox" style={{ justifyContent: 'flex-end' }}>
              <span>Forgot Password? <a href="#reset" style={{ color: '#f0c040', textDecoration: 'none' }}>Reset</a></span>
            </div>

            <button type="submit" className="btn primary-btn">Log In</button>
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