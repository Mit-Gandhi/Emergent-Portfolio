import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Globe, 
  Send,
  User,
  MessageCircle
} from 'lucide-react';
import Navigation from '../components/Navigation';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create email link
    const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    const emailLink = `mailto:gandhimit04@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = emailLink;
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gandhimit04@gmail.com",
      link: "mailto:gandhimit04@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8799551850",
      link: "tel:+918799551850"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      link: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "mit-gandhi-a3281628a",
      link: "https://www.linkedin.com/in/mit-gandhi-a3281628a/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Mit-Gandhi",
      link: "https://github.com/Mit-Gandhi"
    }
  ];

  return (
    <div className="contact-page">
      <Navigation />
      
      <div className="contact-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-header"
        >
          <h1 className="page-title">Let's Connect</h1>
          <p className="page-subtitle">Ready to collaborate on innovative AI/ML projects? Get in touch!</p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="contact-info-section"
          >
            <div className="section-card">
              <div className="section-header">
                <User size={24} />
                <h3>Contact Information</h3>
              </div>
              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="contact-info-item"
                  >
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noopener noreferrer" className="contact-link">
                        <div className="contact-icon">
                          <info.icon size={20} />
                        </div>
                        <div className="contact-details">
                          <h4>{info.label}</h4>
                          <p>{info.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="contact-link">
                        <div className="contact-icon">
                          <info.icon size={20} />
                        </div>
                        <div className="contact-details">
                          <h4>{info.label}</h4>
                          <p>{info.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="contact-form-section"
          >
            <div className="section-card">
              <div className="section-header">
                <MessageCircle size={24} />
                <h3>Send a Message</h3>
              </div>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
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
                  <label htmlFor="email">Email</label>
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
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
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
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={16} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="contact-cta"
        >
          <div className="cta-card">
            <h2>Ready to start your AI/ML project?</h2>
            <p>Let's discuss how we can bring your ideas to life with cutting-edge artificial intelligence solutions.</p>
            <div className="cta-buttons">
              <motion.a
                href="mailto:gandhimit04@gmail.com"
                className="cta-btn primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={16} />
                Email Me
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/mit-gandhi-a3281628a/"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={16} />
                Connect on LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;