// src/components/Hero/Hero.js
import React, { useEffect } from 'react';
import './Hero.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    // Enhanced animations with staggered timing
    const tl = gsap.timeline();
    
    tl.from(".hero-title", { 
      duration: 1.2, 
      y: -80, 
      opacity: 0, 
      ease: "back.out(1.7)",
      delay: 0.3
    })
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
          <h1 className="hero-title">Rafael Hernandez</h1>
          <p className="hero-subtitle">Robotics Engineer & AI Innovator</p>
          <p className="hero-description">
            Passionate <strong>Mechatronics Engineer</strong> specializing in <strong>Robotics</strong>, 
            <strong>Artificial Intelligence</strong>, and <strong>Software Development</strong>. 
            Currently leading innovative educational programs at <strong>Mirai Innovation Research Institute</strong>.
          </p>
          <div className="hero-buttons">
            <a href="#dashboard" className="hero-button primary">
              Explore My Dashboard <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#projects" className="hero-button secondary">
              View Projects <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
