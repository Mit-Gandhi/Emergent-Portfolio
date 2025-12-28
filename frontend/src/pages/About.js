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
                  src="/images/mit.jpg"
                  alt="Mit Gandhi - AI/ML Engineer"
                  className="profile-photo"
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop';
                  }}
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
                  <h4>AI Engineer Intern</h4>
                  <p className="company">KisanKonnect, Navi Mumbai</p>
                  <p className="duration">Dec 2025 - Present</p>
                  <p className="description">
                    // Built and deployed machine learning models for predictive analytics, utilizing TensorFlow and PyTorch to process large datasets and improve accuracy by 25% in classification tasks.
                  </p>
                </div>

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
                  <p className="description">GPA: 7.5/10</p>
                </div>

                <div className="education-item">
                  <h4>HSC - Science</h4>
                  <p className="institution">H.M.B Sardar High School</p>
                  <p className="location">Surat, Gujarat</p>
                  <p className="duration">2021-2022</p>
                  <p className="description">Total: 67%</p>
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
                    <Code size={20} />
                    <h4>Programming Languages</h4>
                    <p>Python, Java, C++, HTML, CSS, JavaScript</p>
                  </div>
                  <div className="skill-category">
                    <Brain size={20} />
                    <h4>Machine Learning</h4>
                    <p>Python, Scikit-learn, TensorFlow, PyTorch, Keras</p>
                  </div>
                  <div className="skill-category">
                    <Zap size={20} />
                    <h4>Deep Learning</h4>
                    <p>CNN, LSTM, Transformers, GANs</p>
                  </div>
                  <div className="skill-category">
                    <Eye size={20} />
                    <h4>Computer Vision</h4>
                    <p>OpenCV, PIL, Image Processing, Object Detection, YOLO, InsightFace</p>
                  </div>
                  <div className="skill-category">
                    <MessageSquare size={20} />
                    <h4>NLP</h4>
                    <p>NLTK, Transformers, BERT, GPT</p>
                  </div>
                  <div className="skill-category">
                    <Database size={20} />
                    <h4>Data & Tools</h4>
                    <p>SQL, Docker, Google Firebase</p>
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
                    <h4>HackWithGujarat 2025 Winner</h4>
                    <p>Won the prestigious hackathon competition in Gujarat</p>
                    <a
                      href="https://www.linkedin.com/posts/mit-gandhi-a3281628a_hackwithgujarat-hackwithgujarat-hackathonwinner-activity-7337790395495387136-a-Nv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY-f0YBRmx-6h9xDstubYBAWg9X46BbJ08"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-button"
                    >
                      View
                    </a>
                  </div>

                  <div className="achievement-item">
                    <h4>IEEE Paper Selection & Presentation</h4>
                    <p>Research paper selected and presented at IEEE conference</p>
                    <a
                      href="https://www.linkedin.com/posts/mit-gandhi-a3281628a_ieee-presentation-certificate-activity-7351614241491042305-62H0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY-f0YBRmx-6h9xDstubYBAWg9X46BbJ08"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-button"
                    >
                      View
                    </a>
                  </div>

                  <div className="achievement-item">
                    <h4>HackOverFlow 3.0</h4>
                    <p>Participated in innovative AI-driven criminal detection hackathon</p>
                    <a
                      href="https://www.linkedin.com/posts/mit-gandhi-a3281628a_innovation-ai-criminaldetection-activity-7312046086334898176-XjyB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY-f0YBRmx-6h9xDstubYBAWg9X46BbJ08"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-button"
                    >
                      View
                    </a>
                  </div>

                  <div className="achievement-item">
                    <h4>C-DAC Internship</h4>
                    <p>Completed internship in backend development and AI</p>
                    <a
                      href="https://www.linkedin.com/posts/mit-gandhi-a3281628a_internship-backenddevelopment-ai-activity-7311735862906519552-HSm3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY-f0YBRmx-6h9xDstubYBAWg9X46BbJ08"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-button"
                    >
                      View
                    </a>
                  </div>

                  <div className="achievement-item">
                    <h4>Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2025]</h4>
                    <p>Comprehensive certification in ML, AI, and modern technologies</p>
                    <a
                      href="https://udemy-certificate.s3.amazonaws.com/pdf/UC-9cc020f7-675d-42cd-9d26-955eccc6fb13.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-button"
                    >
                      View
                    </a>
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
