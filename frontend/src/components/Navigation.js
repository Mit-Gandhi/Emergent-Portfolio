import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navigation.css';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close menu after navigation
  };

  const handleContact = () => {
    navigate('/contact');
    setIsMenuOpen(false); // Close menu after navigation
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

          {/* Desktop Menu */}
          <div className="nav-menu desktop-menu">
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

          {/* Hamburger Menu Button */}
          <button 
            className="hamburger-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mobile-menu-overlay"
                onClick={() => setIsMenuOpen(false)}
              >
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="mobile-menu"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="mobile-menu-header">
                    <h3>Menu</h3>
                    <button 
                      onClick={() => setIsMenuOpen(false)}
                      className="close-menu-btn"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <div className="mobile-menu-items">
                    <button 
                      onClick={() => handleNavigation('/')}
                      className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    >
                      Home
                    </button>
                    <button 
                      onClick={() => handleNavigation('/about')}
                      className={`mobile-nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                    >
                      About
                    </button>
                    <button 
                      onClick={() => handleNavigation('/projects')}
                      className={`mobile-nav-link ${location.pathname === '/projects' ? 'active' : ''}`}
                    >
                      Projects
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleContact}
                      className="mobile-nav-cta"
                    >
                      <span className="nav-cta-icon">🔗</span>
                      Let's Connect
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;