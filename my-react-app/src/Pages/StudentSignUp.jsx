import React, { useState } from 'react';
import './studentsignup.css';

export default function StudentSignUp({ onSignUp }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp(); // Navigates to Email Verification
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h1>The EDGE</h1>
      </div>

      <div className="right-panel">
        <div className="form-box">
          <h2>Create an Account</h2>
          <p className="subtitle">Please enter your details to get started</p>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="field">
                <label>First Name</label>
                <input type="text" name="firstName" onChange={handleChange} required />
              </div>
              <div className="field">
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={handleChange} required />
              </div>
            </div>

            <div className="field">
              <label>Email</label>
              <input type="email" name="email" onChange={handleChange} required />
            </div>

            <div className="field">
              <label>Phone Number</label>
              <div className="phone-wrapper">
                <span className="code">+234</span>
                <input type="tel" name="phone" onChange={handleChange} required />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label>Password</label>
                <input type="password" name="password" onChange={handleChange} required />
              </div>
              <div className="field">
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={handleChange} required />
              </div>
            </div>

            <div className="checkbox">
              <input type="checkbox" id="terms" name="agreeToTerms" onChange={handleChange} required />
              <label htmlFor="terms">I agree to the Terms & Conditions and Privacy Policy</label>
            </div>

            <button type="submit" className="btn primary-btn">Sign Up</button>
            <div className="divider">Or</div>
            <button type="button" className="btn google-btn">Sign Up with Google</button>
          </form>
        </div>
      </div>
    </div>
  );
}