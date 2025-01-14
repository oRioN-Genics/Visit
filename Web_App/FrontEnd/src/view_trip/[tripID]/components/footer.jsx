import React from 'react';
import './footer.css'; // Make sure you have a CSS file for the footer styling

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p className="footer-text">
          <strong>Created by: Sathsara Anuradha</strong>
        </p>
        <p className="footer-text">Email: sathsara2021@gmail.com</p>
        <p className="footer-text">
          Follow me on:
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-link">
            LinkedIn
          </a> |
          <a href="https://github.com/oRioN-Genics" target="_blank" rel="noopener noreferrer" className="social-link">
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
