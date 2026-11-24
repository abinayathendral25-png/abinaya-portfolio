import React from 'react';
import { ArrowRight, Github, Mail, FileText, Sparkles, Award, MapPin, Terminal, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import './Hero.css';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        
        {/* Left Column: Bio & Calls to Action */}
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={14} className="hero-sparkle-icon" />
            <span>Aspiring Software Developer • AI & ML</span>
          </div>

          <h1 className="hero-name">
            Hi, I'm <span className="text-gradient">{PERSONAL_INFO.name}</span>
          </h1>

          <p className="hero-subtitle">
            {PERSONAL_INFO.role} & Undergraduate Student in <span className="highlight-text">{PERSONAL_INFO.educationDegree}</span> at <span className="highlight-text">{PERSONAL_INFO.college}</span>.
          </p>

          <p className="hero-tagline">
            {PERSONAL_INFO.tagline}
          </p>

          {/* Quick highlight metrics pill row */}
          <div className="hero-pills">
            <div className="hero-pill">
              <Award size={15} className="pill-icon" />
              <span><strong>{PERSONAL_INFO.cgpa}</strong> CGPA</span>
            </div>
            <div className="hero-pill">
              <MapPin size={15} className="pill-icon" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="hero-pill">
              <span className="online-indicator"></span>
              <span>Available for Internships</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <a href="#featured-projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>
            <button className="btn btn-secondary" onClick={onOpenResume}>
              <FileText size={18} />
              <span>Resume</span>
            </button>
            <a href="#contact" className="btn btn-outline">
              <Mail size={18} />
              <span>Contact</span>
            </a>
          </div>

          {/* Social Proof & Direct Profile Links */}
          <div className="hero-social-strip">
            <span className="social-label">Connect:</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="GitHub Profile"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="social-link"
              title="Email Me"
            >
              <Mail size={18} />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Developer Card / Visual Presentation */}
        <div className="hero-visual">
          <div className="dev-card">
            {/* Header / macOS style window controls */}
            <div className="dev-card-header">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="window-title">
                <Terminal size={13} />
                <span>developer_profile.py</span>
              </div>
              <div className="window-badge">Python 3.12</div>
            </div>

            {/* Code Body */}
            <div className="dev-card-body">
              <pre className="code-block">
                <code>
                  <span className="code-keyword">class</span> <span className="code-class">SoftwareDeveloper</span>:{"\n"}
                  {"    "}<span className="code-keyword">def</span> <span className="code-function">__init__</span>(<span className="code-self">self</span>):{"\n"}
                  {"        "}<span className="code-self">self</span>.name = <span className="code-string">"{PERSONAL_INFO.name}"</span>{"\n"}
                  {"        "}<span className="code-self">self</span>.degree = <span className="code-string">"{PERSONAL_INFO.educationDegree}"</span>{"\n"}
                  {"        "}<span className="code-self">self</span>.institution = <span className="code-string">"KARE"</span>{"\n"}
                  {"        "}<span className="code-self">self</span>.cgpa = <span className="code-number">{PERSONAL_INFO.cgpa}</span>{"\n"}
                  {"        "}<span className="code-self">self</span>.core_focus = [
                  {"\n            "}<span className="code-string">"Machine Learning"</span>,
                  {"\n            "}<span className="code-string">"Full Stack Web"</span>,
                  {"\n            "}<span className="code-string">"Clean Code"</span>
                  {"\n        "}]
                  {"\n\n"}
                  {"    "}<span className="code-keyword">def</span> <span className="code-function">current_objective</span>(<span className="code-self">self</span>):{"\n"}
                  {"        "}<span className="code-keyword">return</span> <span className="code-string">"Seeking Summer 2025/2026 Developer Internship"</span>
                </code>
              </pre>
            </div>

            {/* Bottom Status Panel */}
            <div className="dev-card-footer">
              <div className="status-item">
                <CheckCircle2 size={14} className="status-icon" />
                <span>Status: Academic Excellence & Active Building</span>
              </div>
            </div>
          </div>

          {/* Floating Accents */}
          <div className="floating-badge badge-1">
            <span className="badge-symbol">⚡</span>
            <div className="badge-text">
              <span className="badge-strong">9.47 CGPA</span>
              <span className="badge-sub">Academic Standing</span>
            </div>
          </div>

          <div className="floating-badge badge-2">
            <span className="badge-symbol">🤖</span>
            <div className="badge-text">
              <span className="badge-strong">AI & ML</span>
              <span className="badge-sub">B.Tech Specialization</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
