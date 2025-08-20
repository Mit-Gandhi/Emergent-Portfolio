import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { 
    once: false, 
    margin: "-100px 0px -100px 0px" 
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as any,
        type: "spring" as const,
        stiffness: 100,
        damping: 20
      }
    }
  };

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
          My Projects.
        </motion.h2>
      </div>

      {/* Cards Container */}
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="feature-cards-container"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
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
      </motion.div>
    </div>
  );
};