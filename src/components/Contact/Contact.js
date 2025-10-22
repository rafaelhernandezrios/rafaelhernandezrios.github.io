// src/components/Contact/Contact.js
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      content: 'Osaka, Japan',
      link: null
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      content: 'e.r.hdez94@gmail.com',
      link: 'mailto:e.r.hdez94@gmail.com'
    },
    {
      icon: 'fas fa-clock',
      title: 'Availability',
      content: 'Mon - Fri, 9:00 - 18:00 JST',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin-in',
      url: 'https://www.linkedin.com/in/rafaelhernandez94/',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/rafaelhernandezrios',
      color: '#333'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      url: 'https://twitter.com/rafaelhernandez',
      color: '#1da1f2'
    },
    {
      name: 'ResearchGate',
      icon: 'fab fa-researchgate',
      url: 'https://www.researchgate.net/profile/Rafael-Hernandez',
      color: '#00d2ff'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2>🤝 Let's Connect</h2>
          <p className="contact-subtitle">
            Open to collaborations in robotics R&D, mechatronics, web development, educational innovation, and emerging technology initiatives.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-section">
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-info-card">
                  <div className="contact-info-icon">
                    <i className={info.icon}></i>
                  </div>
                  <div className="contact-info-content">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="contact-info-link">
                        {info.content}
                      </a>
                    ) : (
                      <p>{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links-section">
              <h3>Follow Me</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': social.color }}
                  >
                    <i className={social.icon}></i>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="contact-form-header">
              <h3>Send me a message</h3>
              <p>I'm always interested in hearing about new opportunities and collaborations.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or collaboration idea..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="submit-success">
                  <i className="fas fa-check-circle"></i>
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
