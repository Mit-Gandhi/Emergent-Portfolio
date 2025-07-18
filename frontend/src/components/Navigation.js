import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navigation.css';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleContact = () => {
    navigate('/contact');
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-content">
          <button 
            onClick={() => handleNavigation('/')}
            className={`nav-brand ${location.pathname === '/' ? 'active' : ''}`}
          >
            Mit Gandhi
          </button>
          <div className="nav-menu">
            <button 
              onClick={() => handleNavigation('/')}
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('/about')}
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('/projects')}
              className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
            >
              Projects
            </button>
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
  );
};

export default Navigation;