// src/components/NavBar.jsx

import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'; // Importing NavBar styles

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Task Manager</h1>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
