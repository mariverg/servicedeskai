// src/components/Navbar.js
import React from 'react';
import './Navbar.css';  // Para los estilos que añadiremos luego

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">ServiceDeskAI</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/tickets">Tickets</a></li>
        <li><a href="/profile">Profile</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
