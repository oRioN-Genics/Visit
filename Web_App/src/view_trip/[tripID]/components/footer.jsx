import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <p className="footer-text">
          <strong>Created by: Sathsara Anuradha</strong>
        </p>
        <p className="footer-text">Computer Engineering Undergraduate - University of Ruhuna,</p>
        <p className="footer-text">Email: sathsara2021@gmail.com</p>
        <p className="footer-text">
          Follow me on:
          <a href="www.linkedin.com/in/sathsara-anuradha-275a05278" target="_blank" rel="noopener noreferrer" className="social-link">
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
