import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../../data/portfolioData';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={15} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education & Qualifications</h2>
          <p className="section-subtitle">
            Grounding future engineering in strong academic excellence and theoretical computer science fundamentals.
          </p>
        </div>

        <div className="education-card-wrapper">
          <div className="education-main-card">
            
            {/* Top Bar with CGPA Callout */}
            <div className="edu-top-row">
              <div className="edu-institution-info">
                <div className="edu-icon-badge">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="edu-degree">{EDUCATION_DATA.degree}</h3>
                  <h4 className="edu-specialization">{EDUCATION_DATA.specialization}</h4>
                  <p className="edu-institution">{EDUCATION_DATA.institution}</p>
                </div>
              </div>

              <div className="edu-cgpa-badge-card">
                <div className="cgpa-ribbon">Academic Distinction</div>
                <div className="cgpa-number-wrap">
                  <span className="cgpa-value">{EDUCATION_DATA.cgpa}</span>
                  <span className="cgpa-scale">/ {EDUCATION_DATA.maxCgpa}</span>
                </div>
                <span className="cgpa-sub">Cumulative Grade Point Average</span>
              </div>
            </div>

            {/* Meta Row: Period & Location */}
            <div className="edu-meta-strip">
              <div className="edu-meta-item">
                <Calendar size={16} />
                <span>{EDUCATION_DATA.duration}</span>
              </div>
              <div className="edu-meta-item">
                <MapPin size={16} />
                <span>{EDUCATION_DATA.location}</span>
              </div>
              <div className="edu-meta-item status-pill">
                <span className="status-dot"></span>
                <span>Active Full-Time Student</span>
              </div>
            </div>

            {/* Coursework & Highlights Breakdown */}
            <div className="edu-details-grid">
              
              {/* Coursework */}
              <div className="edu-detail-col">
                <div className="detail-col-header">
                  <BookOpen size={18} className="col-icon" />
                  <h4 className="col-title">Key Core Coursework</h4>
                </div>
                <div className="coursework-chips-grid">
                  {EDUCATION_DATA.relevantCoursework.map((course, idx) => (
                    <div key={idx} className="course-chip">
                      <span className="chip-bullet">▪</span>
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="edu-detail-col">
                <div className="detail-col-header">
                  <Award size={18} className="col-icon" />
                  <h4 className="col-title">Academic Milestones</h4>
                </div>
                <ul className="edu-highlights-list">
                  {EDUCATION_DATA.academicHighlights.map((hl, idx) => (
                    <li key={idx} className="edu-hl-item">
                      <CheckCircle2 size={16} className="hl-check-icon" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
