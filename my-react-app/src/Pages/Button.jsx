import React from 'react';
import './button.css';

export default function Button({ onSelectRole }) {
  return (
    <div className="container">
      <div className="left-panel">
        <h1>The EDGE</h1>
      </div>

      <div className="right-panel">
        <div className="role-box">
          <h2>Welcome to The Edge</h2>
          <p className="subtitle">Select your role to get started</p>

          <div className="cards-container">
            <div 
              className="card" 
              onClick={() => onSelectRole('tutor')}
              style={{ cursor: 'pointer' }}
            >
              <div className="icon-placeholder"></div>
              <h3>I am a Tutor</h3>
              <p>Provide Classes</p>
              <p>Teach</p>
              <p>Manage Student Progress</p>
            </div>

            <div 
              className="card" 
              onClick={() => onSelectRole('student')}
              style={{ cursor: 'pointer' }}
            >
              <div className="icon-placeholder"></div>
              <h3>I am a Student</h3>
              <p>Join Classes</p>
              <p>Learn</p>
              <p>Track Performance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}