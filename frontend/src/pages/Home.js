import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import MorphingSphere from '../components/MorphingSphere';
import './Home.css';
import '../components/MorphingSphere.css';

const Home = () => {
  const handleResumeDisplay = () => {
    // Display the resume directly in a new tab instead of downloading
    window.open('https://drive.google.com/file/d/1jPubZc-G8G06rN1EyWvsRNLmy5v0tafq/view?usp=sharing', '_blank');
  };

  return (
    <div className="home-page">
      <Navigation />
      
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
                onClick={handleResumeDisplay}
                className="download-btn"
              >
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
          <span className="footer-large">Engineer</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;