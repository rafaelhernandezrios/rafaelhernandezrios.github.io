import React from 'react';
import nyAwardImage from '../../images/ny-outstanding-presentation.jpg';
import dubaiExpoImage from '../../images/expo-dubai.jpg';
import podcastImage from '../../images/mexjapon-podcast.jpg';
import osakaExpoImage from '../../images/expo-osaka.jpg';
import retoAnuiesImage from '../../images/retoanuies.jpg';
import miraiConferenceImage from '../../images/miraiconference.jpg';

const Highlights = () => {
  const highlights = [
    {
      id: 1,
      image: nyAwardImage,
      title: "Outstanding Presentation Award",
      icon: "fas fa-trophy",
      description: "Awarded at the Interstellar Initiative 2022 in New York for a groundbreaking project on saliva-based disease detection.",
      date: "2022 - New York",
      category: "Award"
    },
    {
      id: 2,
      image: dubaiExpoImage,
      title: "Expo Dubai 2022",
      icon: "fas fa-globe",
      description: "Represented Mexico at Expo Dubai 2022, showcasing robotics and EEG-based technologies.",
      date: "2022 - Dubai",
      category: "International Event"
    },
    {
      id: 3,
      image: osakaExpoImage,
      title: "Expo Osaka 2025",
      icon: "fas fa-vr-cardboard",
      description: "Developed an EEG + VR relaxation system, including GUI design and relaxation detection algorithm.",
      date: "2025 - Osaka, Japan",
      category: "Exhibition"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Research Publications",
      icon: "fas fa-file-alt",
      description: "Published 5+ international research papers in prestigious journals including IEEE SMC and IAC.",
      date: "2022-2024 - International",
      category: "Research"
    },
    {
      id: 5,
      image: retoAnuiesImage,
      title: "Reto ANUIES4MX",
      icon: "fas fa-graduation-cap",
      description: "Mentor & Organizer of 'Reto ANUIES4MX', a Mexico–Japan innovation program featured in national media.",
      date: "2023-2024 - Mexico-Japan",
      category: "Education"
    },
    {
      id: 6,
      image: miraiConferenceImage,
      title: "Mirai Innovation Leadership",
      icon: "fas fa-users",
      description: "Led 50+ robotics and AI projects per year at Mirai Innovation, mentoring students and researchers globally.",
      date: "2022-2024 - Global",
      category: "Leadership"
    },
    {
      id: 7,
      image: podcastImage,
      title: "Embassy Podcast Feature",
      icon: "fas fa-podcast",
      description: "Featured guest in the Embassy of Mexico in Japan Podcast, sharing experiences in technology and innovation.",
      date: "2023 - Embassy of Mexico in Japan",
      category: "Media"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "International Collaboration",
      icon: "fas fa-handshake",
      description: "Established technology transfer partnerships between Mexican and Japanese institutions.",
      date: "2022-2024 - Mexico-Japan",
      category: "Collaboration"
    }
  ];

  return (
    <section id="highlights" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Highlights</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Milestones in my journey of innovation and technological advancement
          </p>
        </div>
        
        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2"></div>
          
          {/* Timeline Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {highlights.map((highlight, index) => (
              <div 
                key={highlight.id} 
                className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                {/* Timeline Circle (Desktop only) */}
                <div className="hidden lg:block absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-8 h-8 bg-accent rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <i className={`${highlight.icon} text-white text-xs`}></i>
                  </div>
                </div>

                {/* Mobile Timeline Circle */}
                <div className="lg:hidden absolute -left-4 top-6 z-10">
                  <div className="w-8 h-8 bg-accent rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                    <i className={`${highlight.icon} text-white text-xs`}></i>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 pt-8 lg:pt-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {highlight.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-sm text-text-secondary mb-4 line-clamp-3">
                    {highlight.description}
                  </p>
                  
                  <div className="flex items-center text-xs text-text-secondary">
                    <i className="fas fa-calendar-alt mr-2 text-accent"></i>
                    {highlight.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
