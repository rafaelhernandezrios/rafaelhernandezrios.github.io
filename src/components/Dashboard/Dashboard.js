// src/components/Dashboard/Dashboard.js
import React from 'react';
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faBook, faUserGraduate, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const dashboardData = [
  {
    icon: faRobot,
    title: "Projects Completed",
    description: "50+"
  },
  {
    icon: faBook,
    title: "Publications",
    description: "5+ International"
  },
  {
    icon: faUserGraduate,
    title: "Students Mentored",
    description: "100+"
  },
  {
    icon: faBriefcase,
    title: "Years of Experience",
    description: "5+"
  }
];

const Dashboard = () => {
  return (
    <section id="dashboard" className="section dashboard-section">
      <div className="container">
        <h2>Dashboard</h2>
        <div className="dashboard-grid">
          {dashboardData.map((card, index) => (
            <div key={index} className="card">
              <FontAwesomeIcon icon={card.icon} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
