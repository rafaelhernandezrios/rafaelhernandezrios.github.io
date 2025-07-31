// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Rafael Hernandez. All rights reserved.</p>
        <div className="footer-links">
          <a href="#about" className="footer-link">About</a>
          <a href="#skills" className="footer-link">Skills</a>
          <a href="#projects" className="footer-link">Projects</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
