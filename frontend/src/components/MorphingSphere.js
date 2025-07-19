import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SketchfabRobot = () => {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe 
        title="Late - #CuteRobotChallenge" 
        frameBorder="0" 
        allowFullScreen 
        mozallowfullscreen="true" 
        webkitallowfullscreen="true" 
        allow="autoplay; fullscreen; xr-spatial-tracking" 
        xr-spatial-tracking="true"
        execution-while-out-of-viewport="true"
        execution-while-not-rendered="true" 
        web-share="true"
        width="640" 
        height="480" 
        src="https://sketchfab.com/models/cb2a7911a5f243dcbe8480946a3bd5fe/embed?autostart=1&camera=0&transparent=1&ui_hint=0&dnt=1">
      </iframe>
    </div>
  );
};

const MorphingSphereContainer = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 1 second
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    // Hide popup after 4 seconds
    const hideTimer = setTimeout(() => {
      setShowPopup(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="morphing-sphere-container">
      {/* Welcome message above the robot */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="sphere-welcome-message"
          >
            <div className="welcome-content">
              <span>Hi, welcome to the portfolio...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sketchfab Robot */}
      <div className="robot-embed-container">
        <SketchfabRobot />
      </div>
    </div>
  );
};

export default MorphingSphereContainer;