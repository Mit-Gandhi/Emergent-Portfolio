import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import MorphingSphere from './MorphingSphere';
import './LandingPage.css';
import './MorphingSphere.css';

const LandingPage = () => {
  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/1Q7LKtssMdaEX11XS9J56m1T3xpOU7frK/view?usp=drivesdk, '_blank');
  };

  const handleContact = () => {
    window.open('https://www.linkedin.com/in/mit-gandhi-a3281628a/', '_blank');
  };

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-content">
            <span className="nav-brand">Mit Gandhi</span>
            <div className="nav-menu">
              <a href="#home" className="nav-link">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#work" className="nav-link">Work</a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContact}
                className="nav-cta"
              >
                <span className="nav-cta-icon">🔗</span>
                Let's Connect
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-wrapper">
          {/* Left Content */}
          <div className="left-content">
            <div className="profile-badge">
              <span>Mit Gandhi</span>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="main-text"
            >
              <h1 className="title">
                <span className="title-line">Hey I'm an</span>
                <span className="title-main">AI/ML</span>
                <span className="title-main">Engineer</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="description"
            >
              <p>
                Transforming ideas into intelligent solutions through Machine Learning, 
                Deep Learning, Computer Vision, NLP, and cutting-edge AI technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="action-buttons"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleResumeDownload}
                className="download-btn"
              >
                <Download size={16} />
                Resume
              </motion.button>
            </motion.div>
          </div>

          {/* Right Content - Robot */}
          <div className="right-content">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="robot-container"
            >
              <MorphingSphere />
            </motion.div>
          </div>
        </div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="footer-text"
        >
          <span className="footer-large">Designer</span>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
