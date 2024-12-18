// src/components/Hero/Hero.js
import React, { useEffect } from 'react';
import './Hero.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    gsap.from(".hero h1", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
    gsap.from(".hero p", { duration: 1, y: 50, opacity: 0, delay: 0.5 });
    gsap.from(".cta-btn", { duration: 1, opacity: 0, delay: 1 });
  }, []);

  return (
    <header className="hero">
      <div className="container">
        <h1>Rafael Hernandez</h1>
        <p>Innovating Robotics & AI with Simplicity and Precision</p>
        <a href="#dashboard" className="cta-btn">Explore My Dashboard <i className="fas fa-arrow-right"></i></a>
      </div>
    </header>
  );
};

export default Hero;
