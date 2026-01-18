import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Dashboard.css';

export default function Dashboard({ onLogout }) {
  const [activeMenu, setActiveMenu] = useState('process-list');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo-icon">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="sidebar-title">Dashboard</h2>
        </div>

        <nav className="sidebar-nav">
          <button
            className={`nav-item ${activeMenu === 'process-list' ? 'nav-item-active' : ''}`}
            onClick={() => {
              setActiveMenu('process-list');
              setIsSidebarOpen(false);
            }}
          >
            <svg className="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            <span>Process List</span>
          </button>

          <button
            className={`nav-item ${activeMenu === 'profile' ? 'nav-item-active' : ''}`}
            onClick={() => {
              setActiveMenu('profile');
              setIsSidebarOpen(false);
            }}
          >
            <svg className="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Profile</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <button className="btn btn-secondary logout-btn" onClick={handleLogout}>
            <svg className="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>
      </aside>

      {/* Rest of Dashboard code stays the same... */}
      {/* (Keep all the main content, header, and content components) */}
    </div>
  );
}

// Keep ProcessListContent and ProfileContent components the same