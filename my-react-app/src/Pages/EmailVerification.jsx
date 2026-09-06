import React, { useState } from 'react';
import './emailverification.css';

export default function EmailVerification({ onVerify }) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus next box automatically
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h1>The EDGE</h1>
      </div>

      <div className="right-panel">
        <div className="verify-box">
          <h2>Email Verification</h2>
          <p className="subtitle">Enter the 6-digit code sent to your email.</p>

          <div className="otp-container">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                className="otp-input"
              />
            ))}
          </div>

          <p className="resend-text">
            Didn't receive the code? <button type="button" className="resend-btn">Resend</button>
          </p>

          <button type="button" className="btn primary-btn" onClick={onVerify}>
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}