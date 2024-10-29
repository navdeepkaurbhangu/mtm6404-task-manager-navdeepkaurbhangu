import React from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed

function Navigation() {
  return (
    <nav className="navbar">
      <h1>Iteration03</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
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

export default Navigation;
