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
      progress: "90%",
      details: [
        { label: "Frameworks:", value: "ROS (Robot Operating System)" },
        { label: "Libraries:", value: "MoveIt, OpenCV" },
        { label: "Languages:", value: "Python, C++" },
        { label: "Tools:", value: "RViz, Gazebo" },
        { label: "Applications:", value: "Kinematics, SLAM (Hector SLAM, Gmapping)" }
      ]
    },
    {
      id: 2,
      title: "AI Development",
      progress: "85%",
      details: [
        { label: "Frameworks:", value: "TensorFlow, PyTorch" },
        { label: "Libraries:", value: "NumPy, Pandas, Scikit-Learn" },
        { label: "Languages:", value: "Python, R" },
        { label: "Tools:", value: "Jupyter Notebook, VS Code" },
        { label: "Applications:", value: "Machine Learning, Deep Learning, NLP" }
      ]
    },
    {
      id: 3,
      title: "Web Development",
      progress: "80%",
      details: [
        { label: "Frontend:", value: "React, HTML5, CSS3, JavaScript" },
        { label: "Backend:", value: "Node.js, Express.js" },
        { label: "Databases:", value: "MongoDB, MySQL" },
        { label: "Tools:", value: "Git, Webpack, Babel" },
        { label: "Others:", value: "RESTful APIs, GraphQL" }
      ]
    },
    {
      id: 4,
      title: "Mobile Development",
      progress: "75%",
      details: [
        { label: "Platforms:", value: "iOS, Android" },
        { label: "Frameworks:", value: "React Native, Flutter" },
        { label: "Languages:", value: "Swift, Kotlin, Dart" },
        { label: "Tools:", value: "Xcode, Android Studio" },
        { label: "Others:", value: "Firebase, Push Notifications" }
      ]
    },
    {
      id: 5,
      title: "Data Analysis",
      progress: "80%",
      details: [
        { label: "Tools:", value: "Excel, Tableau, Power BI" },
        { label: "Languages:", value: "Python, SQL" },
        { label: "Libraries:", value: "Pandas, Matplotlib, Seaborn" },
        { label: "Techniques:", value: "Statistical Analysis, Data Cleaning" },
        { label: "Others:", value: "Data Visualization, Reporting" }
      ]
    },
    {
      id: 6,
      title: "Cloud Computing",
      progress: "70%",
      details: [
        { label: "Platforms:", value: "AWS, Azure, Google Cloud" },
        { label: "Services:", value: "EC2, S3, Lambda, Kubernetes" },
        { label: "Tools:", value: "Docker, Terraform" },
        { label: "Languages:", value: "Python, Bash" },
        { label: "Others:", value: "CI/CD, Infrastructure as Code" }
      ]
    },
    // Agrega más habilidades aquí siguiendo la misma estructura
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
