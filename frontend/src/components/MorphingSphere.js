import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StaticRobotImage = () => {
  return (
    <div className="robot-image-wrapper">
      <img 
        src="/images/robot.png"
        alt="Cute Robot with Purple/Blue Glowing Head" 
        className="robot-image"
        onError={(e) => {
          // Fallback to Unsplash image if robot.png is not found
          e.target.src = "https://images.unsplash.com/photo-1657641898365-48ae7d64e676?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3";
        }}
      />
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

      {/* Static Robot Image */}
      <div className="robot-image-container">
        <StaticRobotImage />
      </div>
    </div>
  );
};

export default MorphingSphereContainer;