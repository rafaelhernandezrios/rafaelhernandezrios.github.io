// src/components/Navbar/Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/rafaelhernandezrios', icon: 'fab fa-linkedin-in' },
    { name: 'GitHub', url: 'https://github.com/rafaelhernandezrios', icon: 'fab fa-github' },
    { name: 'Twitter', url: 'https://twitter.com/rafaelhernandez', icon: 'fab fa-twitter' },
    { name: 'Email', url: 'mailto:rafael@example.com', icon: 'fas fa-envelope' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#about" className="navbar-brand" onClick={() => handleNavClick('about')}>
          <span className="brand-text">Rafael Hernandez</span>
          <span className="brand-subtitle">Full Stack Developer</span>
        </a>
        
        <div className="navbar-content">
          <ul className={`navbar-nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <li className="nav-item">
              <a 
                href="#about" 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => handleNavClick('about')}
              >
                <i className="fas fa-user"></i>
                <span>About</span>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#projects" 
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={() => handleNavClick('projects')}
              >
                <i className="fas fa-code"></i>
                <span>Projects</span>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#skills" 
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={() => handleNavClick('skills')}
              >
                <i className="fas fa-cogs"></i>
                <span>Skills</span>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#highlights" 
                className={`nav-link ${activeSection === 'highlights' ? 'active' : ''}`}
                onClick={() => handleNavClick('highlights')}
              >
                <i className="fas fa-star"></i>
                <span>Highlights</span>
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#contact" 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => handleNavClick('contact')}
              >
                <i className="fas fa-envelope"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>

          <div className={`social-links ${isMobileMenuOpen ? 'open' : ''}`}>
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.name}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

