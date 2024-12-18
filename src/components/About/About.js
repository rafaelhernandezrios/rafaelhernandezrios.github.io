// src/components/About/About.js
import React from 'react';
import './About.css';
import rafaelImage from '../../images/rafael.jpg'; // Asegúrate de tener la imagen en la ruta correcta

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I am Rafael Hernández, a Mechatronics Engineer specializing in Robotics, Artificial Intelligence (AI), and Software Development. Currently, I work at Mirai Innovation Research Institute, where I lead educational programs and develop high-impact technological projects.</p>
            <p>In the short term, my goal is to expand my expertise and contribute to leading technology companies, leveraging my skills to drive innovation and solve complex challenges. Looking ahead, I aspire to establish a startup that develops robots focused on addressing social issues, bridging the technological gap in Mexico, and fostering robust collaboration between Mexico and Japan.</p>
          </div>
          <div className="about-image">
            <img src={rafaelImage} alt="Rafael Hernandez" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
