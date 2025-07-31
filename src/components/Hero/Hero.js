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
    
    tl.from(".hero h1", { 
      duration: 1.2, 
      y: -80, 
      opacity: 0, 
      ease: "back.out(1.7)",
      delay: 0.3
    })
    .from(".hero p", { 
      duration: 1, 
      y: 60, 
      opacity: 0, 
      ease: "power2.out"
    }, "-=0.5")
    .from(".cta-btn", { 
      duration: 1, 
      opacity: 0, 
      scale: 0.8,
      ease: "elastic.out(1, 0.3)"
    }, "-=0.3");

    // Add floating animation to particles
    gsap.to(".particle", {
      y: -30,
      rotation: 360,
      duration: 6,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 2
    });
  }, []);

  return (
    <header className="hero">
      {/* Floating particles */}
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
      
      <div className="container">
        <h1>Rafael Hernandez</h1>
        <p>Innovating Robotics & AI with Simplicity and Precision</p>
        <a href="#dashboard" className="cta-btn">
          Explore My Dashboard <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </header>
  );
};

export default Hero;
