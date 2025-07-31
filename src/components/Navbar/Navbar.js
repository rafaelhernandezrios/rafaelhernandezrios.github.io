// src/components/Navbar/Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTachometerAlt, faProjectDiagram, faTools, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
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

  const handleToggle = () => {
    setIsMobile(!isMobile);
    // Prevent body scroll when mobile menu is open
    if (!isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMobile(false);
    document.body.style.overflow = 'unset';
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    closeMenu();
    
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} aria-label="Navegación principal">
      <div className="container">
        <h1 className="logo hover-scale">Rafael Hernandez</h1>
        
        <div className={isMobile ? "overlay active" : "overlay"} onClick={closeMenu}></div>
        
        <ul 
          className={
            isMobile 
              ? "nav-links-mobile nav-links-mobile-active" 
              : "nav-links"
          }
        >
          <li className="mobile-close">
            <button aria-label="Cerrar menú" onClick={closeMenu}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </li>
          <li>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''} 
              onClick={() => handleNavClick('about')}
            >
              <FontAwesomeIcon icon={faUser} /> About
            </a>
          </li>
          <li>
            <a 
              href="#dashboard" 
              className={activeSection === 'dashboard' ? 'active' : ''} 
              onClick={() => handleNavClick('dashboard')}
            >
              <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={activeSection === 'projects' ? 'active' : ''} 
              onClick={() => handleNavClick('projects')}
            >
              <FontAwesomeIcon icon={faProjectDiagram} /> Projects
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className={activeSection === 'skills' ? 'active' : ''} 
              onClick={() => handleNavClick('skills')}
            >
              <FontAwesomeIcon icon={faTools} /> Skills
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''} 
              onClick={() => handleNavClick('contact')}
            >
              <FontAwesomeIcon icon={faEnvelope} /> Contact
            </a>
          </li>
        </ul>

        <button 
          className="mobile-menu-icon hover-scale" 
          onClick={handleToggle} 
          aria-label={isMobile ? "Cerrar menú" : "Abrir menú"}
        >
          <FontAwesomeIcon icon={isMobile ? faTimes : faBars} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
