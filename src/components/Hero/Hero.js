// src/components/Hero/Hero.js
import React, { useEffect } from 'react';
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
    .from(".hero-description", { 
      duration: 1, 
      y: 60, 
      opacity: 0, 
      ease: "power2.out"
    }, "-=0.5")
    .from(".hero-button", { 
      duration: 1, 
      opacity: 0, 
      scale: 0.8,
      ease: "elastic.out(1, 0.3)"
    }, "-=0.3");
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-background overflow-hidden">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="hero-image order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroPhoto} 
                  alt="Rafael Hernandez" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Text Content */}
          <div className="hero-text-content order-1 lg:order-2 space-y-6">
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight">
              Robotics Engineer & AI Innovator
            </h1>
            
            <p className="hero-description text-lg md:text-xl text-text-secondary leading-relaxed">
              Advancing the future of <strong className="text-primary">robotics</strong>, <strong className="text-primary">mechatronics</strong>, and <strong className="text-primary">neurotechnology</strong> 
              through research, innovation, and education. Currently working in <strong className="text-accent">Osaka, Japan</strong>.
            </p>
            
            <div className="hero-button pt-4">
              <a 
                href="#projects" 
                className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-lg shadow-lg hover:bg-accent-dark transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                View My Work
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
