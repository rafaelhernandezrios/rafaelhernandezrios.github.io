// src/components/Footer/Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/rafaelhernandez94/' },
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/rafaelhernandezrios' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/rafaelhernandez' },
    { name: 'ResearchGate', icon: 'fab fa-researchgate', url: 'https://www.researchgate.net/profile/Rafael-Hernandez' }
  ];

  return (
    <footer className="bg-primary-dark text-text-light py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Rafael Hernandez</h3>
            <p className="text-text-light/80 mb-4">
              Robotics Engineer & AI Innovator. Advancing technology through research, innovation, and education.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-text-light/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-text-light/80">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt text-accent mr-3"></i>
                <span>Osaka, Japan</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-accent mr-3"></i>
                <a 
                  href="mailto:e.r.hdez94@gmail.com" 
                  className="hover:text-accent transition-colors duration-200"
                >
                  e.r.hdez94@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-text-light/60">
            &copy; {currentYear} Rafael Hernandez. All rights reserved.
          </p>
          <p className="text-text-light/60 mt-2 text-sm">
            Built with React, Vite, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
