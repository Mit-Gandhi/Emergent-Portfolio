import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RobotVideo = ({ onVideoStart }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(null);
  const videoRef = React.useRef(null);
  
  // Force immediate video loading and playing
  React.useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Preload the video immediately
      video.load();
      
      // Attempt to play as soon as possible
      const attemptPlay = async () => {
        try {
          await video.play();
          onVideoStart(); // Trigger welcome message when video starts
        } catch (error) {
          console.log('Auto-play prevented, will play on user interaction:', error);
        }
      };
      
      // Set up event listeners for faster response
      video.addEventListener('loadeddata', attemptPlay);
      video.addEventListener('canplay', attemptPlay);
      
      return () => {
        video.removeEventListener('loadeddata', attemptPlay);
        video.removeEventListener('canplay', attemptPlay);
      };
    }
  }, [onVideoStart]);
  
  return (
    <div className="robot-video-wrapper">
      <video 
        ref={videoRef}
        className="robot-video"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        priority="high"
        onLoadedData={() => {
          setVideoLoaded(true);
          console.log('Video loaded successfully');
        }}
        onError={(e) => {
          console.error('Robot video failed to load:', e.target.error);
          setVideoError(e.target.error);
        }}
        onPlay={() => {
          console.log('Video started playing');
          onVideoStart(); // Trigger welcome message when video plays
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
          borderRadius: '25px',
          transition: 'opacity 0.3s ease',
          opacity: videoLoaded ? 1 : 0.7,
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