// src/components/Contact/Contact.js
import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>Let's connect and discuss opportunities for collaboration in robotics, AI, and software development.</p>
          </div>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/rafaelhernandez94/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
            <a href="mailto:e.r.hdez94@gmail.com" className="contact-link secondary">
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </a>
            <a href="https://github.com/rafaelhernandezrios" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
