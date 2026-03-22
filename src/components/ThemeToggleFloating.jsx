import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggleFloating = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      style={{
        position: 'fixed',
        bottom: '30px',
        left: '30px',
        background: 'var(--card-bg)',
        color: 'var(--text-primary)',
        width: '55px',
        height: '55px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid var(--glass-border)',
        cursor: 'pointer',
        zIndex: 1000,
        boxShadow: 'var(--card-shadow)',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.borderColor = 'var(--accent-purple)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.borderColor = 'var(--glass-border)';
      }}
      aria-label="Toggle Theme"
      title="Switch to Light/Dark Mode"
    >
      {isDarkMode ? <Sun size={28} color="#f59e0b" /> : <Moon size={28} color="#6366f1" />}
    </button>
  );
};

export default ThemeToggleFloating;
