import React from 'react';
import { User, GraduationCap, Brain, Code, Target, Sparkles, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-badge">
            <User size={14} />
            <span>About Me</span>
          </div>
          <h2 className="section-title">Driven by Curiosity & Systematic Engineering</h2>
          <p className="section-subtitle">
            Combining strong academic principles with hands-on development in computer science, software engineering, and artificial intelligence.
          </p>
        </div>

        <div className="about-grid">
          
          {/* Main Story Narrative */}
          <div className="about-narrative">
            <div className="narrative-card">
              <h3 className="narrative-heading">
                Hello! I'm <span className="text-navy">{PERSONAL_INFO.name}</span>
              </h3>
              
              {PERSONAL_INFO.bio.map((paragraph, idx) => (
                <p key={idx} className="narrative-paragraph">
                  {paragraph}
                </p>
              ))}

              <div className="key-attributes-row">
                <div className="attribute-item">
                  <div className="attribute-icon-box">
                    <Target size={20} />
                  </div>
                  <div>
                    <h4 className="attribute-title">Problem Solver</h4>
                    <p className="attribute-desc">Applying structured algorithmic thinking across Python, Java, and C.</p>
                  </div>
                </div>

                <div className="attribute-item">
                  <div className="attribute-icon-box">
                    <Brain size={20} />
                  </div>
                  <div>
                    <h4 className="attribute-title">AI & ML Enthusiast</h4>
                    <p className="attribute-desc">Working with Scikit-learn, Pandas, and data modeling to solve real problems.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Highlights & Snapshot Cards */}
          <div className="about-side-cards">
            
            <div className="snapshot-card highlight-glow">
              <div className="snapshot-header">
                <div className="snapshot-icon">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <span className="snapshot-label">Academic Excellence</span>
                  <h4 className="snapshot-value">9.47 CGPA</h4>
                </div>
              </div>
              <p className="snapshot-detail">
                Consistently top academic performance at <strong>{PERSONAL_INFO.college}</strong> in <strong>{PERSONAL_INFO.educationDegree}</strong> (2024–2028).
              </p>
            </div>

            <div className="snapshot-card">
              <div className="snapshot-header">
                <div className="snapshot-icon sky-bg">
                  <Code size={24} />
                </div>
                <div>
                  <span className="snapshot-label">Core Specialization</span>
                  <h4 className="snapshot-value">Software & AI</h4>
                </div>
              </div>
              <p className="snapshot-detail">
                Focused on designing robust systems, machine learning pipelines (Scikit-learn, Pandas), and modern web interfaces.
              </p>
            </div>

            <div className="snapshot-card">
              <div className="snapshot-header">
                <div className="snapshot-icon teal-bg">
                  <BookOpen size={24} />
                </div>
                <div>
                  <span className="snapshot-label">Approach</span>
                  <h4 className="snapshot-value">Rigorous Foundations</h4>
                </div>
              </div>
              <p className="snapshot-detail">
                Grounding practical software solutions in data structures, relational database management, and object-oriented principles.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
