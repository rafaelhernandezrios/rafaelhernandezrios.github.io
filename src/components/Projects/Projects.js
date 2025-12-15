// src/components/Projects/Projects.js
import React, { useState } from 'react';

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
    <section id="projects" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Featured Projects</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Innovative solutions in robotics, AI, and technology. From brain-computer interfaces to teleoperation systems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-accent text-white shadow-lg transform scale-105'
                  : 'bg-white text-text-primary hover:bg-primary/10 hover:text-primary border border-primary/20'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <i className={`${category.icon} mr-2`}></i>
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Project Image/Icon Header */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5"></div>
                <i className={`${project.icon} text-6xl text-primary/40 group-hover:text-accent transition-colors duration-300`}></i>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Active' 
                      ? 'bg-green-100 text-green-800'
                      : project.status === 'Completed'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                  <span className="text-xs text-text-secondary">{project.year}</span>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-accent hover:text-accent-dark font-medium text-sm flex items-center group/link"
                  >
                    View Code
                    <i className="fas fa-external-link-alt ml-2 text-xs group-hover/link:translate-x-1 transition-transform"></i>
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
