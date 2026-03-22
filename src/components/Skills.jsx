import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, FileCode, Monitor, Layout, Hexagon,
  Box, Server, Database, GitBranch, Cloud, 
  Users, MessageSquare, Lightbulb, Activity, Star, UsersRound,
  BarChart, Bot, LineChart
} from 'lucide-react';
import './Skills.css';

const SkillCard = ({ title, items, delay }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div 
      className="skill-card glass-effect"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
    >
      <h3 className="skill-card-title">{title}</h3>
      <ul className="skill-list">
        {items.map((item, index) => (
          <li key={index} className="skill-list-item">
            <span className="skill-icon"><item.icon size={18} /></span>
            <span className="skill-name">{item.name}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const categories = [
    {
      title: "Programming Languages",
      delay: 0.2,
      items: [
        { name: "C++", icon: FileCode },
        { name: "Java", icon: Code },
        { name: "Python", icon: Monitor },
        { name: "JavaScript", icon: Layout }
      ]
    },
    {
      title: "Web Development",
      delay: 0.3,
      items: [
        { name: "HTML", icon: Hexagon },
        { name: "CSS", icon: Box },
        { name: "Spring Boot", icon: Server },
        { name: "Hibernate", icon: Database }
      ]
    },
    {
      title: "Data Science & Tools",
      delay: 0.4,
      items: [
        { name: "Pandas", icon: BarChart },
        { name: "NumPy", icon: BarChart },
        { name: "Scikit-learn", icon: Bot },
        { name: "Power BI", icon: LineChart },
        { name: "Tableau", icon: LineChart },
        { name: "Excel", icon: LineChart },
        { name: "MySQL", icon: Database },
        { name: "AWS", icon: Cloud }
      ]
    },
    {
      title: "Soft Skills",
      delay: 0.5,
      items: [
        { name: "Problem-Solving", icon: UsersRound },
        { name: "Collaboration", icon: UsersRound },
        { name: "Time Management", icon: UsersRound },
        { name: "Adaptability", icon: UsersRound }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section section-padding">
      <div className="container" ref={ref}>
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2><span className="gradient-text">Skills</span></h2>
        </motion.div>

        <div className="skills-grid">
          {categories.map((cat, index) => (
            <SkillCard 
              key={index}
              title={cat.title}
              items={cat.items}
              delay={cat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
