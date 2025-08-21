import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface FeatureCard {
  title: string;
  description: string;
  features: string[];
  image: string;
  githubLink?: string;
  demoLink?: string;
  techStack: string[];
}

interface FeatureCardsProps {
  cards: FeatureCard[];
}

export const FeatureCards: React.FC<FeatureCardsProps> = ({ cards }) => {
  return (
    <div className="feature-cards-section">
      {/* Header Section */}
      <div className="feature-cards-header">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="feature-cards-title"
        >
          My Projects
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="page-subtitle"
        >
          Explore my projects
        </motion.p>
      </div>

      {/* Cards Container */}
      <div className="feature-cards-container">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.2,
              ease: "easeOut"
            }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3, ease: "easeOut" as any }
            }}
            className="feature-card"
          >
            {/* Card Content Container */}
            <div className="feature-card-inner">
              {/* Left Side - Text Content */}
              <div className="feature-card-content">
                <div className="feature-card-icon">
                  <div className="feature-card-icon-circle">
                    <span className="feature-card-icon-text">{index + 1}</span>
                  </div>
                </div>
                
                <h4 className="feature-card-title">{card.title}</h4>
                <p className="feature-card-description">{card.description}</p>
                
                <ul className="feature-card-features">
                  {card.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-card-feature">
                      <span className="feature-card-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="feature-card-tech">
                  {card.techStack.map((tech, techIndex) => (
                    <span key={techIndex} className="feature-card-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="feature-card-links">
                  {card.githubLink && (
                    <motion.a
                      href={card.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="feature-card-link github"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      GitHub
                    </motion.a>
                  )}
                  {card.demoLink && (
                    <motion.a
                      href={card.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="feature-card-link demo"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Right Side - Image/Preview */}
              <div className="feature-card-preview">
                {/* Small Green Image Box */}
                <div className="project-image-thumbnails">
                  <div className="project-thumbnail-box">
                    <img 
                      src={card.image} 
                      alt={`${card.title} thumbnail`}
                      className="project-thumbnail-image"
                    />
                  </div>
                </div>
                
                <div className="feature-card-image-container">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="feature-card-image"
                    loading="lazy"
                  />
                  <div className="feature-card-image-overlay"></div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};