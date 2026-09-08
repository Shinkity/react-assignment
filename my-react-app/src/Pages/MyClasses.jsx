import React, { useState } from 'react';
import './TutorDashboard.css';
import './myclasses.css';

export default function MyClasses({ onNavigate, onLogout }) {
  const [searchTerm, setSearchTerm] = useState('');

  const classes = [
    {
      id: 1,
      title: 'Web Development - Beginner',
      status: 'Active',
      students: 8,
      nextLesson: 'Wed, Sep 9 at 10:00 AM',
      duration: '2 Hours'
    },
    {
      id: 2,
      title: 'Java Programming - Intermediate',
      status: 'Active',
      students: 5,
      nextLesson: 'Thu, Sep 10 at 02:00 PM',
      duration: '1.5 Hours'
    },
    {
      id: 3,
      title: 'React Development - Advanced',
      status: 'Active',
      students: 6,
      nextLesson: 'Fri, Sep 11 at 11:00 AM',
      duration: '2 Hours'
    },
    {
      id: 4,
      title: 'UI/UX Design - Foundations',
      status: 'Active',
      students: 10,
      nextLesson: 'Mon, Sep 14 at 01:00 PM',
      duration: '1 Hour'
    }
  ];

  const filteredClasses = classes.filter(cls => 
    cls.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              className="nav-item" 
              onClick={() => onNavigate && onNavigate('dashboard')}
            >
              Dashboard
            </button>
            <button 
              type="button" 
              className="nav-item active" 
              onClick={() => onNavigate && onNavigate('classes')}
            >
              My Classes
            </button>
            <button 
              type="button" 
              className="nav-item" 
              onClick={() => onNavigate && onNavigate('students')}
            >
              Students
            </button>
            <button type="button" className="nav-item">Resources</button>
            <button type="button" className="nav-item">Settings</button>
          </nav>
        </div>

        {/* User Info */}
        <div className="user-profile">
          <div className="avatar">SA</div>
          <div className="user-details">
            <h4>Abdulsalam Adam</h4>
            <p>Tutor</p>
          </div>
          <button className="logout-btn" onClick={onLogout}>Logout</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="dashboard-header">
          <div>
            <h2>My Classes</h2>
            <p className="subtitle-text">Manage your active and completed classes</p>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
        </header>

        {/* Filters and Search Bar */}
        <div className="classes-filter-bar">
          <input 
            type="text" 
            className="filter-input" 
            placeholder="Search classes..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="filter-dropdowns">
            <select className="filter-select">
              <option>Subject: All</option>
              <option>Web Development</option>
              <option>Java</option>
              <option>React</option>
            </select>
            <select className="filter-select">
              <option>Status: Active</option>
              <option>Completed</option>
            </select>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="classes-grid">
          {filteredClasses.map((item) => (
            <div className="class-card" key={item.id}>
              <div className="class-card-header">
                <h3>{item.title}</h3>
                <span className="status-badge">{item.status}</span>
              </div>
              <div className="class-card-body">
                <p>👥 <strong>{item.students} Students</strong> enrolled</p>
                <p>📅 Next lesson: <strong>{item.nextLesson}</strong></p>
                <p>⏱️ Duration: <strong>{item.duration}</strong></p>
              </div>
              <div className="class-card-footer">
                <button className="view-class-btn">View Class</button>
                <button className="delete-icon-btn" title="Options">🗑️</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}