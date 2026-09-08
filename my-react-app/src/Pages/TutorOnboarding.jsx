import React from 'react';
import './tutoronboarding.css';

export default function TutorOnboarding({ onBack, onNext }) {
  return (
    <div className="onboarding-container">
      <div className="onboarding-box">
        
        {/* Step Indicator Bar */}
        <div className="steps-bar">
          <div className="step completed">1. Basic Information</div>
          <div className="step active">2. Documents Upload</div>
          <div className="step">3. Availability Setup</div>
          <div className="step">4. Review and Submit</div>
        </div>

        {/* Heading */}
        <h2>Documents Upload</h2>
        <p className="subtitle">Please upload your identification and qualification documents to help us verify your account.</p>

        {/* Upload Sections */}
        <div className="upload-group">
          <label>Government-issued ID*</label>
          <p className="hint">Upload a valid ID (Driver's License, National ID, Passport, or Voter's Card)</p>
          <label className="upload-btn">
            + Add File
            <input type="file" hidden />
          </label>
        </div>

        <div className="upload-group">
          <label>Academic Certificates*</label>
          <p className="hint">Upload your relevant academic degree certificates or diplomas</p>
          <label className="upload-btn">
            + Add File
            <input type="file" hidden />
          </label>
        </div>

        <div className="upload-group">
          <label>Arabic and Islamic-related Certificates*</label>
          <p className="hint">Upload any teaching or Islamic study certifications you have</p>
          <label className="upload-btn">
            + Add File
            <input type="file" hidden />
          </label>
        </div>

        <div className="upload-group">
          <label>Profile Photo (Headshot)*</label>
          <p className="hint">Upload a clear photo of yourself for your profile picture</p>
          <label className="upload-btn">
            Upload Photo
            <input type="file" accept="image/*" hidden />
          </label>
        </div>

        {/* Navigation Buttons */}
        <div className="nav-buttons">
          <button type="button" className="btn back-btn" onClick={onBack}>← Back</button>
          <button type="button" className="btn next-btn" onClick={onNext}>Next →</button>
        </div>

      </div>
    </div>
  );
}