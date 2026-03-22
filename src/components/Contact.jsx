import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://formsubmit.co/ajax/sakshisinha2854@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: "New Portfolio Contact Message!"
        })
      });
      alert(`Thanks for reaching out, ${formData.name}! I will get back to you soon.`);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert("Oops! There was a problem submitting your form");
    }
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container" ref={ref}>
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="glow-text-blue">CONTACT ME</h2>
          <div className="header-line"></div>
        </motion.div>

        <div className="contact-container">
          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message <Send size={18} />
            </button>
          </motion.form>

          <motion.div 
            className="contact-socials"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="mailto:sakshisinha2854@gmail.com" className="social-card">
              <div className="social-card-icon"><Mail size={24} /></div>
              <div className="social-card-info">
                <h4>Email</h4>
                <p>sakshisinha2854@gmail.com</p>
              </div>
            </a>
            <a href="tel:+918873012448" className="social-card">
              <div className="social-card-icon" style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent-purple)' }}><Phone size={24} /></div>
              <div className="social-card-info">
                <h4>Phone</h4>
                <p>+91-8873012448</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/sakshisinha1/" target="_blank" rel="noreferrer" className="social-card">
              <div className="social-card-icon"><Linkedin size={24} /></div>
              <div className="social-card-info">
                <h4>LinkedIn</h4>
                <p>Connect with me</p>
              </div>
            </a>
            <a href="https://github.com/sakshisinha15" target="_blank" rel="noreferrer" className="social-card">
              <div className="social-card-icon" style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent-purple)' }}><Github size={24} /></div>
              <div className="social-card-info">
                <h4>GitHub</h4>
                <p>View my repositories</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
