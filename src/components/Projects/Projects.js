// src/components/Projects/Projects.js
import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: "Muscle Monitoring AI Classification",
      icon: "fas fa-brain",
      description: "AI-powered EMG classification using an Arduino for muscle activity detection. Advanced machine learning algorithms for real-time muscle signal processing and classification.",
      link: "https://github.com/edgarhernandez94/EMGModelsPrediction",
      category: "AI/ML",
      technologies: ["Python", "Arduino", "Machine Learning", "EMG"],
      status: "Completed",
      year: "2023"
    },
    {
      id: 2,
      title: "Pepper Remote Control Suite",
      icon: "fas fa-wifi",
      description: "A comprehensive web-based interface for controlling the Pepper robot remotely, featuring live video streaming, movement control, and speech interaction capabilities.",
      link: "https://github.com/rafaelhernandezrios/PepperControlWeb",
      category: "Robotics",
      technologies: ["JavaScript", "WebRTC", "ROS", "Python"],
      status: "Active",
      year: "2024"
    },
    {
      id: 3,
      title: "Robot Image Recognition with GPT",
      icon: "fas fa-camera",
      description: "Enhancing robotic perception through GPT-powered image recognition. Integration of large language models with computer vision for intelligent robotic systems.",
      link: "https://github.com/edgarhernandez94/Robot_Imagerecognition_GPT",
      category: "AI/ML",
      technologies: ["OpenAI GPT", "Computer Vision", "Python", "Robotics"],
      status: "Completed",
      year: "2023"
    },
    {
      id: 4,
      title: "Teledriving System",
      icon: "fas fa-car",
      description: "Development of a remote-controlled vehicle using Raspberry Pi for real-time video streaming and motor control. Low-latency teleoperation system for autonomous vehicles.",
      link: "https://github.com/edgarhernandez94/Teledriving",
      category: "Teleoperation",
      technologies: ["Raspberry Pi", "Python", "OpenCV", "WebRTC"],
      status: "Completed",
      year: "2023"
    },
    {
      id: 5,
      title: "Unitree Go2 Teleoperation",
      icon: "fas fa-robot",
      description: "Teleoperation interface for controlling the Unitree Go2 quadruped robot over the internet. Real-time control system with haptic feedback and video streaming.",
      link: "https://github.com/edgarhernandez94/Unitree_Teleoperation",
      category: "Robotics",
      technologies: ["ROS", "Python", "WebRTC", "Quadruped Robotics"],
      status: "Active",
      year: "2024"
    },
    {
      id: 6,
      title: "AI-Powered CV Evaluation Platform",
      icon: "fas fa-code-branch",
      description: "A web platform for evaluating CVs using AI, providing instant feedback and scoring. Natural language processing for resume analysis and candidate ranking.",
      link: "https://github.com/edgarhernandez94/CV_Evaluation_Platform",
      category: "Web Development",
      technologies: ["React", "Node.js", "NLP", "AI"],
      status: "Completed",
      year: "2023"
    },
    {
      id: 7,
      title: "EEG-based Robot Control",
      icon: "fas fa-microchip",
      description: "Brain-computer interface system for controlling robots using EEG signals. Real-time signal processing and machine learning for intention recognition.",
      link: "https://github.com/rafaelhernandezrios/EEG-Robot-Control",
      category: "Neurotechnology",
      technologies: ["EEG", "Python", "Machine Learning", "BCI"],
      status: "Research",
      year: "2024"
    },
    {
      id: 8,
      title: "Web-based Teleoperation Platform",
      icon: "fas fa-globe",
      description: "Multi-robot teleoperation platform accessible through web browsers. Supports various robot types with unified control interface and real-time monitoring.",
      link: "https://github.com/rafaelhernandezrios/Web-Teleoperation",
      category: "Teleoperation",
      technologies: ["WebRTC", "JavaScript", "ROS", "Multi-robot"],
      status: "Active",
      year: "2024"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: 'fas fa-th' },
    { id: 'AI/ML', name: 'AI/ML', icon: 'fas fa-brain' },
    { id: 'Robotics', name: 'Robotics', icon: 'fas fa-robot' },
    { id: 'Teleoperation', name: 'Teleoperation', icon: 'fas fa-wifi' },
    { id: 'Neurotechnology', name: 'Neurotechnology', icon: 'fas fa-microchip' },
    { id: 'Web Development', name: 'Web Dev', icon: 'fas fa-code' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="projects-header">
          <h2>🚀 My Projects</h2>
          <p className="projects-subtitle">
            Innovative solutions in robotics, AI, and technology. From brain-computer interfaces to teleoperation systems.
          </p>
        </div>

        <div className="projects-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <i className={category.icon}></i>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  <i className={project.icon}></i>
                </div>
                <div className="project-status">
                  <span className={`status-badge ${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <div className="project-meta">
                    <span className="project-year">{project.year}</span>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                  >
                    <i className="fab fa-github"></i>
                    <span>View Code</span>
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
