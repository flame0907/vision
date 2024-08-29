import React, { useState } from 'react';
import './navbar.css'; // Import the external CSS file
import profile from '../../assets/profile-user.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Vision
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleToggle}
        aria-controls="navbarSupportedContent"
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
        <div className="navbar-nav-container">
          <ul className={`navbar-nav ${isCollapsed ? '' : 'show'}`}>
            <li className="nav-item active">
              <Link className="nav-link" to="/welcome">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>

       
        <div className="profile-logo">
          <img src={profile} alt="Profile" className="profile-user" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
