import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Activity, BarChart2, Heart, Database, FileText } from 'lucide-react';
import './Projects.css';

const PrjVisual1 = () => (
  <div className="prj-visual-box glow-box">
    <BarChart2 size={64} style={{ color: 'var(--accent-purple)' }} />
    <span style={{ marginTop: 10, fontWeight: 600 }}>489B Streams</span>
  </div>
);

const PrjVisual2 = () => (
  <div className="prj-visual-box glow-box" style={{ borderColor: 'var(--accent-cyan)' }}>
    <Activity size={64} style={{ color: 'var(--accent-cyan)' }} />
    <span style={{ marginTop: 10, fontWeight: 600 }}>97.6% Accuracy</span>
  </div>
);

const PrjVisual3 = () => (
  <div className="prj-visual-box glow-box" style={{ borderColor: 'var(--accent-purple)' }}>
    <Heart size={64} style={{ color: 'var(--accent-purple)' }} />
    <span style={{ marginTop: 10, fontWeight: 600 }}>SVM Optimized</span>
  </div>
);

const ProjectCard = ({ title, category, date, description, tags, links, visual: Visual, image, footerText, delay }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  // Split description strings by periods creatively to simulate bullets. Requires a filter to clear empty strings.
  const bulletPoints = description.split('. ').filter(point => point.trim().length > 0);

  return (
    <motion.div 
      className="ref-project-card glass-effect"
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="ref-project-visual">
        {image ? (
          <img src={image} alt={title} className="prj-image-full" />
        ) : (
          <Visual />
        )}
      </div>
      <div className="ref-project-info">
        <div className="ref-project-header-row">
          <h3>{title}</h3>
          {date && <span className="ref-project-date">{date}</span>}
        </div>
        <div className="ref-category">{category}</div>
        
        <ul>
          {bulletPoints.map((point, idx) => (
            <li key={idx}>{point.endsWith('.') ? point : point + '.'}</li>
          ))}
        </ul>

        <div className="ref-tech-pills">
          {tags.map((tag, idx) => (
            <span key={idx} className="ref-pill">
              {tag}
            </span>
          ))}
        </div>
        <div className="ref-project-actions">
          {footerText && (
            <p className="ref-footer-text">{footerText}</p>
          )}
          {links && links.github && links.github !== "#" && (
            <a href={links.github} className="btn btn-secondary" target="_blank" rel="noreferrer"><Github size={16} /> Source Code</a>
          )}
          {links && links.demo && links.demo !== "#" && (
            <a href={links.demo} className="btn btn-secondary" target="_blank" rel="noreferrer"><ExternalLink size={16} /> View Website</a>
          )}
          {links && links.responses && (
            <a href={links.responses} className="btn btn-secondary" target="_blank" rel="noreferrer"><Database size={16} /> Responses</a>
          )}
          {links && links.form && (
            <a href={links.form} className="btn btn-secondary" target="_blank" rel="noreferrer"><FileText size={16} /> Google Form</a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const projects = [
    {
      title: "Obesity Level Prediction Model",
      category: "Machine Learning",
      date: "Dec'25 - Dec'25",
      description: "Preprocessed and analyzed obesity dataset using EDA and feature engineering. Built and compared ML models (SVM, Logistic Regression, Decision Tree, Naïve Bayes). Achieved best performance using SVM for accurate obesity level prediction of 97.40% accuracy.",
      tags: ["python", "pandas", "numpy", "scikit-learn"],
      links: { github: "https://github.com/sakshisinha15/MAchineLearning" },
      image: "/obesity-chart.png",
      delay: 0.1
    },
    {
      title: "Impact of AI Tools on Student Learning",
      category: "Data Visualization",
      date: "Nov'25 - Dec'25",
      description: "Collected 124 real survey responses via Google Forms and expanded the dataset with 8000+ synthetic responses generated using ChatGPT. Performed data cleaning and transformation using Power Query. Built an interactive Power BI dashboard to visualize trends and insights. Analyzed AI usage across demographics and academic disciplines. Found that AI tools improve student engagement and learning outcomes.",
      tags: ["Power BI"],
      links: { 
        github: "https://github.com/sakshisinha15/PowerBICA2", 
        demo: "https://app.powerbi.com/view?r=eyJrIjoiN2E5NDQyYjgtOWE1NC00YjZiLTliMjItMmM2ZDg1ODU2ZDRmIiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D",
        responses: "https://docs.google.com/spreadsheets/d/1N6G0Dr2Ae_FxY7iDsuxMWDz1dgf_9c-wwS9eaxSTdgs/edit?resourcekey=&gid=471480764#gid=471480764",
        form: "https://docs.google.com/forms/d/e/1FAIpQLSeQ1gKTsj7jjASK7bc5vMwS8FmhGR8_0ER6qT_ZwBmvtquqqg/viewform"
      },
      image: "/impact-ai.png",
      delay: 0.2
    },
    {
      title: "Spotify Data Analysis Dashboard",
      category: "Data Visualization",
      date: "Jul'25 - Jul'25",
      description: "Built an interactive Power BI dashboard to analyze the impact of AI tools on student learning, engagement, and performance. Utilized Power BI and Power Query Editor for data cleaning, transformation, and visualization. Insights revealed over 489 billion total streams and identified shifts in user preferences, supporting data-driven strategies.",
      tags: ["Power BI"],
      links: { 
        github: "https://github.com/sakshisinha15/SPOTIFYPOWERBI", 
        demo: "https://app.powerbi.com/view?r=eyJrIjoiNjYyMDk1NmYtNzE5ZS00NjUzLWE4NTYtYmM5OGI5ZmRkMTM4IiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D" 
      },
      image: "/spotify.png",
      delay: 0.3
    }
  ];

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container" ref={ref}>
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="glow-text-blue">Projects</h2>
          <div className="header-line"></div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
