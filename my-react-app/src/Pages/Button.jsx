import React, { useState } from 'react';
import './button.css';

export default function Button({ onContinue }) {
  const [selectedRole, setSelectedRole] = useState('tutor');

  return (
    <div className="role-container">
      <div className="brand-side">
        <h1>The EDGE</h1>
      </div>

      <div className="content-side">
        <h2>Welcome to The Edge</h2>
        <p className="subtitle">Select your role to get started</p>

        <div className="card-container">
          <div
            className={`card ${selectedRole === 'tutor' ? 'active' : ''}`}
            onClick={() => setSelectedRole('tutor')}
          >
            <div className="circle"></div>
            <h3>I am a Tutor</h3>
            <p className="card-text">
              Provide Classes<br />
              Teach<br />
              Manage Student Progress
            </p>
          </div>

          <div
            className={`card ${selectedRole === 'student' ? 'active' : ''}`}
            onClick={() => setSelectedRole('student')}
          >
            <div className="circle"></div>
            <h3>I am a Student</h3>
            <p className="card-text">
              Join Classes<br />
              Learn<br />
              Track Performance
            </p>
          </div>
        </div>

        <button className="continue-btn" onClick={onContinue}>
          Continue
        </button>
      </div>
    </div>
  );
}