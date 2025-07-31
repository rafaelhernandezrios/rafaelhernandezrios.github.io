import React from 'react';
import './Highlights.css';
import nyAwardImage from '../../images/ny-outstanding-presentation.jpg';
import dubaiExpoImage from '../../images/expo-dubai.jpg';
import podcastImage from '../../images/mexjapon-podcast.jpg';

const Highlights = () => {
  return (
    <section id="highlights" className="highlights-section">
      <div className="container">
        <h2>Achievements & Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <img src={nyAwardImage} alt="Outstanding Presentation Award - New York" />
            <h3>
              <i className="fas fa-trophy"></i>
              Outstanding Presentation Award
            </h3>
            <p>
              Awarded at the Interstellar Initiative 2022 in New York for a groundbreaking project 
              on saliva-based disease detection. This recognition highlights the innovation and 
              impact of the presented solution.
            </p>
            <div className="date">2022 - New York</div>
          </div>
          
          <div className="highlight-card">
            <img src={dubaiExpoImage} alt="Expo Dubai 2022" />
            <h3>
              <i className="fas fa-globe"></i>
              Expo Dubai 2022
            </h3>
            <p>
              Represented Mexico at Expo Dubai 2022, showcasing EEG systems, mixed reality 
              applications, and robotics control through EEG. This global platform celebrated 
              innovation and future-forward technologies.
            </p>
            <div className="date">2022 - Dubai</div>
          </div>
          
          <div className="highlight-card">
            <img src={podcastImage} alt="MEXJAPON Podcast - Embassy of Mexico in Japan" />
            <h3>
              <i className="fas fa-podcast"></i>
              MEXJAPON Podcast
            </h3>
            <p>
              Featured in episode 115 of the <strong>MEXJAPON</strong> podcast by the Embassy of Mexico 
              in Japan, titled "<em>En la frontera entre la robótica y lo humano</em>". 
              Discussed my journey in robotics and technological innovation.
            </p>
            <div className="date">2023 - Embassy of Mexico in Japan</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
