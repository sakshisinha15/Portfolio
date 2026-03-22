import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const achievementData = {
    title: "Secured 2nd position in a C & DBMS Quiz Competition among 100 participants",
    issuer: "Conducted by the Microsoft Achievers Club in LPU",
    date: "April 2024",
    description: "Participated and excelled in the competitive quiz covering advanced topics in C programming and Database Management Systems.",
    linkUrl: "https://www.linkedin.com/posts/sakshisinha1_achievement-lpu-quizcompetition-activity-7222513447563919360-y_5v/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEfSEDMB4v8MGFFfiH8NtDwYFvSVTfLjS7s",
    imageSrc: "/achieve.png"
  };

  return (
    <section id="achievements" className="achievements-section section-padding">
      <div className="container" ref={ref}>
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="glow-text-blue">Achievements</h2>
          <div className="header-line"></div>
        </motion.div>

        <motion.div 
          className="achievements-content glass-effect"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="achievements-image-container">
            <img 
              src={achievementData.imageSrc} 
              alt="Achievement Proof" 
              className="achievements-image" 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://via.placeholder.com/600x400?text=Image+Preview+Loading...";
              }}
            />
          </div>
          <div className="achievements-details">
            <h3 className="achievements-title">{achievementData.title}</h3>
            <h4 className="achievements-issuer glow-text-cyan">{achievementData.issuer}</h4>
            <div className="achievements-date" style={{ color: "var(--text-tertiary)", marginBottom: "25px", fontWeight: "500" }}>{achievementData.date}</div>
            <p className="achievements-description">{achievementData.description}</p>
            <a href={achievementData.linkUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              View Post on LinkedIn <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
