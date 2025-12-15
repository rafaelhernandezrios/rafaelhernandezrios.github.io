// src/components/Navbar/Navbar.js
import React, { useState, useEffect } from 'react';

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

  const navLinks = [
    { name: 'About', section: 'about', icon: 'fas fa-user' },
    { name: 'Projects', section: 'projects', icon: 'fas fa-code' },
    { name: 'Skills', section: 'skills', icon: 'fas fa-cogs' },
    { name: 'Highlights', section: 'highlights', icon: 'fas fa-star' },
    { name: 'Contact', section: 'contact', icon: 'fas fa-envelope' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Brand/Name - Left */}
          <a 
            href="#about" 
            className="text-xl font-bold text-text-primary hover:text-accent transition-colors duration-200"
            onClick={() => handleNavClick('about')}
          >
            Rafael Hernandez
          </a>
          
          {/* Navigation Links - Right */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.section}
                href={`#${link.section}`}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.section
                    ? 'text-accent'
                    : 'text-text-primary hover:text-accent'
                }`}
                onClick={() => handleNavClick(link.section)}
              >
                {link.name}
                {activeSection === link.section && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"></span>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none ${
              isMobileMenuOpen ? 'text-accent' : 'text-text-primary'
            }`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.section}
                href={`#${link.section}`}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.section
                    ? 'bg-accent/10 text-accent'
                    : 'text-text-primary hover:bg-primary/10 hover:text-accent'
                }`}
                onClick={() => handleNavClick(link.section)}
              >
                <i className={`${link.icon} mr-2`}></i>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
