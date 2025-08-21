import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import Navigation from '../components/Navigation';
import { FeatureCards } from '../components/ui/FeatureCards';
import '../components/ui/FeatureCards.css';
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

  const projectCards = [
    {
      title: "CrimeVision AI",
      description: "An innovative AI-driven criminal detection system developed during HackWithGujarat. Utilizes computer vision and machine learning algorithms to identify and track suspicious activities in real-time surveillance footage.",
      features: [
        "Real-time criminal detection in surveillance footage",
        "Advanced facial recognition and matching",
        "Suspicious activity pattern recognition",
        "Automated alert system for law enforcement",
        "High accuracy detection algorithms"
      ],
      image: "/images/crimevisionai.png",
      githubLink: "https://github.com/Mit-Gandhi/Hack_with_gujarat",
      techStack: ["Computer Vision", "Machine Learning", "Python", "GANs", "Deep Learning", "Firebase", "FAISS", "InsightFace"]
    },
    {
      title: "Intelligent AI Delivery Agent",
      description: "An AI-powered voice-enabled assistant for delivery-related tasks that combines Retrieval-Augmented Generation (RAG) with multilingual voice interaction. The system answers delivery-related queries using a knowledge base of documents and provides natural responses in multiple languages including Hindi and English.",
      features: [
        "Voice interaction with multilingual support (Hindi, English)",
        "Document-aware responses using RAG architecture",
        "FAISS vector search for fast semantic retrieval",
        "Google Gemini integration for high-quality answers",
        "Real-time conversation loop with continuous Q&A",
        "Speech recognition and text-to-speech capabilities"
      ],
      image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop&auto=format&q=80",
      githubLink: "https://github.com/Mit-Gandhi/RAG-Based-Delivery-Agent",
      techStack: ["Python", "FastAPI", "LangChain", "FAISS", "Google Gemini", "React.js", "Vite", "TailwindCSS", "gTTS", "SpeechRecognition"]
    },
    {
      title: "SkillXChange",
      description: "A comprehensive skill exchange platform that connects individuals looking to learn new skills with those willing to teach. Built with modern web technologies, SkillXChange facilitates peer-to-peer learning by enabling users to offer their expertise in exchange for learning opportunities in other domains.",
      features: [
        "User authentication and profile management",
        "Skill listing and matching algorithm",
        "Real-time messaging and communication",
        "Session scheduling and management",
        "Rating and review system",
        "Search and filter functionality"
      ],
      image: "/images/skillxchange.png",
      githubLink: "https://github.com/Mit-Gandhi/SkillXChange",
      demoLink: "https://skillxchanged.netlify.app/",
      techStack: ["React", "Vite.js", "Firebase Firestore", "Tailwind CSS", "Firebase Auth"]
    },
    {
      title: "Brain Tumor Detection System",
      description: "An advanced deep learning system for automated brain tumor detection and classification using medical imaging data. Utilizes state-of-the-art computer vision techniques with YOLOv11 and convolutional neural networks to analyze MRI and CT scans with high precision.",
      features: [
        "Automated tumor detection and classification",
        "High-precision medical image analysis",
        "Multi-class brain tumor identification",
        "Real-time processing of MRI/CT scans",
        "DICOM format compatibility",
        "Clinical-grade accuracy metrics"
      ],
      image: "/images/brain_tumor.png",
      githubLink: "https://github.com/Mit-Gandhi/Brain-Tumor-Detection",
      techStack: ["Deep Learning", "Computer Vision", "Medical Imaging", "YOLOv11", "TensorFlow", "Python", "OpenCV", "PyTorch"]
    }
  ];

  return (
    <div className="projects-page-feature-cards">
      <Navigation />
      <div className="projects-content-wrapper">
        <FeatureCards cards={projectCards} />
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