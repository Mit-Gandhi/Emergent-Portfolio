import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RobotVideo = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  return (
    <div className="robot-video-wrapper">
      <video 
        src="/images/hi3d.mp4"
        className="robot-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setVideoLoaded(true)}
        onError={(e) => {
          console.log('Robot video failed to load');
        }}
        onContextMenu={(e) => e.preventDefault()}
        onSelectStart={(e) => e.preventDefault()}
        onMouseDown={(e) => e.preventDefault()}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          transition: 'opacity 0.3s ease',
          opacity: videoLoaded ? 1 : 0.7,
          borderRadius: '20px',
          pointerEvents: 'none',
          userSelect: 'none',
          webkitUserSelect: 'none',
          mozUserSelect: 'none',
          msUserSelect: 'none'
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