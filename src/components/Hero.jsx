import React from 'react';
import { motion } from 'framer-motion';
import { Download, Compass, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Typewriter = ({ texts, delay }) => {
  const [currentText, setCurrentText] = React.useState('');
  const [textIndex, setTextIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const handleType = () => {
      const fullText = texts[textIndex];
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };
    const speed = isDeleting ? delay / 2 : delay;
    const timeout = setTimeout(handleType, speed);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, textIndex, texts, delay]);

  return <span>{currentText}<span className="cursor">|</span></span>;
};

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-content">
        <motion.div 
          className="hero-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="availability-badge glass-effect">
            <span className="dot glow-text-purple">•</span> Available for opportunities
          </div>
          <h2 className="greeting">Hi, I'm</h2>
          <h1 className="name gradient-text">Sakshi Sinha</h1>
          <h3 className="hero-role">
            <Typewriter texts={['Data Analyst', 'Aspiring Data Scientist']} delay={100} />
          </h3>
          <p className="hero-description">
            Welcome! Explore my journey through data, where I transform information into insights and build solutions that make a real impact.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <Compass size={18} /> Explore Work
            </a>
            <a href="/resume.pdf" download="Sakshi_Sinha_Resume.pdf" className="btn btn-secondary glass-effect">
              <Download size={18} /> Resume
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/sakshisinha1/" target="_blank" rel="noreferrer" className="social-square glass-effect"><Linkedin size={20} /></a>
            <a href="https://github.com/sakshisinha15" target="_blank" rel="noreferrer" className="social-square glass-effect"><Github size={20} /></a>
            <a href="mailto:sakshisinha2854@gmail.com" className="social-square glass-effect"><Mail size={20} /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
