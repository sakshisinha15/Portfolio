import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import './Training.css';

const Training = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const trainingData = {
    title: "From Data to Decisions : A Hands-On Approach to Data Science",
    issuer: "Lovely Professional University",
    date: "June 2025 - July 2025",
    description: "Completed a 1-month training in Data Analytics, gaining hands-on experience in data cleaning, exploratory data analysis (EDA), and data visualization. Worked with tools such as Excel, Power BI, and Python (Pandas, NumPy), and implemented basic supervised machine learning models for data-driven insights.",
    certificateUrl: "https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12311346_846_20_08_2025.pdf?_gl=1*oxckh3*_gcl_au*MzY4NDUwODc0LjE3NTU4NDI0MDc.",
    imageSrc: "/training-certificate.png"
  };

  return (
    <section id="training" className="training-section section-padding">
      <div className="container" ref={ref}>
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="glow-text-blue">Training</h2>
          <div className="header-line"></div>
        </motion.div>

        <motion.div 
          className="training-content glass-effect"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="training-image-container">
            <img 
              src={trainingData.imageSrc} 
              alt="Training Certificate" 
              className="training-image" 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://via.placeholder.com/600x400?text=Certificate+Preview+Loading...";
              }}
            />
          </div>
          <div className="training-details">
            <h3 className="training-title">{trainingData.title}</h3>
            <h4 className="training-issuer glow-text-cyan">{trainingData.issuer}</h4>
            <div className="training-date" style={{ color: "var(--text-tertiary)", marginBottom: "25px", fontWeight: "500" }}>{trainingData.date}</div>
            <p className="training-description">{trainingData.description}</p>
            <a href={trainingData.certificateUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              View Original Certificate <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Training;
