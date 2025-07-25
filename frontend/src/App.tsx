import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function AppContent() {
  const [loading, setLoading] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Start loading transition
    setLoading(true);
    setShowContent(false);
    
    const timer = setTimeout(() => {
      setLoading(false);
      // Small delay before showing content for smooth transition
      setTimeout(() => {
        setShowContent(true);
      }, 100);
    }, 800); // Show loading for 0.8 seconds

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <CustomCursor />
      
      {/* Loading Screen - Only visible during loading */}
      <AnimatePresence>
        {loading && <LoadingScreen message="Loading..." />}
      </AnimatePresence>
      
      {/* Main Content - Only visible when not loading */}
      <AnimatePresence>
        {showContent && !loading && (
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;