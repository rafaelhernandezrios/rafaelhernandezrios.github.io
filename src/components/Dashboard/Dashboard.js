// src/components/Dashboard/Dashboard.js
import React from 'react';
import './Dashboard.css';

const dashboardData = [
  {
    icon: 'fas fa-robot',
    title: 'Projects Completed',
    number: '50+',
    label: 'Robotics & AI Projects'
  },
  {
    icon: 'fas fa-book',
    title: 'Publications',
    number: '5+',
    label: 'International Papers'
  },
  {
    icon: 'fas fa-user-graduate',
    title: 'Students Mentored',
    number: '100+',
    label: 'Educational Programs'
  },
  {
    icon: 'fas fa-briefcase',
    title: 'Years of Experience',
    number: '5+',
    label: 'Professional Experience'
  }
];

const Dashboard = () => {
  return (
    <section id="dashboard" className="dashboard-section">
      <div className="container">
        <h2>Dashboard</h2>
        <div className="dashboard-grid">
          {dashboardData.map((card, index) => (
            <div key={index} className="dashboard-card">
              <h3>
                <i className={card.icon}></i>
                {card.title}
              </h3>
              <div className="number">{card.number}</div>
              <div className="label">{card.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
