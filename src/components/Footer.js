import React from 'react';
import './Footer.css'; // Optional CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Navdeep's Task Manager. All rights reserved.</p>

        

        
      </div>
    </footer>
  );
};

export default Footer;
