import React from 'react';
import './tutordashboard.css';

export default function TutorDashboard({ onNavigate, onLogout }) {
  return (
    <div className="tutor-dashboard">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div>
          <h2 className="brand-title">The Edge</h2>
          <span className="brand-subtitle">TUTOR PORTAL</span>

          <nav className="nav-menu">
            <button 
              type="button" 
              className="nav-item active" 
              onClick={() => onNavigate && onNavigate('dashboard')}
            >
              Dashboard
            </button>
            <button 
              type="button" 
              className="nav-item" 
              onClick={() => onNavigate && onNavigate('classes')}
            >
              My Classes
            </button>
            <button type="button" className="nav-item">Students</button>
            <button type="button" className="nav-item">Resources</button>
            <button type="button" className="nav-item">Settings</button>
          </nav>
        </div>

        {/* Sidebar Footer User Info */}
        <div className="user-profile">
          <div className="avatar">SA</div>
          <div className="user-details">
            <h4>Abdulsalam Adam</h4>
            <p>Tutor</p>
          </div>
          <button className="logout-btn" onClick={onLogout}>Logout</button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-content">
        {/* Header Bar */}
        <header className="dashboard-header">
          <h2>Dashboard</h2>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
        </header>

        {/* Welcome Text */}
        <div className="welcome-banner">
          <h1>Welcome back, Abdulsalam 👋</h1>
          <p>Here is your teaching overview for today.</p>
        </div>

        {/* Stat Cards Row */}
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-icon green">👥</span>
            <h3>20</h3>
            <p>Total Students</p>
          </div>
          <div className="stat-card">
            <span className="stat-icon red">📚</span>
            <h3>0</h3>
            <p>Active Classes</p>
          </div>
          <div className="stat-card">
            <span className="stat-icon orange">📅</span>
            <h3>3</h3>
            <p>Upcoming Lessons</p>
          </div>
          <div className="stat-card">
            <span className="stat-icon blue">✅</span>
            <h3>4</h3>
            <p>Completed Lessons</p>
          </div>
        </div>

        {/* Lower Grid Content */}
        <div className="content-grid">
          {/* Today's Schedule */}
          <section className="schedule-section">
            <div className="section-header">
              <h3>Today's Schedule</h3>
              <span className="schedule-date">Tuesday, September 8, 2026</span>
            </div>

            <div className="schedule-card">
              <div className="time">09:00 AM</div>
              <div className="details">
                <h4>Web Development</h4>
                <p>3 Students | 1.5 Hours</p>
              </div>
              <button className="start-btn">Start Session</button>
            </div>

            <div className="schedule-card">
              <div className="time">12:00 PM</div>
              <div className="details">
                <h4>Java Programming</h4>
                <p>5 Students | 1 Hour</p>
              </div>
              <button className="details-btn">View Details</button>
            </div>

            <div className="schedule-card">
              <div className="time">04:00 PM</div>
              <div className="details">
                <h4>React Development</h4>
                <p>4 Students | 2 Hours</p>
              </div>
              <button className="details-btn">View Details</button>
            </div>
          </section>

          {/* Right Column: Quick Actions & Notifications */}
          <div className="side-column">
            {/* Quick Actions */}
            <section className="quick-actions">
              <h3>Quick Actions</h3>
              <div className="action-card">
                <span className="action-icon">+</span>
                <div>
                  <h4>Create New Class</h4>
                  <p>Schedule a session</p>
                </div>
              </div>
              <div className="action-card">
                <span className="action-icon">📤</span>
                <div>
                  <h4>Upload Resources</h4>
                  <p>Share files with students</p>
                </div>
              </div>
            </section>

            {/* Notifications */}
            <section className="notifications">
              <h3>Notifications</h3>
              <div className="notification-item">
                <span className="dot"></span>
                <div>
                  <p><strong>New booking request</strong> from Aisha</p>
                  <span className="time-ago">2 mins ago</span>
                </div>
              </div>
              <div className="notification-item">
                <span className="dot"></span>
                <div>
                  <p>Session for <strong>React Development</strong> completed</p>
                  <span className="time-ago">1 hour ago</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}