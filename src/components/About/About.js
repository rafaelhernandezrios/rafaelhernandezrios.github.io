import React from 'react';
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
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">About Me</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Passionate about advancing technology through innovation and education
          </p>
        </div>
        
        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 border border-primary/10 relative overflow-hidden">
          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                  🦾 Mechatronics Engineer | Robotics & AI Specialist
                </h3>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                  I am a <strong className="text-primary">Mechatronics Engineer</strong> with a strong background in robotics, artificial intelligence, 
                  web development, and control systems. Currently working in <strong className="text-accent">Osaka, Japan</strong>, I focus on the 
                  design, integration, and implementation of advanced robotic systems and web platforms that enable remote 
                  operation, intelligent interaction, and impactful educational experiences.
                </p>
              </div>

              <div>
                <h4 className="text-xl md:text-2xl font-bold text-text-primary mb-3">🚀 My Mission</h4>
                <p className="text-base text-text-secondary leading-relaxed">
                  To drive the convergence of mechatronics, robotics, web technology, and AI to enhance human–machine 
                  collaboration, democratize access to advanced technologies, and build the next generation of global innovators.
                </p>
              </div>

              <div>
                <h4 className="text-xl md:text-2xl font-bold text-text-primary mb-4">🛠️ Core Expertise</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10 hover:bg-primary/10 transition-all duration-200">
                    <i className="fas fa-cogs text-accent text-lg"></i>
                    <span className="text-sm font-medium text-text-primary">Mechatronics & Robotics</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10 hover:bg-primary/10 transition-all duration-200">
                    <i className="fas fa-brain text-accent text-lg"></i>
                    <span className="text-sm font-medium text-text-primary">Artificial Intelligence</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10 hover:bg-primary/10 transition-all duration-200">
                    <i className="fas fa-code text-accent text-lg"></i>
                    <span className="text-sm font-medium text-text-primary">Web Development</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10 hover:bg-primary/10 transition-all duration-200">
                    <i className="fas fa-microchip text-accent text-lg"></i>
                    <span className="text-sm font-medium text-text-primary">Neurotechnology</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10 hover:bg-primary/10 transition-all duration-200">
                    <i className="fas fa-graduation-cap text-accent text-lg"></i>
                    <span className="text-sm font-medium text-text-primary">STEM Education</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10 hover:bg-primary/10 transition-all duration-200">
                    <i className="fas fa-lightbulb text-accent text-lg"></i>
                    <span className="text-sm font-medium text-text-primary">Innovation</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={rafaelImage} 
                  alt="Rafael Hernández" 
                  className="w-full h-full object-cover min-h-[500px]"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 flex items-center gap-3">
                  <i className="fas fa-map-marker-alt text-accent text-lg"></i>
                  <span className="text-white font-medium">Osaka, Japan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-8 border-t border-b border-primary/10 mb-12">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-4 bg-primary/5 rounded-xl border border-primary/10 hover:bg-primary/10 transition-all duration-200 hover:transform hover:scale-105"
              >
                <div className="mb-3">
                  <i className={`${stat.icon} text-accent text-2xl`}></i>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-text-secondary font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Achievements Section */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-8 text-center">🏆 Key Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 p-6 bg-primary/5 rounded-xl border border-primary/10 hover:bg-primary/10 transition-all duration-200 hover:transform hover:-translate-y-1"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <i className={`${achievement.icon} text-accent text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text-primary mb-2">{achievement.title}</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{achievement.description}</p>
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
