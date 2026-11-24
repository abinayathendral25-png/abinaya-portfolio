import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Github, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILLS_DATA, FEATURED_PROJECTS, ACADEMIC_MINI_PROJECTS } from '../../data/portfolioData';
import './ResumeModal.css';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="resume-modal-window" onClick={(e) => e.stopPropagation()}>
        
        {/* Top Control Bar */}
        <div className="resume-ctrl-bar no-print">
          <div className="ctrl-title">Interactive Resume Document Preview</div>
          <div className="ctrl-buttons">
            <button className="btn btn-primary btn-sm" onClick={handlePrint}>
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>
            <button className="modal-close-icon-btn" onClick={onClose} aria-label="Close dialog">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable ATS-Style Resume Sheet */}
        <div className="resume-paper" id="printable-resume">
          
          {/* Header */}
          <header className="resume-paper-header">
            <h1 className="r-name">{PERSONAL_INFO.name}</h1>
            <div className="r-title">{PERSONAL_INFO.role} • {PERSONAL_INFO.educationDegree}</div>
            <div className="r-contact-line">
              <span>{PERSONAL_INFO.email}</span>
              <span>•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer">github.com/abinayathendral25-png</a>
              <span>•</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </header>

          {/* Professional Objective */}
          <section className="r-section">
            <h2 className="r-section-heading">Career Objective</h2>
            <p className="r-section-text">
              High-achieving undergraduate student in Computer Science and Engineering specializing in Artificial Intelligence & Machine Learning (<strong>9.47 CGPA</strong>) at Kalasalingam Academy of Research and Education. Strong foundational expertise in Python, Java, C, relational databases, and machine learning libraries. Seeking software engineering and development internships to contribute to real-world software applications and grow within collaborative engineering teams.
            </p>
          </section>

          {/* Education */}
          <section className="r-section">
            <h2 className="r-section-heading">Education</h2>
            <div className="r-entry">
              <div className="r-entry-header">
                <div>
                  <div className="r-entry-title">{EDUCATION_DATA.institution}</div>
                  <div className="r-entry-sub">{EDUCATION_DATA.degree} in {EDUCATION_DATA.specialization}</div>
                </div>
                <div className="r-entry-aside">
                  <div className="r-date">{EDUCATION_DATA.duration}</div>
                  <div className="r-cgpa-pill">CGPA: {EDUCATION_DATA.cgpa} / {EDUCATION_DATA.maxCgpa}</div>
                </div>
              </div>
              <div className="r-coursework-line">
                <strong>Relevant Coursework:</strong> Object-Oriented Programming (Java/Python), Data Structures & Algorithms, Database Management Systems (SQL), Foundations of AI & Machine Learning, Probability & Statistics.
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="r-section">
            <h2 className="r-section-heading">Technical Skills</h2>
            <div className="r-skills-table">
              <div className="r-skill-row">
                <span className="r-skill-cat">Programming Languages:</span>
                <span className="r-skill-list">Python, Java, C</span>
              </div>
              <div className="r-skill-row">
                <span className="r-skill-cat">Web Technologies:</span>
                <span className="r-skill-list">HTML, CSS, JavaScript (Basics), React / Vite</span>
              </div>
              <div className="r-skill-row">
                <span className="r-skill-cat">Databases:</span>
                <span className="r-skill-list">SQL, MongoDB</span>
              </div>
              <div className="r-skill-row">
                <span className="r-skill-cat">Data Science & ML:</span>
                <span className="r-skill-list">Pandas, NumPy, Matplotlib, Scikit-learn, Basic TensorFlow</span>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="r-section">
            <h2 className="r-section-heading">Featured & Academic Projects</h2>
            
            {/* Project 1 */}
            <div className="r-entry">
              <div className="r-entry-header">
                <div className="r-entry-title">Fraud Activity Monitor</div>
                <div className="r-entry-tech">Python, Scikit-learn, Pandas, NumPy, Matplotlib</div>
              </div>
              <ul className="r-bullet-list">
                <li>Developed an anomaly detection pipeline to identify suspicious financial transaction behaviors and potential fraud.</li>
                <li>Applied feature extraction, data preprocessing, and classification algorithms to detect anomalous distribution patterns.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="r-entry">
              <div className="r-entry-header">
                <div className="r-entry-title">Diabetes Detection System</div>
                <div className="r-entry-tech">Python, Machine Learning, Scikit-learn, Pandas</div>
              </div>
              <ul className="r-bullet-list">
                <li>Built a diagnostic predictive model evaluating clinical health indicators to forecast diabetes risk with supervised ML classifiers.</li>
                <li>Conducted exploratory data analysis, handled feature correlation matrices, and evaluated performance via precision and recall metrics.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="r-entry">
              <div className="r-entry-header">
                <div className="r-entry-title">Student Attendance Management System</div>
                <div className="r-entry-tech">Java, SQL, OOP, Relational Database Design</div>
              </div>
              <ul className="r-bullet-list">
                <li>Engineered an automated attendance tracking software for academic administration, replacing manual roll-calls.</li>
                <li>Designed normalized SQL tables with indexing to calculate attendance aggregates and flag low attendance percentages.</li>
              </ul>
            </div>

            {/* Project 4 */}
            <div className="r-entry">
              <div className="r-entry-header">
                <div className="r-entry-title">Personal Portfolio Website</div>
                <div className="r-entry-tech">React, Vite, CSS, JavaScript</div>
              </div>
              <ul className="r-bullet-list">
                <li>Architected an elegant, responsive developer portfolio with modular React components and light theme aesthetics.</li>
              </ul>
            </div>

            {/* Mini Projects */}
            <div className="r-entry">
              <div className="r-entry-header">
                <div className="r-entry-title">GUI Quiz Application, To-Do List Application & Registration Form</div>
                <div className="r-entry-tech">Python, Java, JavaScript, HTML, CSS</div>
              </div>
              <ul className="r-bullet-list">
                <li>Constructed interactive desktop and browser mini applications focusing on event handling, DOM manipulation, and input validations.</li>
              </ul>
            </div>

            {/* Farm2Home Concept Note */}
            <div className="r-entry">
              <div className="r-entry-header">
                <div className="r-entry-title">Farm2Home (Direct Farm-to-Consumer Platform)</div>
                <div className="r-entry-tech">Project Concept / Architecture Proposal</div>
              </div>
              <ul className="r-bullet-list">
                <li>Authoring a system proposal connecting farmers directly with consumers using direct logistics and AI-driven harvest demand forecasting.</li>
              </ul>
            </div>

          </section>

          {/* Academic Highlights */}
          <section className="r-section">
            <h2 className="r-section-heading">Academic Distinction</h2>
            <ul className="r-bullet-list">
              <li>Secured an outstanding <strong>9.47 CGPA</strong> across foundational engineering coursework at Kalasalingam Academy of Research and Education.</li>
              <li>Active learner continuously solving programming challenges across Python, Java, and C.</li>
            </ul>
          </section>

        </div>

      </div>
    </div>
  );
}
