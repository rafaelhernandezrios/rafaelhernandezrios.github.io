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

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#about" className="navbar-brand" onClick={() => handleNavClick('about')}>
          Rafael Hernandez
        </a>
        
        <ul className={`navbar-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <a 
              href="#about" 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => handleNavClick('about')}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#dashboard" 
              className={`nav-link ${activeSection === 'dashboard' ? 'active' : ''}`}
              onClick={() => handleNavClick('dashboard')}
            >
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#projects" 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => handleNavClick('projects')}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#skills" 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => handleNavClick('skills')}
            >
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#highlights" 
              className={`nav-link ${activeSection === 'highlights' ? 'active' : ''}`}
              onClick={() => handleNavClick('highlights')}
            >
              Highlights
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#contact" 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </a>
          </li>
        </ul>

        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <i className={`fas fa-${isMobileMenuOpen ? 'times' : 'bars'}`}></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

