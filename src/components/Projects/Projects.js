// src/components/Projects/Projects.js
import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faWifi, faCamera, faCar, faRobot, faCodeBranch, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const projectsData = [
  {
    title: "Muscle Monitoring AI Classification",
    icon: faBrain,
    description: "AI-powered EMG classification using an Arduino for muscle activity detection.",
    link: "https://github.com/edgarhernandez94/EMGModelsPrediction"
  },
  {
    title: "Pepper Remote Control Suite",
    icon: faWifi,
    description: "A web-based interface for controlling the Pepper robot remotely, featuring live video streaming, movement control, and speech interaction.",
    link: "https://github.com/rafaelhernandezrios/PepperControlWeb"
  },
  {
    title: "Robot Image Recognition with GPT",
    icon: faCamera,
    description: "Enhancing robotic perception through GPT-powered image recognition.",
    link: "https://github.com/edgarhernandez94/Robot_Imagerecognition_GPT"
  },
  {
    title: "Teledriving System",
    icon: faCar,
    description: "Development of a remote-controlled vehicle using Raspberry Pi for real-time video streaming and motor control.",
    link: "https://github.com/edgarhernandez94/Teledriving"
  },
  {
    title: "Unitree Go2 Teleoperation",
    icon: faRobot,
    description: "Teleoperation interface for controlling the Unitree Go2 quadruped robot over the internet.",
    link: "https://github.com/edgarhernandez94/Unitree_Teleoperation"
  },
  {
    title: "AI-Powered CV Evaluation Platform",
    icon: faCodeBranch,
    description: "A web platform for evaluating CVs using AI, providing instant feedback and scoring.",
    link: "https://github.com/edgarhernandez94/CV_Evaluation_Platform"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2>My Projects</h2>
        <p className="section-description">
          Here are some of the projects I've been working on, ranging from AI-powered robotics to teleoperation systems.
        </p>
        <div className="project-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3><FontAwesomeIcon icon={project.icon} /> {project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FontAwesomeIcon icon={faExternalLinkAlt} /> View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
