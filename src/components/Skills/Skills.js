import React, { useState, useLayoutEffect, useRef } from 'react';
import './Skills.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  {
    id: 1,
    title: "Robotics",
    progress: "95%",
    details: [
      { label: "Frameworks:", value: "ROS (Robot Operating System), MoveIt" },
      { label: "Libraries:", value: "OpenCV" },
      { label: "Languages:", value: "Python, C++" },
      { label: "Tools:", value: "RViz, Gazebo, LiDAR integration, SLAM Tools (Hector SLAM, Gmapping)" },
      { label: "Applications:", value: "Kinematics, Path Planning, Teleoperation Systems" }
    ]
  },
  {
    id: 2,
    title: "AI Development",
    progress: "90%",
    details: [
      { label: "Frameworks:", value: "TensorFlow, PyTorch" },
      { label: "Libraries:", value: "Scikit-learn, NumPy, Pandas" },
      { label: "Languages:", value: "Python" },
      { label: "Tools:", value: "Jupyter Notebook, VS Code, GitHub" },
      { label: "Applications:", value: "EEG/EMG classification, Machine Learning, Deep Learning, NLP" }
    ]
  },
  {
    id: 3,
    title: "Web Development",
    progress: "85%",
    details: [
      { label: "Frontend:", value: "React, HTML5, CSS3, JavaScript" },
      { label: "Backend:", value: "Flask, Django, Node.js" },
      { label: "Databases:", value: "MongoDB, MySQL" },
      { label: "Tools:", value: "Git, GitHub, Webpack, Docker" },
      { label: "Others:", value: "RESTful APIs, Deployment (Heroku, PythonAnywhere)" }
    ]
  },
  {
    id: 4,
    title: "Data Analysis",
    progress: "85%",
    details: [
      { label: "Tools:", value: "Excel, Tableau, Power BI, GitHub" },
      { label: "Languages:", value: "Python, SQL" },
      { label: "Libraries:", value: "Pandas, Matplotlib, Seaborn" },
      { label: "Techniques:", value: "Statistical Analysis, Data Cleaning, Data Wrangling" },
      { label: "Others:", value: "Data Visualization, Automated Reporting" }
    ]
  },
  {
    id: 5,
    title: "Cloud Computing",
    progress: "80%",
    details: [
      { label: "Platforms:", value: "Heroku, PythonAnywhere, AWS" },
      { label: "Services:", value: "CI/CD Pipelines, Flask Deployment" },
      { label: "Tools:", value: "Docker, Terraform, GitHub Actions" },
      { label: "Languages:", value: "Python, Bash" },
      { label: "Others:", value: "Infrastructure as Code, Scalable Deployments" }
    ]
  },
  {
    id: 6,
    title: "Embedded Systems & Hardware",
    progress: "90%",
    details: [
      { label: "Platforms:", value: "Arduino, ESP32, Raspberry Pi" },
      { label: "Tools:", value: "MATLAB, PySerial, Socket Programming" },
      { label: "Languages:", value: "C, Python" },
      { label: "Microcontrollers:", value: "STM32, Atmega328, ESP32" },
      { label: "Sensors:", value: "LiDAR, IMUs, Gas Sensors, Cameras, Ultrasonic Sensors" },
      { label: "Applications:", value: "Data Acquisition, Control Systems, Real-Time Monitoring" }
    ]
  },
  {
    id: 7,
    title: "Version Control & Collaboration",
    progress: "95%",
    details: [
      { label: "Tools:", value: "Git, GitHub, GitLab" },
      { label: "Applications:", value: "Version Control, Collaborative Development, Code Reviews" },
      { label: "Best Practices:", value: "Branching Strategies, Pull Requests, Documentation" }
    ]
  }
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const skillsSectionRef = useRef(null);
  const skillsRefs = useRef([]);

  const toggleSkill = (id) => {
    setActiveSkill(activeSkill === id ? null : id);
  };

  useLayoutEffect(() => {
    const isMobile = window.innerWidth <= 768;
  
    // Limpiar cualquier ScrollTrigger previo
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  
    if (!isMobile) {
      // Animación inicial del título (solo desktop)
      gsap.from(skillsSectionRef.current.querySelector("h2"), {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: "bounce.out"
      });
  
      // Animaciones para cada skill (solo desktop)
      skillsRefs.current.forEach((skillRef) => {
        if (skillRef) {
          gsap.from(skillRef, {
            scrollTrigger: {
              trigger: skillRef,
              start: "top 80%",
              toggleActions: "play none none none"
            },
            y: 50,
            opacity: 0,
            duration: 1
          });
        }
      });
  
      // Animación de las barras de progreso (solo desktop)
      skillsRefs.current.forEach((skillRef, index) => {
        if (skillRef) {
          const progressBar = skillRef.querySelector(".progress");
          gsap.to(progressBar, {
            width: skillsData[index].progress,
            duration: 1,
            ease: "power1.out",
            delay: 0.5
          });
        }
      });
    } else {
      // En dispositivos móviles, establecer las barras sin animación
      skillsRefs.current.forEach((skillRef, index) => {
        if (skillRef) {
          const progressBar = skillRef.querySelector(".progress");
          if (progressBar) {
            progressBar.style.width = skillsData[index].progress;
          }
        }
      });
    }
  
    return () => {
      // Limpiar ScrollTriggers al desmontar el componente
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  

  return (
    <section id="skills" className="section skills-section" ref={skillsSectionRef}>
      <div className="container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div
              key={skill.id}
              className={`skill ${activeSkill === skill.id ? 'active' : ''}`}
              ref={el => skillsRefs.current[index] = el}
            >
              <div className="skill-header" onClick={() => toggleSkill(skill.id)}>
                <h3>{skill.title}</h3>
                <button
                  className="toggle-btn"
                  aria-expanded={activeSkill === skill.id ? "true" : "false"}
                  aria-controls={`skill-${skill.id}-details`}
                >
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: '0%' }}></div>
              </div>
              <ul className={`skill-details ${activeSkill === skill.id ? 'open' : ''}`} id={`skill-${skill.id}-details`}>
                {skill.details.map((detail, detailIndex) => (
                  <li key={detailIndex}><strong>{detail.label}</strong> {detail.value}</li>
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
