import React from 'react';
import './Highlights.css';
import nyAwardImage from '../../images/ny-outstanding-presentation.jpg'; // Asegúrate de tener la imagen en la ruta
import dubaiExpoImage from '../../images/expo-dubai.jpg'; // Asegúrate de tener la imagen en la ruta
import podcastImage from '../../images/mexjapon-podcast.jpg'; // Imagen representativa para el podcast

const Highlights = () => {
  return (
    <section id="highlights" className="section highlights-section">
      <div className="container">
        <h2>Achievements & Highlights</h2>
        <div className="highlights-content">
          <div className="highlight">
            <img src={nyAwardImage} alt="Outstanding Presentation Award - New York" />
            <div className="highlight-text">
              <h3>Outstanding Presentation Award</h3>
              <p>
                Awarded at the Interstellar Initiative 2022 in New York for a groundbreaking project 
                on saliva-based disease detection. This recognition highlights the innovation and 
                impact of the presented solution.
              </p>
            </div>
          </div>
          <div className="highlight">
            <img src={dubaiExpoImage} alt="Expo Dubai 2022" />
            <div className="highlight-text">
              <h3>Expo Dubai 2022</h3>
              <p>
                Represented Mexico at Expo Dubai 2022, showcasing EEG systems, mixed reality 
                applications, and robotics control through EEG. This global platform celebrated 
                innovation and future-forward technologies.
              </p>
            </div>
          </div>
          <div className="highlight">
            <img src={podcastImage} alt="MEXJAPON Podcast - Embassy of Mexico in Japan" />
            <div className="highlight-text">
              <h3>MEXJAPON Podcast</h3>
              <p>
                Featured in episode 115 of the <strong>MEXJAPON</strong> podcast by the Embassy of Mexico 
                in Japan, titled "<em>En la frontera entre la robótica y lo humano</em>". 
                Discussed my journey in robotics and technological innovation.
              </p>
              <a 
                href="https://creators.spotify.com/pod/show/embamex-japn/episodes/MEXJAPON-Ep-115---En-la-frontera-entre-la-robtica-y-lo-humano---con-Rafael-Hernndez-Ros-e1p3kri"
                target="_blank" 
                rel="noopener noreferrer" 
                className="podcast-link"
              >
                Listen on Spotify
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
