import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <h1>Task Manager</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
