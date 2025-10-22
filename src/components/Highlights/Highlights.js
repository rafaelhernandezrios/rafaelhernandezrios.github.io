import React from 'react';
import './Highlights.css';
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
      title: "🏅 Outstanding Presentation Award",
      icon: "fas fa-trophy",
      description: "Awarded at the Interstellar Initiative 2022 in New York for a groundbreaking project on saliva-based disease detection. This recognition highlights the innovation and impact of the presented solution.",
      date: "2022 - New York",
      category: "Award"
    },
    {
      id: 2,
      image: dubaiExpoImage,
      title: "🇦🇪 Expo Dubai 2022",
      icon: "fas fa-globe",
      description: "Represented Mexico at Expo Dubai 2022, showcasing robotics and EEG-based technologies. This global platform celebrated innovation and future-forward technologies, highlighting Mexico's technological capabilities.",
      date: "2022 - Dubai",
      category: "International Event"
    },
    {
      id: 3,
      image: osakaExpoImage,
      title: "🇯🇵 Expo Osaka 2025",
      icon: "fas fa-vr-cardboard",
      description: "Developed an EEG + VR relaxation system, including GUI design and relaxation detection algorithm. Participated as exhibitor and demonstrator with live visitors, showcasing cutting-edge neurotechnology applications.",
      date: "2025 - Osaka, Japan",
      category: "Exhibition"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "📄 Research Publications",
      icon: "fas fa-file-alt",
      description: "Published 5+ international research papers in prestigious journals including IEEE SMC and IAC, focusing on robotics and neurotechnology. Contributing to the advancement of human-machine interaction research.",
      date: "2022-2024 - International",
      category: "Research"
    },
    {
      id: 5,
      image: retoAnuiesImage,
      title: "🧑‍🏫 Reto ANUIES4MX",
      icon: "fas fa-graduation-cap",
      description: "Mentor & Organizer of 'Reto ANUIES4MX', a Mexico–Japan innovation program featured in national media. Fostering international collaboration and technological exchange between the two countries.",
      date: "2023-2024 - Mexico-Japan",
      category: "Education"
    },
    {
      id: 6,
      image: miraiConferenceImage,
      title: "🧠 Mirai Innovation Leadership",
      icon: "fas fa-users",
      description: "Led 50+ robotics and AI projects per year at Mirai Innovation, mentoring students and researchers globally. Driving innovation in cutting-edge technologies and fostering the next generation of tech leaders.",
      date: "2022-2024 - Global",
      category: "Leadership"
    },
    {
      id: 7,
      image: podcastImage,
      title: "🎙️ Embassy Podcast Feature",
      icon: "fas fa-podcast",
      description: "Featured guest in the Embassy of Mexico in Japan Podcast, sharing experiences in technology and innovation abroad. Discussing the journey of Mexican innovators in the Japanese tech ecosystem.",
      date: "2023 - Embassy of Mexico in Japan",
      category: "Media"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "🤝 International Collaboration",
      icon: "fas fa-handshake",
      description: "Established and maintained technology transfer partnerships between Mexican and Japanese institutions, facilitating knowledge exchange and collaborative research in robotics and AI technologies.",
      date: "2022-2024 - Mexico-Japan",
      category: "Collaboration"
    }
  ];

  return (
    <section id="highlights" className="highlights-section">
      <div className="container">
        <div className="highlights-header">
          <h2>🏆 Achievements & Highlights</h2>
          <p className="highlights-subtitle">Milestones in my journey of innovation and technological advancement</p>
        </div>
        
        <div className="highlights-scroll-container">
          <div className="highlights-scroll">
            {highlights.map((highlight) => (
              <div key={highlight.id} className="highlight-card">
                <div className="highlight-image-container">
                  <img src={highlight.image} alt={highlight.title} />
                  <div className="highlight-category">{highlight.category}</div>
                </div>
                
                <div className="highlight-content">
                  <h3>
                    <i className={highlight.icon}></i>
                    {highlight.title}
                  </h3>
                  <p>{highlight.description}</p>
                  <div className="highlight-footer">
                    <div className="highlight-date">
                      <i className="fas fa-calendar-alt"></i>
                      {highlight.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="scroll-indicators">
            <div className="scroll-hint">
              <i className="fas fa-arrows-alt-h"></i>
              <span>Scroll horizontally to see more</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
