import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>🎬 Movie Analytics</h2>
        <p>Data Dashboard Part 2</p>
      </div>
      
      <nav className="sidebar-nav">
        <Link to="/" className="nav-link">
          📊 Dashboard
        </Link>
        <div className="nav-section">
          <h3>Quick Stats</h3>
          <div className="stat-item">
            <span className="stat-label">Total Movies:</span>
            <span className="stat-value">8</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Avg Rating:</span>
            <span className="stat-value">8.9</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Genres:</span>
            <span className="stat-value">5</span>
          </div>
        </div>
      </nav>
      
      <div className="sidebar-footer">
        <p>Built with React & Recharts</p>
      </div>
    </div>
  );
};

export default Sidebar; 