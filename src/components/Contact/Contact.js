// src/components/Contact/Contact.js
import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        <p>Let's connect:</p>
        <ul className="contact-list">
          <li>
            <a href="https://www.linkedin.com/in/rafaelhernandez94/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" /> LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:e.r.hdez94@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} size="2x" /> e.r.hdez94@gmail.com
            </a>
          </li>
          <li>
            <a href="https://github.com/rafaelhernandezrios" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" /> GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
