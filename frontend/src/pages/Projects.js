import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Database, Eye, MessageSquare, Brain, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import { Timeline } from '../components/ui/timeline';
import './Projects.css';

const ProjectCard = ({ project, index }) => {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="project-card"
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-links">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={20} />
            </motion.a>
            {project.demo && (
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="tech-tag">
              {getTechIcon(tech)}
              {tech}
            </span>
          ))}
        </div>
        <div className="project-features">
          <h4>Key Features:</h4>
          <ul>
            {project.features.map((feature, featureIndex) => (
              <li key={featureIndex}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Medical Diagnosis System",
      description: "A deep learning system that analyzes medical images to assist doctors in diagnosing diseases. Uses computer vision and neural networks to identify anomalies in X-rays, CT scans, and MRIs with high accuracy.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      github: "https://github.com/Mit-Gandhi/medical-diagnosis-ai",
      demo: "https://medical-ai-demo.com",
      technologies: ["Deep Learning", "Computer Vision", "Python", "TensorFlow", "OpenCV"],
      features: [
        "Multi-class disease classification",
        "Real-time image processing",
        "95% accuracy on validation set",
        "Web-based interface for doctors",
        "Integration with hospital systems"
      ]
    },
    {
      title: "Smart Customer Support Chatbot",
      description: "An intelligent chatbot powered by NLP and machine learning that provides 24/7 customer support. Understands customer queries, provides relevant answers, and escalates complex issues to human agents.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
      github: "https://github.com/Mit-Gandhi/smart-chatbot",
      technologies: ["NLP", "Machine Learning", "Python", "BERT", "Flask", "MongoDB"],
      features: [
        "Intent recognition and entity extraction",
        "Multi-language support",
        "Sentiment analysis",
        "Conversation history tracking",
        "Analytics dashboard for insights"
      ]
    },
    {
      title: "Predictive Sales Analytics Platform",
      description: "A comprehensive analytics platform that uses machine learning to predict sales trends, customer behavior, and market dynamics. Helps businesses make data-driven decisions and optimize their sales strategies.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "https://github.com/Mit-Gandhi/sales-analytics-ml",
      technologies: ["Machine Learning", "Python", "Scikit-learn", "React", "Database"],
      features: [
        "Sales forecasting with 92% accuracy",
        "Customer segmentation analysis",
        "Real-time dashboard with visualizations",
        "Automated report generation",
        "A/B testing framework"
      ]
    }
  ];

  return (
    <div className="projects-page">
      <Navigation />
      
      <div className="projects-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="projects-header"
        >
          <h1 className="page-title">My Projects</h1>
          <p className="page-subtitle">Showcasing innovative AI/ML solutions that solve real-world problems</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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
          >
            <Github size={20} />
            Visit My GitHub
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;