import React from 'react';
import { ArrowUp, Github, Mail, Linkedin, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import './Footer.css';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        
        {/* Top Footer Row */}
        <div className="footer-top">
          
          <div className="footer-brand">
            <div className="footer-monogram">AT</div>
            <div>
              <h4 className="footer-name">{PERSONAL_INFO.name}</h4>
              <p className="footer-role">{PERSONAL_INFO.role} • {PERSONAL_INFO.educationDegree}</p>
              <p className="footer-institution">{PERSONAL_INFO.college}</p>
            </div>
          </div>

          <div className="footer-nav-groups">
            <div className="footer-nav-col">
              <span className="footer-col-title">Navigation</span>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Technical Skills</a></li>
                <li><a href="#education">Education</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <span className="footer-col-title">Projects</span>
              <ul className="footer-links">
                <li><a href="#featured-projects">Featured Projects</a></li>
                <li><a href="#mini-projects">Academic Mini Projects</a></li>
                <li><a href="#concept">Farm2Home Concept</a></li>
                <li><button className="footer-link-btn" onClick={onOpenResume}>Curriculum Vitae</button></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <span className="footer-col-title">Connect</span>
              <ul className="footer-links">
                <li>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer">
                    <Github size={14} />
                    <span>GitHub Profile</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${PERSONAL_INFO.email}`}>
                    <Mail size={14} />
                    <span>Send Email</span>
                  </a>
                </li>
                <li>
                  <span className="footer-placeholder-link">
                    <Linkedin size={14} />
                    <span>LinkedIn (Placeholder)</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, Vite & Modular CSS.
          </p>

          <button className="btn-back-to-top" onClick={scrollToTop} aria-label="Scroll back to top">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
