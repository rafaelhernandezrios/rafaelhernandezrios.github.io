import React from 'react';
import './About.css';
import rafaelImage from '../../images/rafael.jpg';

const About = () => {
  const stats = [
    { number: '5+', label: 'Years Experience', icon: 'fas fa-calendar-alt' },
    { number: '50+', label: 'Projects Completed', icon: 'fas fa-project-diagram' },
    { number: '15+', label: 'Countries Reached', icon: 'fas fa-globe' },
    { number: '1000+', label: 'Students Impacted', icon: 'fas fa-users' }
  ];

  const achievements = [
    {
      icon: 'fas fa-robot',
      title: 'Robotics Innovation',
      description: 'Designed and deployed web-based teleoperation platforms for real-time control of multiple robotic systems'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Educational Leadership',
      description: 'Led international educational programs on robotics, AI, and emerging technologies across Latin America, Europe, and Asia'
    },
    {
      icon: 'fas fa-brain',
      title: 'Neurotechnology Research',
      description: 'Contributed to the development of "Aura," a neurotechnology device for EEG signal acquisition and research'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Global Collaboration',
      description: 'Speaker and mentor in international events on robotics, AI, and innovation'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-header">
          <h2>About Me</h2>
          <p className="about-subtitle">Passionate about advancing technology through innovation and education</p>
        </div>
        
        <div className="about-main-container">
          <div className="about-content">
            <div className="about-text">
              <div className="about-intro">
                <h3>🦾 Mechatronics Engineer | Robotics & AI Specialist</h3>
                <p>
                  I am a <strong>Mechatronics Engineer</strong> with a strong background in robotics, artificial intelligence, 
                  web development, and control systems. Currently working in <strong>Osaka, Japan</strong>, I focus on the 
                  design, integration, and implementation of advanced robotic systems and web platforms that enable remote 
                  operation, intelligent interaction, and impactful educational experiences.
                </p>
              </div>

              <div className="about-mission">
                <h4>🚀 My Mission</h4>
                <p>
                  To drive the convergence of mechatronics, robotics, web technology, and AI to enhance human–machine 
                  collaboration, democratize access to advanced technologies, and build the next generation of global innovators.
                </p>
              </div>

              <div className="about-expertise">
                <h4>🛠️ Core Expertise</h4>
                <div className="expertise-grid">
                  <div className="expertise-item">
                    <i className="fas fa-cogs"></i>
                    <span>Mechatronics & Robotics</span>
                  </div>
                  <div className="expertise-item">
                    <i className="fas fa-brain"></i>
                    <span>Artificial Intelligence</span>
                  </div>
                  <div className="expertise-item">
                    <i className="fas fa-code"></i>
                    <span>Web Development</span>
                  </div>
                  <div className="expertise-item">
                    <i className="fas fa-microchip"></i>
                    <span>Neurotechnology</span>
                  </div>
                  <div className="expertise-item">
                    <i className="fas fa-graduation-cap"></i>
                    <span>STEM Education</span>
                  </div>
                  <div className="expertise-item">
                    <i className="fas fa-lightbulb"></i>
                    <span>Innovation</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-image">
              <div className="image-container">
                <img src={rafaelImage} alt="Rafael Hernández" />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Osaka, Japan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon">
                  <i className={stat.icon}></i>
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="about-achievements">
            <h3>🏆 Key Achievements</h3>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-icon">
                    <i className={achievement.icon}></i>
                  </div>
                  <div className="achievement-content">
                    <h4>{achievement.title}</h4>
                    <p>{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
