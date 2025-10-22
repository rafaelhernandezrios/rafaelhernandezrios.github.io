import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRobot, 
  faCode, 
  faChartBar, 
  faMicrochip
} from '@fortawesome/free-solid-svg-icons';

const skillsData = [
  {
    id: 1,
    title: "Robotics & AI",
    icon: faRobot,
    skills: [
      "ROS & MoveIt Framework",
      "OpenCV & Computer Vision",
      "TensorFlow & PyTorch",
      "Machine Learning & Deep Learning",
      "SLAM & Path Planning"
    ]
  },
  {
    id: 2,
    title: "Software Development",
    icon: faCode,
    skills: [
      "React, JavaScript, TypeScript",
      "Python, C++, Node.js",
      "Flask, Django, RESTful APIs",
      "MongoDB, MySQL, Git",
      "Docker & CI/CD"
    ]
  },
  {
    id: 3,
    title: "Data & Cloud",
    icon: faChartBar,
    skills: [
      "Data Analysis & Visualization",
      "AWS, Heroku, GitHub Actions",
      "Pandas, NumPy, Matplotlib",
      "Statistical Analysis",
      "Infrastructure as Code"
    ]
  },
  {
    id: 4,
    title: "Embedded Systems",
    icon: faMicrochip,
    skills: [
      "Arduino, ESP32, Raspberry Pi",
      "STM32, C Programming",
      "MATLAB, Real-Time Systems",
      "Socket Programming",
      "Hardware Integration"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skillsData.map((category) => (
            <div key={category.id} className="skill-category">
              <h3>
                <FontAwesomeIcon icon={category.icon} />
                {category.title}
              </h3>
              <ul className="skills-list">
                {category.skills.map((skill, index) => (
                  <li key={index}>
                    <i className="fas fa-check"></i>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
