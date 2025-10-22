// src/App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Highlights from './components/Highlights/Highlights';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Edgar Rafael Hernandez Rios | Robotics Engineer & AI Innovator</title>
        <meta name="description" content="Edgar Rafael Hernandez Rios - Robotics Engineer specializing in AI, robotics, and software development. Innovating high-impact solutions for technology and education." />
        <meta name="keywords" content="Edgar Rafael Hernandez Rios, Robotics Engineer, AI Developer, Software Development, Robotics, Teleoperation, Machine Learning, Mechatronics, Innovation, GitHub" />
        <link rel="canonical" href="https://edgarhernandez94.github.io/" />
        <link rel="icon" href="%PUBLIC_URL%/images/favicon.ico" type="image/x-icon" />

        {/* Open Graph */}
        <meta property="og:title" content="Edgar Rafael Hernandez Rios | Robotics Engineer & AI Innovator" />
        <meta property="og:description" content="Specializing in AI, robotics, and software development. Innovating high-impact solutions for technology and education." />
        <meta property="og:image" content="https://edgarhernandez94.github.io/images/rafael.jpg" />
        <meta property="og:url" content="https://edgarhernandez94.github.io/" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Edgar Rafael Hernandez Rios | Robotics Engineer & AI Innovator" />
        <meta name="twitter:description" content="Specializing in AI, robotics, and software development. Innovating high-impact solutions for technology and education." />
        <meta name="twitter:image" content="https://edgarhernandez94.github.io/images/rafael.jpg" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Edgar Rafael Hernandez Rios",
            "jobTitle": "Robotics Engineer and AI Developer",
            "description": "Robotics Engineer specializing in AI, teleoperation, and software development.",
            "url": "https://edgarhernandez94.github.io/",
            "image": "https://edgarhernandez94.github.io/images/rafael.jpg",
            "sameAs": [
              "https://www.linkedin.com/in/rafaelhernandez94/",
              "https://github.com/edgarhernandez94"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Mirai Innovation Research Institute"
            }
          }
          `}
        </script>
      </Helmet>
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
