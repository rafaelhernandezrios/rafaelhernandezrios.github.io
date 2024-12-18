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
    title: "Teleoperation System",
    icon: faWifi,
    description: "Remote robot control with intuitive interfaces.",
    link: "https://github.com/edgarhernandez94/Teleoperation_Robot_System"
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
        <h2>Highlighted Projects</h2>
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
