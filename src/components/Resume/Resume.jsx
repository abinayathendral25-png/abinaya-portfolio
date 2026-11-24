import React from 'react';
import { FileText, Download, Eye, Award, CheckCircle, ExternalLink, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILLS_DATA } from '../../data/portfolioData';
import './Resume.css';

export default function Resume({ onOpenPreview, onTriggerToast }) {
  const handleDownloadPlaceholder = () => {
    // Functional action: generates printable resume or triggers informative modal/toast
    window.print();
  };

  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-badge">
            <FileText size={15} />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="section-title">Resume & Professional Profile</h2>
          <p className="section-subtitle">
            A comprehensive overview of academic credentials, technical capabilities, and software project experience.
          </p>
        </div>

        <div className="resume-container-card">
          
          {/* Card Left: Highlights overview */}
          <div className="resume-summary-pane">
            <span className="resume-doc-tag">Candidate Profile</span>
            <h3 className="resume-candidate-name">{PERSONAL_INFO.name}</h3>
            <p className="resume-role-text">{PERSONAL_INFO.role} • {PERSONAL_INFO.educationDegree}</p>
            
            <p className="resume-brief">
              Undergraduate computer science student with a <strong>9.47 CGPA</strong> at Kalasalingam Academy of Research and Education. Strong core skills across Python, Java, C, relational databases, and machine learning libraries with practical project delivery.
            </p>

            <div className="resume-key-points">
              <div className="rk-item">
                <CheckCircle size={16} className="rk-icon" />
                <span>Specialization in Artificial Intelligence & Machine Learning</span>
              </div>
              <div className="rk-item">
                <CheckCircle size={16} className="rk-icon" />
                <span>Hands-on implementations in ML, desktop GUIs & web apps</span>
              </div>
              <div className="rk-item">
                <CheckCircle size={16} className="rk-icon" />
                <span>Verified academic performance with 9.47 CGPA standing</span>
              </div>
            </div>

            {/* Placeholder Indicator */}
            <div className="resume-placeholder-note">
              <AlertCircle size={16} />
              <span>Resume PDF download is configured with clean printable view mode.</span>
            </div>

            {/* Buttons */}
            <div className="resume-cta-row">
              <button className="btn btn-primary" onClick={onOpenPreview}>
                <Eye size={18} />
                <span>Preview Interactive Resume</span>
              </button>
              <button className="btn btn-secondary" onClick={handleDownloadPlaceholder} title="Print or Save Resume as PDF">
                <Download size={18} />
                <span>Print / Save as PDF</span>
              </button>
            </div>
          </div>

          {/* Card Right: Mini Resume Document Sheet Graphic */}
          <div className="resume-sheet-preview" onClick={onOpenPreview}>
            <div className="sheet-watermark">PREVIEW</div>
            <div className="sheet-header">
              <div className="sheet-name">{PERSONAL_INFO.name}</div>
              <div className="sheet-sub">{PERSONAL_INFO.email} • Tamil Nadu, India</div>
            </div>

            <div className="sheet-section">
              <div className="sheet-section-title">EDUCATION</div>
              <div className="sheet-edu-row">
                <strong>{EDUCATION_DATA.institution}</strong>
                <span>{EDUCATION_DATA.duration}</span>
              </div>
              <div className="sheet-degree-sub">
                {EDUCATION_DATA.specialization} — <strong>CGPA: {EDUCATION_DATA.cgpa}</strong>
              </div>
            </div>

            <div className="sheet-section">
              <div className="sheet-section-title">TECHNICAL SKILLS</div>
              <div className="sheet-skills-snippet">
                Python, Java, C, HTML, CSS, JavaScript, SQL, MongoDB, Pandas, NumPy, Scikit-learn, TensorFlow
              </div>
            </div>

            <div className="sheet-section">
              <div className="sheet-section-title">CORE PROJECTS</div>
              <ul className="sheet-proj-list">
                <li>Fraud Activity Monitor (Python, Scikit-learn)</li>
                <li>Diabetes Detection System (Python, ML)</li>
                <li>Student Attendance Management System (Java, SQL)</li>
              </ul>
            </div>

            <div className="sheet-click-hint">
              <Eye size={14} />
              <span>Click to view full interactive resume</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
