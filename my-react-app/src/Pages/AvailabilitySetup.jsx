import React, { useState } from 'react';
import './TutorOnboarding.css'; // Reuses existing onboarding styles

export default function AvailabilitySetup({ onBack, onNext }) {
  const [teachingMode, setTeachingMode] = useState('Online');
  const [hours, setHours] = useState('');

  const handleNext = (e) => {
    e.preventDefault();
    if (onNext) onNext();
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-box">
        
        {/* Step Indicator Bar */}
        <div className="steps-bar">
          <div className="step completed">1. Basic Information</div>
          <div className="step completed">2. Documents Upload</div>
          <div className="step active">3. Availability Setup</div>
          <div className="step">4. Review and Submit</div>
        </div>

        {/* Heading */}
        <h2>Availability Setup</h2>
        <p className="subtitle">Please set your teaching preferences and availability hours.</p>

        {/* Teaching Mode Selection */}
        <div className="upload-group" style={{ background: 'transparent', padding: 0 }}>
          <label style={{ marginBottom: '8px' }}>Teaching Mode</label>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            {['Online', 'Physical', 'Both'].map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setTeachingMode(mode)}
                className="btn"
                style={{
                  padding: '8px 16px',
                  borderRadius: '4px',
                  border: '1px solid #ced4da',
                  background: teachingMode === mode ? '#130d25' : '#e9ecef',
                  color: teachingMode === mode ? '#fff' : '#333',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Availability Hours Input */}
        <div className="upload-group" style={{ background: 'transparent', padding: 0 }}>
          <label style={{ marginBottom: '6px' }}>Availability Hours (Optional)</label>
          <textarea
            rows="4"
            placeholder="e.g., Mondays & Wednesdays: 4 PM - 6 PM"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ced4da',
              background: '#f8f9fa',
              outline: 'none',
              resize: 'none',
              fontFamily: 'sans-serif'
            }}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="nav-buttons">
          <button type="button" className="btn back-btn" onClick={onBack}>← Back</button>
          <button type="button" className="btn next-btn" onClick={handleNext}>Next →</button>
        </div>

      </div>
    </div>
  );
}