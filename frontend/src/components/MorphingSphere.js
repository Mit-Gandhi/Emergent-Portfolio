import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RobotVideo = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(null);
  
  return (
    <div className="robot-video-wrapper">
      <video 
        className="robot-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => {
          setVideoLoaded(true);
          console.log('Video loaded successfully');
        }}
        onError={(e) => {
          console.error('Robot video failed to load:', e.target.error);
          setVideoError(e.target.error);
        }}
        onCanPlay={() => {
          console.log('Video can start playing');
        }}
        onLoadStart={() => {
          console.log('Video load started');
        }}
        onContextMenu={(e) => e.preventDefault()}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          transition: 'opacity 0.3s ease',
          opacity: videoLoaded ? 1 : 0.7,
          borderRadius: '20px',
          pointerEvents: 'none',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none'
        }}
      >
        <source src="/images/hi3d.mp4" type="video/mp4" />
        <source src="/images/hi3d.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      {videoError && (
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          color: 'red',
          fontSize: '14px',
          textAlign: 'center'
        }}>
          Video Error: {videoError.message || 'Failed to load video'}
        </div>
      )}
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

      {/* Robot Video */}
      <div className="robot-video-container">
        <RobotVideo />
      </div>
    </div>
  );
};

export default MorphingSphereContainer;