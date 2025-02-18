import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, 
  faTachometerAlt, 
  faProjectDiagram, 
  faTools, 
  faEnvelope, 
  faBars, 
  faTimes, 
  faAward 
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  const closeMenu = () => {
    setIsMobile(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Rafael Hernandez</h1>
        
        <ul 
          className={
            isMobile 
              ? "nav-links-mobile nav-links-mobile-active" 
              : "nav-links"
          } 
          onClick={closeMenu}
        >
          <li><a href="#about"><FontAwesomeIcon icon={faUser} /> About</a></li>
          <li><a href="#dashboard"><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</a></li>
          <li><a href="#projects"><FontAwesomeIcon icon={faProjectDiagram} /> Projects</a></li>
          <li><a href="#skills"><FontAwesomeIcon icon={faTools} /> Skills</a></li>
          <li><a href="#highlights"><FontAwesomeIcon icon={faAward} /> Highlights</a></li>
          <li><a href="#contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</a></li>
        </ul>

        <button className="mobile-menu-icon" onClick={handleToggle}>
          <FontAwesomeIcon icon={isMobile ? faTimes : faBars} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

