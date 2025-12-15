import React from 'react';
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
      { name: "ROS & MoveIt Framework", level: 90 },
      { name: "OpenCV & Computer Vision", level: 85 },
      { name: "TensorFlow & PyTorch", level: 80 },
      { name: "Machine Learning & Deep Learning", level: 85 },
      { name: "SLAM & Path Planning", level: 75 }
    ]
  },
  {
    id: 2,
    title: "Software Development",
    icon: faCode,
    skills: [
      { name: "React, JavaScript, TypeScript", level: 90 },
      { name: "Python, C++, Node.js", level: 85 },
      { name: "Flask, Django, RESTful APIs", level: 80 },
      { name: "MongoDB, MySQL, Git", level: 85 },
      { name: "Docker & CI/CD", level: 75 }
    ]
  },
  {
    id: 3,
    title: "Data & Cloud",
    icon: faChartBar,
    skills: [
      { name: "Data Analysis & Visualization", level: 80 },
      { name: "AWS, Heroku, GitHub Actions", level: 75 },
      { name: "Pandas, NumPy, Matplotlib", level: 85 },
      { name: "Statistical Analysis", level: 80 },
      { name: "Infrastructure as Code", level: 70 }
    ]
  },
  {
    id: 4,
    title: "Embedded Systems",
    icon: faMicrochip,
    skills: [
      { name: "Arduino, ESP32, Raspberry Pi", level: 90 },
      { name: "STM32, C Programming", level: 85 },
      { name: "MATLAB, Real-Time Systems", level: 80 },
      { name: "Socket Programming", level: 85 },
      { name: "Hardware Integration", level: 90 }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Skills & Expertise</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities across robotics, AI, software development, and embedded systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((category) => (
            <div 
              key={category.id} 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={category.icon} className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-text-primary">{skill.name}</span>
                      <span className="text-xs font-semibold text-accent">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-primary/10 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
