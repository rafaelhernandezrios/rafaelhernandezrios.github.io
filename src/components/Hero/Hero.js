// src/components/Hero/Hero.js
import React, { useEffect } from 'react';
import './Hero.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroPhoto from '../../images/hero-photo.jpg';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    // Enhanced animations with staggered timing
    const tl = gsap.timeline();
    
    tl.from(".hero-image", { 
      duration: 1.2, 
      x: -100, 
      opacity: 0, 
      ease: "back.out(1.7)",
      delay: 0.2
    })
    .from(".hero-title", { 
      duration: 1.2, 
      y: -80, 
      opacity: 0, 
      ease: "back.out(1.7)"
    }, "-=0.8")
    .from(".hero-subtitle", { 
      duration: 1, 
      y: 60, 
      opacity: 0, 
      ease: "power2.out"
    }, "-=0.5")
    .from(".hero-description", { 
      duration: 1, 
      y: 60, 
      opacity: 0, 
      ease: "power2.out"
    }, "-=0.3")
    .from(".hero-experience", { 
      duration: 1, 
      y: 40, 
      opacity: 0, 
      ease: "power2.out"
    }, "-=0.2")
    .from(".hero-button", { 
      duration: 1, 
      opacity: 0, 
      scale: 0.8,
      ease: "elastic.out(1, 0.3)",
      stagger: 0.2
    }, "-=0.3");
  }, []);

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image-container">
            <img src={heroPhoto} alt="Rafael Hernandez" className="hero-image" />
            <div className="hero-image-overlay"></div>
          </div>
          
          <div className="hero-text-content">
            <h1 className="hero-title">Rafael Hernandez</h1>
            <p className="hero-subtitle">🦾 Mechatronics Engineer | Robotics & AI Specialist | Web Developer | Technology Leader</p>
            <p className="hero-description">
              Advancing the future of <strong>robotics</strong>, <strong>mechatronics</strong>, and <strong>neurotechnology</strong> 
              through research, innovation, and education. Currently working in <strong>Osaka, Japan</strong>.
            </p>
            
            <div className="hero-experience">
              <h3>🚀 Areas of Expertise</h3>
              <div className="expertise-tags">
                <span className="expertise-tag">Mechatronics & Robotics</span>
                <span className="expertise-tag">Artificial Intelligence</span>
                <span className="expertise-tag">Neurotechnology</span>
                <span className="expertise-tag">Web Development</span>
                <span className="expertise-tag">STEM Education</span>
                <span className="expertise-tag">Innovation</span>
              </div>
            </div>
            
            <div className="hero-buttons">
              <a href="#projects" className="hero-button primary">
                View Projects <i className="fas fa-external-link-alt"></i>
              </a>
              <a href="#skills" className="hero-button secondary">
                My Skills <i className="fas fa-cogs"></i>
              </a>
              <a href="#contact" className="hero-button tertiary">
                Let's Connect <i className="fas fa-handshake"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
