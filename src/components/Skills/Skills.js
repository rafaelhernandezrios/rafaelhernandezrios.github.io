import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRobot, 
  faBrain, 
  faCode, 
  faChartBar, 
  faCloud, 
  faMicrochip
} from '@fortawesome/free-solid-svg-icons';

const skillsData = [
  {
    id: 1,
    title: "Robotics",
    icon: faRobot,
    skills: [
      "ROS (Robot Operating System)",
      "MoveIt Framework",
      "OpenCV",
      "Python, C++",
      "RViz, Gazebo",
      "LiDAR Integration",
      "SLAM Tools",
      "Kinematics & Path Planning",
      "Teleoperation Systems"
    ]
  },
  {
    id: 2,
    title: "AI Development",
    icon: faBrain,
    skills: [
      "TensorFlow, PyTorch",
      "Scikit-learn",
      "NumPy, Pandas",
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "EEG/EMG Classification",
      "Jupyter Notebook"
    ]
  },
  {
    id: 3,
    title: "Web Development",
    icon: faCode,
    skills: [
      "React, HTML5, CSS3",
      "JavaScript, TypeScript",
      "Flask, Django",
      "Node.js",
      "MongoDB, MySQL",
      "RESTful APIs",
      "Git, GitHub",
      "Docker, Webpack"
    ]
  },
  {
    id: 4,
    title: "Data Analysis",
    icon: faChartBar,
    skills: [
      "Python, SQL",
      "Pandas, Matplotlib",
      "Seaborn",
      "Excel, Tableau",
      "Power BI",
      "Statistical Analysis",
      "Data Visualization",
      "Automated Reporting"
    ]
  },
  {
    id: 5,
    title: "Cloud Computing",
    icon: faCloud,
    skills: [
      "AWS, Heroku",
      "PythonAnywhere",
      "CI/CD Pipelines",
      "Docker, Terraform",
      "GitHub Actions",
      "Infrastructure as Code",
      "Scalable Deployments",
      "Bash Scripting"
    ]
  },
  {
    id: 6,
    title: "Embedded Systems",
    icon: faMicrochip,
    skills: [
      "Arduino, ESP32",
      "Raspberry Pi",
      "STM32, Atmega328",
      "C, Python",
      "MATLAB",
      "PySerial",
      "Socket Programming",
      "Real-Time Monitoring"
    ]
  },
  {
    id: 7,
    title: "Version Control",
    icon: faCode,
    skills: [
      "Git, GitHub",
      "GitLab",
      "Version Control",
      "Collaborative Development",
      "Code Reviews",
      "Branching Strategies",
      "Pull Requests",
      "Documentation"
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
