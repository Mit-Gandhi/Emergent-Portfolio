import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Database, Eye, MessageSquare, Brain, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import { Timeline } from '../components/ui/timeline';
import './Projects.css';

const Projects = () => {
  // Prevent only horizontal scrollbar, keep vertical scrollbar
  useEffect(() => {
    // Only prevent horizontal overflow, maintain vertical scrolling
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowY = 'auto';
    document.body.style.overflowY = 'auto';
    document.documentElement.style.maxWidth = '100vw';
    document.body.style.maxWidth = '100vw';
    document.documentElement.style.width = '100%';
    document.body.style.width = '100%';
    
    // Prevent any temporary layout shifts that cause horizontal overflow
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    
    // Clean up on unmount
    return () => {
      document.documentElement.style.overflowX = '';
      document.body.style.overflowX = '';
      document.documentElement.style.overflowY = '';
      document.body.style.overflowY = '';
      document.documentElement.style.maxWidth = '';
      document.body.style.maxWidth = '';
      document.documentElement.style.width = '';
      document.body.style.width = '';
      document.body.style.margin = '';
      document.body.style.padding = '';
    };
  }, []);

  const getTechIcon = (tech) => {
    switch (tech.toLowerCase()) {
      case 'machine learning':
      case 'ml':
        return <Brain size={16} />;
      case 'deep learning':
      case 'dl':
        return <Zap size={16} />;
      case 'computer vision':
      case 'cv':
        return <Eye size={16} />;
      case 'nlp':
      case 'natural language processing':
        return <MessageSquare size={16} />;
      case 'database':
      case 'mongodb':
      case 'sql':
        return <Database size={16} />;
      default:
        return <Code size={16} />;
    }
  };

  const projects = [
    {
      title: "CrimeVision AI",
      content: (
        <div className="timeline-project">
          <div className="timeline-project-header">
            <img 
              src="/images/banner1.jpg" 
              alt="CrimeVision AI - Criminal Detection System"
              className="timeline-project-image"
              loading="eager"
              decoding="async"
              fetchpriority="high"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=400&fit=crop';
              }}
            />
          </div>
          <div className="timeline-project-content">
            <h4 className="timeline-project-title">CrimeVision AI</h4>
            <p className="timeline-project-description">
              An innovative AI-driven criminal detection system developed during HackWithGujarat. 
              Utilizes computer vision and machine learning algorithms to identify and track suspicious activities in real-time surveillance footage.
            </p>
            
            <div className="timeline-project-tech">
              {["Computer Vision", "Machine Learning", "Python", "GANs", "Deep Learning", "Firebase", "FAISS", "InsightFace"].map((tech, index) => (
                <span key={index} className="timeline-tech-tag">
                  {getTechIcon(tech)}
                  {tech}
                </span>
              ))}
            </div>

            <div className="timeline-project-features">
              <h5>Key Features:</h5>
              <ul>
                <li>Real-time criminal detection in surveillance footage</li>
                <li>Advanced facial recognition and matching</li>
                <li>Suspicious activity pattern recognition</li>
                <li>Automated alert system for law enforcement</li>
                <li>High accuracy detection algorithms</li>
              </ul>
            </div>

            <div className="timeline-project-links">
              <motion.a
                href="https://github.com/Mit-Gandhi/Hack_with_gujarat"
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-project-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Github size={18} />
                GitHub Repository
              </motion.a>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Brain Tumor Detection",
      content: (
        <div className="timeline-project">
          <div className="timeline-project-header">
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&auto=format&q=80" 
              alt="Brain Tumor Detection - Medical AI System"
              className="timeline-project-image"
              loading="eager"
              decoding="async"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop';
              }}
            />
          </div>
          <div className="timeline-project-content">
            <h4 className="timeline-project-title">Brain Tumor Detection System</h4>
            <p className="timeline-project-description">
              An advanced deep learning system for automated brain tumor detection and classification using medical imaging data. 
              Utilizes state-of-the-art computer vision techniques with YOLOv11 and convolutional neural networks to analyze MRI and CT scans with high precision.
            </p>
            
            <div className="timeline-project-tech">
              {["Deep Learning", "Computer Vision", "Medical Imaging", "YOLOv11", "TensorFlow", "Python", "OpenCV", "PyTorch"].map((tech, index) => (
                <span key={index} className="timeline-tech-tag">
                  {getTechIcon(tech)}
                  {tech}
                </span>
              ))}
            </div>

            <div className="timeline-project-features">
              <h5>Key Features:</h5>
              <ul>
                <li>Automated tumor detection and classification</li>
                <li>High-precision medical image analysis</li>
                <li>Multi-class brain tumor identification</li>
                <li>Real-time processing of MRI/CT scans</li>
                <li>DICOM format compatibility</li>
                <li>Clinical-grade accuracy metrics</li>
              </ul>
            </div>

            <div className="timeline-project-links">
              <motion.a
                href="https://github.com/Mit-Gandhi/Brain-Tumor-Detection"
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-project-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Github size={18} />
                GitHub Repository
              </motion.a>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "SkillXChange",
      content: (
        <div className="timeline-project">
          <div className="timeline-project-header">
            <img 
              src="/images/skillxchange.jpg" 
              alt="SkillXChange - Peer-to-Peer Learning Platform"
              className="timeline-project-image"
              loading="eager"
              decoding="async"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop';
              }}
            />
          </div>
          <div className="timeline-project-content">
            <h4 className="timeline-project-title">SkillXChange</h4>
            <p className="timeline-project-description">
              A comprehensive skill exchange platform that connects individuals looking to learn new skills with those willing to teach. 
              Built with modern web technologies, SkillXChange facilitates peer-to-peer learning by enabling users to offer their expertise 
              in exchange for learning opportunities in other domains. The platform features user profiles, skill matching, and interactive learning sessions.
            </p>
            
            <div className="timeline-project-tech">
              {["React", "Vite.js", "Firebase Firestore", "Tailwind CSS", "Firebase Auth"].map((tech, index) => (
                <span key={index} className="timeline-tech-tag">
                  {getTechIcon(tech)}
                  {tech}
                </span>
              ))}
            </div>

            <div className="timeline-project-features">
              <h5>Key Features:</h5>
              <ul>
                <li>User authentication and profile management</li>
                <li>Skill listing and matching algorithm</li>
                <li>Real-time messaging and communication</li>
                <li>Session scheduling and management</li>
                <li>Rating and review system</li>
                <li>Search and filter functionality</li>
              </ul>
            </div>

            <div className="timeline-project-links">
              <motion.a
                href="https://github.com/Mit-Gandhi/SkillXChange"
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-project-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Github size={18} />
                GitHub Repository
              </motion.a>
              <motion.a
                href="https://skillxchanged.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-project-link demo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ExternalLink size={18} />
                Live Demo
              </motion.a>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="projects-page-timeline">
      <Navigation />
      <div className="timeline-wrapper">
        <Timeline data={projects} />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.3, 
          type: "spring", 
          stiffness: 100, 
          damping: 15 
        }}
        className="projects-footer"
      >
        <h2>Want to see more?</h2>
        <p>Check out my GitHub profile for more projects and contributions</p>
        <motion.a
          href="https://github.com/Mit-Gandhi"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Github size={20} />
          Visit My GitHub
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Projects;