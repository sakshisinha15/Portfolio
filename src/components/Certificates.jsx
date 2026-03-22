import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';
import './Certificates.css';

const certificatesData = [
  {
    title: "FUTURESKILLS",
    issuer: "",
    date: "Feb 2026",
    description: "Introduction on Generative AI – Artificial intelligence and Machine Learning",
    image: "/first.png",
    link: "https://drive.google.com/file/d/1IQO9HkTNLT9ygLhzDFLk5GfUS6527G_3/view?usp=drive_link"
  },
  {
    title: "ALGOUNIVERSITY",
    issuer: "",
    date: "Feb 2026",
    description: "Graph Theory Camp",
    image: "/secnd.png",
    link: "https://drive.google.com/file/d/1FNXHlkO9-2d0yx7sRApGtg2dq0-cztjn/view?usp=drive_link"
  },
  {
    title: "Deloitte",
    issuer: "",
    date: "June 2025",
    description: "Data Analytics Job Simulation",
    image: "/third.png",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_FtTSgcRZcdbLg98Rn_1750849031535_completion_certificate.pdf"
  },
  {
    title: "NPTEL",
    issuer: "",
    date: "May 2025",
    description: "Cloud Computing",
    image: "/fourth.png",
    link: "https://drive.google.com/file/d/1rfx2aNgysIoTClf3CXs5NHew_Gwev7oW/view"
  },
  {
    title: "IBM",
    issuer: "",
    date: "Sep 2024",
    description: "Introduction to Hardware and Operating Systems",
    image: "/five.png",
    link: "https://www.coursera.org/account/accomplishments/verify/8TZX7IQXJ34Q"
  },
  {
    title: "Google",
    issuer: "",
    date: "Sep 2024",
    description: "The Bits and Bytes of Computer Networking",
    image: "/six.png",
    link: "https://www.coursera.org/account/accomplishments/verify/FWHJ59F7U1BC"
  }
];

const CertificateCard = ({ cert, index }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div 
      className="certificate-card glass-effect"
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="cert-image-container">
        {cert.image ? (
          <img src={cert.image} alt={cert.title} className="cert-image" />
        ) : (
          <div className="cert-icon-fallback">
            <Award size={32} />
          </div>
        )}
      </div>
      
      <div className="cert-content">
        <h3 className="cert-title">{cert.title}</h3>
        <p className="cert-issuer">{cert.issuer}</p>
        <p className="cert-date">{cert.date}</p>
        {cert.description && (
          <p className="cert-description">{cert.description}</p>
        )}
        <a href={cert.link} className="cert-link" target="_blank" rel="noreferrer">
          Verify Credential <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="certificates" className="certificates-section section-padding">
      <div className="container" ref={ref}>
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2><span className="gradient-text">Certificates</span></h2>
        </motion.div>

        <div className="certificates-grid">
          {certificatesData.map((cert, index) => (
            <CertificateCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
