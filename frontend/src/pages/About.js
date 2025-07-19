import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  GraduationCap, 
  Award, 
  Calendar,
  MapPin,
  Code,
  Brain,
  Database,
  Eye,
  MessageSquare,
  Zap
} from 'lucide-react';
import Navigation from '../components/Navigation';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <Navigation />
      
      <div className="about-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="about-header"
        >
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">Get to know the person behind the code</p>
        </motion.div>

        <div className="about-grid">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="profile-section"
          >
            <div className="profile-card">
              <div className="profile-image">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                  alt="Mit Gandhi" 
                  className="profile-photo"
                />
              </div>
              <div className="profile-info">
                <h2>Mit Gandhi</h2>
                <p className="profile-role">AI/ML Engineer</p>
                <div className="profile-location">
                  <MapPin size={16} />
                  <span>India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Introduction Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="introduction-section"
          >
            <div className="section-card">
              <div className="section-header">
                <User size={24} />
                <h3>Introduction</h3>
              </div>
              <div className="section-content">
                <p>
                  Hi, I'm Mit Gandhi, a data enthusiast passionate about transforming raw data into actionable insights. With expertise in data analytics, machine learning and AI, I specialize in building intelligent solutions that drive innovation and efficiency.
                </p>
                <p>
                  I thrive on solving complex problems, uncovering hidden patterns in data, and leveraging AI to make smarter decisions. Whether it's predictive modeling, deep learning, or data visualization, my work is driven by curiosity and a commitment to excellence. Welcome to my portfolio—where data meets intelligence and possibilities become reality.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="experience-section"
          >
            <div className="section-card">
              <div className="section-header">
                <Calendar size={24} />
                <h3>Experience</h3>
              </div>
              <div className="section-content">
                <div className="experience-item">
                  <h4>AI/ML Research Intern</h4>
                  <p className="company">CDAC, Mumbai</p>
                  <p className="duration">Feb 2025 - March 2025</p>
                  <p className="description">
                    Developed a comprehensive system for facial analysis, integrating recognition, detection, and crowd-based object tracking.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="education-section"
          >
            <div className="section-card">
              <div className="section-header">
                <GraduationCap size={24} />
                <h3>Education</h3>
              </div>
              <div className="section-content">
                <div className="education-item">
                  <h4>B.E. in Department of Computer Engineering</h4>
                  <p className="institution">Bharati Vidyapeeth College of Engineering</p>
                  <p className="location">Navi Mumbai, Maharashtra</p>
                  <p className="duration">2022-2026</p>
                  <p className="description">
                    GPA: 7.5/10
                  </p>
                </div>
                <div className="education-item">
                  <h4>HSC - Science</h4>
                  <p className="institution">H.M.B Sardar High School</p>
                  <p className="location">Surat, Gujarat</p>
                  <p className="duration">2021-2022</p>
                  <p className="description">
                    Total: 67%
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="skills-section"
          >
            <div className="section-card">
              <div className="section-header">
                <Code size={24} />
                <h3>Technical Skills</h3>
              </div>
              <div className="section-content">
                <div className="skills-grid">
                  <div className="skill-category">
                    <Brain size={20} />
                    <h4>Machine Learning</h4>
                    <p>Python, Scikit-learn, TensorFlow, PyTorch, Keras</p>
                  </div>
                  <div className="skill-category">
                    <Zap size={20} />
                    <h4>Deep Learning</h4>
                    <p>CNN, RNN, LSTM, Transformers, GANs</p>
                  </div>
                  <div className="skill-category">
                    <Eye size={20} />
                    <h4>Computer Vision</h4>
                    <p>OpenCV, PIL, Image Processing, Object Detection</p>
                  </div>
                  <div className="skill-category">
                    <MessageSquare size={20} />
                    <h4>NLP</h4>
                    <p>NLTK, spaCy, Transformers, BERT, GPT</p>
                  </div>
                  <div className="skill-category">
                    <Database size={20} />
                    <h4>Data & Tools</h4>
                    <p>SQL, MongoDB, Docker, Git, AWS, Google Cloud</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="achievements-section"
          >
            <div className="section-card">
              <div className="section-header">
                <Award size={24} />
                <h3>Achievements & Certifications</h3>
              </div>
              <div className="section-content">
                <div className="achievements-grid">
                  <div className="achievement-item">
                    <h4>Google Cloud Professional ML Engineer</h4>
                    <p>Certified in designing and building ML models on GCP</p>
                  </div>
                  <div className="achievement-item">
                    <h4>AWS Machine Learning Specialty</h4>
                    <p>Expert-level certification in AWS ML services</p>
                  </div>
                  <div className="achievement-item">
                    <h4>TensorFlow Developer Certificate</h4>
                    <p>Certified in building and training neural networks</p>
                  </div>
                  <div className="achievement-item">
                    <h4>Kaggle Competition Winner</h4>
                    <p>Top 1% in computer vision challenges</p>
                  </div>
                  <div className="achievement-item">
                    <h4>Research Publication</h4>
                    <p>Published papers on deep learning applications</p>
                  </div>
                  <div className="achievement-item">
                    <h4>AI Innovation Award</h4>
                    <p>Recognized for outstanding contribution to AI research</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;