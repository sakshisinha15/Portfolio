import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';
import './TechnicalActivities.css';

const activitiesData = [
  {
    title: "Zinnovatio 3.0 Hackathon",
    issuer: "Chandigarh University",
    date: "Oct 2025",
    description: "• Participated in a competitive hackathon, collaborating in a team to design and develop an innovative tech solution.\n• Gained hands-on experience in problem-solving, rapid prototyping, and presenting ideas under time constraints.",
    image: "/zin.png",
    link: "https://drive.google.com/file/d/1WgsBa3b2hzsB8HKuT_cMgFQP6nwUhhl-/view"
  },
  {
    title: "GDG on campus solution challenge",
    issuer: "Organized by hack2skill",
    date: "Aug 2025",
    description: "• Contributed to building a solution aligned with real-world challenges, focusing on innovation and scalability.\n• Enhanced skills in teamwork, ideation, and applying technical knowledge to practical problems.",
    image: "/gdg.png",
    link: "https://drive.google.com/file/d/1TH8_yxHSIosh1cpm3MfsyVetqqmxB3K7/view"
  },
  {
    title: "Participated in COD-A-FESTx Competition",
    issuer: "Organized by INNOVXUS in LPU",
    date: "Oct 2023",
    description: "• Participated in a coding competition, solving algorithmic and logical challenges under time pressure.\n• Strengthened problem-solving abilities and improved coding efficiency in a competitive environment.",
    image: "/code.png",
    link: "https://drive.google.com/file/d/1G_gHfwqGH5bqc-K_YqUBf0JCkctdWKDH/view"
  }
];

const ActivityCard = ({ activity, index }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div 
      className="activity-card glass-effect"
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="activity-image-container">
        {activity.image ? (
          <img src={activity.image} alt={activity.title} className="activity-image" />
        ) : (
          <div className="activity-icon-fallback">
            <Award size={32} />
          </div>
        )}
      </div>
      
      <div className="activity-content">
        <h3 className="activity-title">{activity.title}</h3>
        {activity.issuer && <p className="activity-issuer">{activity.issuer}</p>}
        {activity.date && <p className="activity-date">{activity.date}</p>}
        {activity.description && (
          <div className="activity-description">
            {activity.description.split('\n').map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        )}
        <a href={activity.link} className="activity-link" target="_blank" rel="noreferrer">
          View Details <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  );
};

const TechnicalActivities = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="technical-activities" className="activities-section section-padding">
      <div className="container" ref={ref}>
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2><span className="gradient-text">Technical Activities</span></h2>
        </motion.div>

        <div className="activities-grid">
          {activitiesData.map((activity, index) => (
            <ActivityCard key={index} activity={activity} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalActivities;
