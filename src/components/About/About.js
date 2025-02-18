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
            <p>
              Hello, I'm <strong>Rafael Hernández</strong>, a passionate <strong>Mechatronics Engineer</strong> with a specialization in 
              <strong> Robotics</strong>, <strong>Artificial Intelligence (AI)</strong>, and <strong>Software Development</strong>.
            </p>
            <p>
              Currently, I work at <strong>Mirai Innovation Research Institute</strong>, where I lead innovative educational programs and 
              develop high-impact technological projects.
            </p>
            <p>
              My short-term goal is to expand my expertise and contribute to leading technology companies, driving innovation and solving 
              complex challenges. In the long term, I aspire to establish a startup focused on creating robots that address 
              <strong>social issues</strong>, bridging the technological gap in <strong>Mexico</strong>, and fostering collaboration between 
              <strong>Mexico</strong> and <strong>Japan</strong>.
            </p>
          </div>
          <div className="about-image">
            <img src={rafaelImage} alt="Rafael Hernández" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
