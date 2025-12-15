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
    <section id="highlights" className="py-20 bg-background-light relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Highlights</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Milestones in my journey of innovation and technological advancement
          </p>
        </div>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {highlights.map((highlight) => (
            <div 
              key={highlight.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={highlight.image} 
                  alt={highlight.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/20">
                    {highlight.category}
                  </span>
                </div>

                {/* Icon Overlay */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shadow-lg">
                    <i className={`${highlight.icon} text-white text-lg`}></i>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                  {highlight.title}
                </h3>
                
                <p className="text-sm text-text-secondary mb-4 line-clamp-3 flex-1">
                  {highlight.description}
                </p>
                
                <div className="flex items-center text-xs text-text-secondary pt-2 border-t border-primary/10">
                  <i className="fas fa-calendar-alt mr-2 text-accent"></i>
                  <span>{highlight.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
