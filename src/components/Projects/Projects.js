// src/components/Projects/Projects.js
import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faWifi, faCamera, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const projectsData = [
  {
    title: "Muscle Monitoring Project AI Classification",
    icon: faBrain,
    description: "This project provides a solution for muscle monitoring using an Arduino and a machine learning classification model. The system acquires electromyographic (EMG) data in two distinct conditions: resting state and muscle contraction state, and uses this data to make real-time predictions about the muscle contraction state.",
    link: "https://github.com/edgarhernandez94/EMGModelsPrediction"
  },
  {
    title: "Pepper Remote Control Suite",
    icon: faWifi,
    description: "Pepper Control Dashboard is a versatile project that provides a web-based interface to remotely interact with and monitor the Pepper robot. It includes features such as live video streaming, movement control, text-to-speech commands, and remote Python code execution, all designed to enhance the robot's usability in research and development environments.",
    link: "https://github.com/rafaelhernandezrios/PepperControlWeb"
  },
  {
    title: "Robot Image Recognition",
    icon: faCamera,
    description: "Enhancing robots with GPT-powered perception.",
    link: "https://github.com/edgarhernandez94/Robot_Imagerecognition_GPT"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <h3><FontAwesomeIcon icon={project.icon} /> {project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                <FontAwesomeIcon icon={faExternalLinkAlt} /> View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
