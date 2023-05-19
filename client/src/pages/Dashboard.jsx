import React from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
          <h2>My Text Tools</h2>
        </div>
        <ul className="ull">
          <li className="lli">
            <Link to="/grammar-checker">
              <i className="fas fa-spell-check"></i> Grammar Checker
            </Link>
          </li>
          <li className="lli">
            <Link to="/text-analyzer">
              <i className="fas fa-file-alt"></i> Text Analyzer
            </Link>
          </li>
          <li className="lli">
            <div className="dropdown">
              <button className="dropdown-btn">
                <i className="fas fa-database"></i> Corpus
                <i className="fas fa-chevron-down"></i>
              </button>
              <div className="dropdown-content">
                <Link to="/corpus-cleaner">Corpus Cleaner</Link>
                <Link to="/corpus-hosting">Corpus Hosting</Link>
              </div>
            </div>
          </li>
          <li className="lli">
            <Link to="/file-management">
              <i className="fas fa-folder"></i> File Management
            </Link>
          </li>
          <li className="lli">
            <Link to="/profile-update">
              <i className="fas fa-user-edit"></i> Profile Update
            </Link>
          </li>
          <li className="lli">
            <Link to="/upload-corpus">
              <i className="fas fa-cloud-upload-alt"></i> Upload Corpus
            </Link>
          </li>
          <li className="lli">
            <Link to="/user-info">
              <i className="fas fa-info-circle"></i> User Info
            </Link>
          </li>
        </ul>
      </div>
      <div className="content22">
        {/* Insert your main content here */}
      </div>
    </div>
  );
}

export default Dashboard;
