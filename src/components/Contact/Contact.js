// src/components/Contact/Contact.js
import React, { useState } from 'react';

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
    <section id="contact" className="py-20 bg-primary text-text-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-lg text-text-light/80 max-w-2xl mx-auto">
            Open to collaborations in robotics R&D, mechatronics, web development, educational innovation, and emerging technology initiatives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className={`${info.icon} text-accent text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-text-light/80 hover:text-accent transition-colors duration-200"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-text-light/80">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/10 hover:bg-accent rounded-lg flex items-center justify-center text-white hover:text-white transition-all duration-300 transform hover:scale-110"
                    style={{ '--social-color': social.color }}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Send me a message</h3>
              <p className="text-text-light/80">I'm always interested in hearing about new opportunities and collaborations.</p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-text-light/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-text-light/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-text-light/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or collaboration idea..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-text-light/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 transition-all duration-200 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`w-full px-6 py-4 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 flex items-center space-x-2">
                  <i className="fas fa-check-circle"></i>
                  <span>Message sent successfully! I'll get back to you soon.</span>
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
