import React from 'react';
import './componentCSS/Navbar.css';  // You can create a separate CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="/Display" className="navbar-link">Display</a></li>
        <li className="navbar-item"><a href="/Keyboard" className="navbar-link">Keyboard</a></li>
        <li className="navbar-item"><a href="/Mouse" className="navbar-link">Mouse</a></li>
        <li className="navbar-item"><a href="/Lamp" className="navbar-link">Lamp</a></li>
        <li className="navbar-item"><a href="/Clock" className="navbar-link">Clock</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
