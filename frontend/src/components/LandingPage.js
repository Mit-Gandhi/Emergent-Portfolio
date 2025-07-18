import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { 
  Brain, 
  Code, 
  Database, 
  Eye, 
  MessageSquare, 
  Zap, 
  Download,
  Github,
  Linkedin,
  Globe,
  Phone,
  Mail,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import './LandingPage.css';

const AnimatedRobot = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
        <Sphere args={[1, 100, 200]} scale={1.5}>
          <MeshDistortMaterial
            color="#10b981"
            attach="material"
            distort={0.3}
            speed={2}
          />
        </Sphere>
      </Float>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
};

const SkillCard = ({ icon: Icon, title, description, delay = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, delay }}
      className="skill-card"
    >
      <div className="skill-icon">
        <Icon size={40} />
      </div>
      <h3 className="skill-title">{title}</h3>
      <p className="skill-description">{description}</p>
    </motion.div>
  );
};

const ContactInfo = ({ icon: Icon, label, value, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="contact-item"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon size={20} />
    <div>
      <div className="contact-label">{label}</div>
      <div className="contact-value">{value}</div>
    </div>
  </motion.a>
);

const LandingPage = () => {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/1jPubZc-G8G06rN1EyWvsRNLmy5v0tafq/view?usp=sharing', '_blank');
  };

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="nav-brand"
          >
            Mit Gandhi
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="nav-menu"
          >
            <button onClick={() => scrollToSection(heroRef)} className="nav-link">Home</button>
            <button onClick={() => scrollToSection(skillsRef)} className="nav-link">Skills</button>
            <button onClick={() => scrollToSection(contactRef)} className="nav-link">Contact</button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeDownload}
              className="nav-cta"
            >
              <Download size={16} />
              Resume
            </motion.button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="hero">
        <div className="hero-bg">
          <div className="hero-overlay" />
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-text"
            >
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hey I'm an
                <span className="hero-title-highlight">
                  <Sparkles className="inline-icon" size={48} />
                  AI/ML Engineer
                </span>
              </motion.h1>
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Transforming ideas into intelligent solutions through Machine Learning, 
                Deep Learning, and cutting-edge AI technologies
              </motion.p>
              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(contactRef)}
                  className="btn-primary"
                >
                  Let's Connect
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleResumeDownload}
                  className="btn-secondary"
                >
                  <Download size={16} />
                  Download Resume
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="hero-robot"
            >
              <AnimatedRobot />
            </motion.div>
          </div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="hero-scroll"
          onClick={() => scrollToSection(skillsRef)}
        >
          <ChevronDown size={24} />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="skills">
        <div className="skills-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="skills-header"
          >
            <h2 className="section-title">Expertise & Skills</h2>
            <p className="section-subtitle">
              Specialized in cutting-edge AI/ML technologies and frameworks
            </p>
          </motion.div>
          <div className="skills-grid">
            <SkillCard
              icon={Brain}
              title="Machine Learning"
              description="Advanced algorithms, model optimization, and predictive analytics using scikit-learn, TensorFlow, and PyTorch"
              delay={0.1}
            />
            <SkillCard
              icon={Zap}
              title="Deep Learning"
              description="Neural networks, CNNs, RNNs, and transformer architectures for complex pattern recognition"
              delay={0.2}
            />
            <SkillCard
              icon={Eye}
              title="Computer Vision"
              description="Image processing, object detection, and visual recognition systems using OpenCV and deep learning"
              delay={0.3}
            />
            <SkillCard
              icon={MessageSquare}
              title="Natural Language Processing"
              description="Text analysis, sentiment analysis, and language models for intelligent text processing"
              delay={0.4}
            />
            <SkillCard
              icon={Database}
              title="Database Management"
              description="SQL, NoSQL, and big data technologies for efficient data storage and retrieval"
              delay={0.5}
            />
            <SkillCard
              icon={Code}
              title="Generative AI"
              description="Large language models, GPT integration, and creative AI applications for innovative solutions"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="contact">
        <div className="contact-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="contact-header"
          >
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle">
              Ready to collaborate on innovative AI/ML projects
            </p>
          </motion.div>
          <div className="contact-grid">
            <ContactInfo
              icon={Linkedin}
              label="LinkedIn"
              value="mit-gandhi-a3281628a"
              href="https://www.linkedin.com/in/mit-gandhi-a3281628a/"
            />
            <ContactInfo
              icon={Github}
              label="GitHub"
              value="Mit-Gandhi"
              href="https://github.com/Mit-Gandhi"
            />
            <ContactInfo
              icon={Globe}
              label="Portfolio"
              value="mit-gandhi.github.io"
              href="https://mit-gandhi.github.io/Portfolio/"
            />
            <ContactInfo
              icon={Phone}
              label="Mobile"
              value="+91 8799551850"
              href="tel:+918799551850"
            />
            <ContactInfo
              icon={Mail}
              label="Email"
              value="gandhimit04@gmail.com"
              href="mailto:gandhimit04@gmail.com"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="footer-content"
          >
            <p>&copy; 2025 Mit Gandhi. All rights reserved.</p>
            <p>Crafted with passion for AI/ML innovation</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;