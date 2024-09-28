// src/components/Footer.jsx

import React from "react";
import './Footer.css'; // Importing Footer styles

export default function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Task Manager Navdeep Bhangu. All rights reserved.</p>
      <div>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
      </div>
    </footer>
  );
}
