import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Education.css';

const educationData = [
  {
    title: "B.Tech in Computer Science Engineering",
    institution: "Lovely Professional University,Punjab,INDIA",
    date: "August 2023 - Present",
    details: "CGPA: 7.59",
    delay: 0.2
  },
  {
    title: "Intermediate",
    institution: "Param Gyan Niketan, Gaya, India",
    date: "Apr'22 - Mar'23",
    details: "Percentage: 82.2",
    delay: 0.3
  },
  {
    title: "Matriculation",
    institution: "Kendriya Vidyalaya No.2, Gaya, India",
    date: "Apr'20 - Mar'21",
    details: "Percentage: 85.8",
    delay: 0.4
  }
];

const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="education" className="education-section section-padding">
      <div className="container" ref={ref}>
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="glow-text-blue">EDUCATION</h2>
          <div className="header-line"></div>
        </motion.div>

        <div className="ref-timeline-container">
          {educationData.map((item, idx) => (
            <motion.div 
              key={idx}
              className="ref-timeline-item"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.5, delay: item.delay }}
            >
              <div className="timeline-dot"></div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-institution">{item.institution}</p>
              <p className="timeline-date">{item.date}</p>
              <div className="timeline-details">
                <p>{item.details}</p>
                {item.coursework && <p>{item.coursework}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
