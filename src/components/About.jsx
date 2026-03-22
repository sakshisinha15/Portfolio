import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const slideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="about-section section-padding">
      <div className="container" ref={ref}>
        {/* Title placed outside the grid so it doesn't affect vertical centering of the columns */}
        <motion.div 
          className="about-title-block left-aligned-heading"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={slideUp}
          transition={{ duration: 0.5 }}
        >
          <h2>About <span className="gradient-text">Me</span></h2>
        </motion.div>

        <div className="about-bento-grid">
          {/* Left Column - Text Content */}
          <div className="about-left-col">
            <motion.div 
              className="bento-card glass-effect my-journey-card"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideUp}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="bento-paragraph">
                Hi, I’m <span className="highlight-text">Sakshi Sinha</span>, a Computer Science student passionate about data analysis and transforming raw data into impactful insights.
              </p>
              <p className="bento-paragraph">
                I specialize in uncovering patterns, building interactive dashboards, and developing data-driven solutions that support smarter decision-making. With hands-on experience in Python, Pandas, NumPy, Power BI, Tableau, and SQL, I have worked on projects involving real-world datasets and analytics.
              </p>
              <p className="bento-paragraph">
                I continuously enhance my problem-solving abilities by practicing Data Structures and Algorithms on platforms like LeetCode, GeeksforGeeks, and HackerRank.
              </p>
              <p className="bento-paragraph">
                I’m driven to solve real-world challenges using data—through compelling visualizations, predictive modeling, and analytical thinking.
              </p>
              <p className="bento-paragraph">
                Currently exploring: <strong>AWS and Generative AI</strong> to expand my capabilities in scalable and intelligent systems.
              </p>
              <p className="bento-paragraph mb-0">
                My goal is to become a proficient Data Analyst / Data Scientist, delivering meaningful insights and building impactful, data-driven solutions.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Profile Picture */}
          <div className="about-right-col">
            <motion.div 
              className="about-profile-wrapper"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="profile-container">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
                <div className="profile-circle glass-effect">
                  <img src="/profile.jpg?v=3" alt="Sakshi" className="profile-img" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
