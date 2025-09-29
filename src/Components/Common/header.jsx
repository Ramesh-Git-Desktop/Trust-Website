import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/Img/gajapati.jpg';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="header border d-flex align-items-center justify-content-between px-3">
      
      {/* Logo */}
      <div className="logo">
        <img 
          src="https://www.saylor.org/wp-content/themes/saylorstrap/img/logos/logo_dark_large.svg" 
          alt="Logo" 
          style={{ height: "40px" }}
        />
      </div>

      {/* Hamburger Button (Visible only on small screens) */}
      <button 
        className="hamburger d-lg-none p-1" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "x" : "☰"}
      </button>

      {/* Nav Links */}
      <ul className={`nav-links d-lg-flex ${isOpen ? "open" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>

      {/* Search Bar */}
      <div className="search-bar d-none d-lg-block">
        <input type="text" placeholder="Search..." />
      </div>

      {/* User Profile */}
      <div className="user-profile d-none d-lg-block">
        <img 
          src={profile} 
          alt="User Profile" 
          style={{ height: "40px", borderRadius: "50%" }}
        />
      </div>
    </nav>
  );
}

export default Header;
