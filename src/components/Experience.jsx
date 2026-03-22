import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const ExperienceCard = ({ title, company, period, tasks, delay }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div 
      className="timeline-item"
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="timeline-dot glow-box">
        <Briefcase size={16} />
      </div>
      <div className="timeline-content glass-effect">
        <h3 className="job-title">{title}</h3>
        <h4 className="job-company glow-text-cyan">{company}</h4>
        <div className="job-period">{period}</div>
        <ul className="job-tasks">
          {tasks.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "Deloitte (Forage Virtual Experience)",
      period: "Recent",
      tasks: [
        "Conducted in-depth data analysis using Advanced Excel to uncover business insights.",
        "Tracked and monitored Key Performance Indicators (KPIs) to aid decision making.",
        "Designed and developed interactive Tableau dashboards to visually communicate complex data.",
        "Collaborated to provide data-driven recommendations optimizing business processes."
      ],
      delay: 0.2
    }
  ];

  return (
    <section id="experience" className="experience-section section-padding">
      <div className="container" ref={ref}>
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="glow-text-blue">Professional Experience</h2>
          <div className="header-line"></div>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={index}
              {...exp}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
