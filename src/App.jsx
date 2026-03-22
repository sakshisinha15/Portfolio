import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Training from './components/Training';
import Achievements from './components/Achievements';
import TechnicalActivities from './components/TechnicalActivities';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import DataBackground from './components/DataBackground';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <DataBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Certificates />
          <Training />
          <Achievements />
          <TechnicalActivities />
          <Contact />
        </main>
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
