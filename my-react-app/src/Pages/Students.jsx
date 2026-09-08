import React, { useState } from 'react';
import './tutordashboard.css';
import './students.css';

export default function Students({ onNavigate, onLogout }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('All');

  const studentsData = [
    { id: 1, name: 'Emmanuella', subject: 'Web Development', level: 'Beginner', status: 'Active' },
    { id: 2, name: 'Balikis', subject: 'Java Programming', level: 'Intermediate', status: 'Active' },
    { id: 3, name: 'Aisha Adeyemi', subject: 'React Development', level: 'Advanced', status: 'Active' },
    { id: 4, name: 'Sofiyyah Abd Razaq', subject: 'Web Development', level: 'Intermediate', status: 'Completed' },
    { id: 5, name: 'Kazeem Abd Hafeez', subject: 'Java Programming', level: 'Advanced', status: 'Active' },
    { id: 6, name: 'Abdulmalik Zeyad', subject: 'UI/UX Design', level: 'Beginner', status: 'Completed' },
    { id: 7, name: 'victoria', subject: 'React Development', level: 'Intermediate', status: 'Active' },
    { id: 8, name: 'Abdulaziz Alako', subject: 'Web Development', level: 'Beginner', status: 'Active' }
  ];

  const filteredStudents = studentsData.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = subjectFilter === 'All' || student.subject === subjectFilter;
    return matchesSearch && matchesSubject;
  });

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
              className="nav-item" 
              onClick={() => onNavigate && onNavigate('classes')}
            >
              My Classes
            </button>
            <button 
              type="button"
              className="nav-item active" 
              onClick={() => onNavigate && onNavigate('students')}
            >
              Students
            </button>
            <button type="button" className="nav-item">Resources</button>
            <button type="button" className="nav-item">Settings</button>
          </nav>
        </div>

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
        <header className="dashboard-header">
          <div>
            <h2>Students</h2>
            <p className="subtitle-text">View and track student profiles across your classes</p>
          </div>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search students..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>

        {/* Top Summary Cards */}
        <div className="students-stats-grid">
          <div className="stat-card">
            <span className="stat-icon green">👥</span>
            <h3>20</h3>
            <p>Total Students</p>
          </div>
          <div className="stat-card">
            <span className="stat-icon green">🟢</span>
            <h3>15</h3>
            <p>Active Students</p>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="students-filter-bar">
          <div className="filter-group">
            <label>Filter by:</label>
            <select 
              className="filter-select"
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
            >
              <option value="All">Subject: All</option>
              <option value="Web Development">Web Development</option>
              <option value="Java Programming">Java Programming</option>
              <option value="React Development">React Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select>
            <select className="filter-select">
              <option>Status: All</option>
              <option>Active</option>
              <option>Completed</option>
            </select>
          </div>
        </div>

        {/* Students Data Table */}
        <div className="students-table-container">
          <table className="students-table">
            <thead>
              <tr>
                <th>NAME</th>
                <th>SUBJECT</th>
                <th>LEVEL</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td className="student-name-cell">
                    <span className="student-avatar-icon">👤</span>
                    <span>{student.name}</span>
                  </td>
                  <td>{student.subject}</td>
                  <td>{student.level}</td>
                  <td>
                    <span className={`status-pill ${student.status.toLowerCase()}`}>
                      {student.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="table-pagination">
            <span>Showing {filteredStudents.length} of {studentsData.length}</span>
            <div className="page-numbers">
              <button disabled>Previous</button>
              <button className="active">1</button>
              <button>2</button>
              <button>Next</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}