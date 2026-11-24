import React from 'react';
import { Bookmark, Code2 } from 'lucide-react';
import { ACADEMIC_MINI_PROJECTS } from '../../data/portfolioData';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function AcademicProjects({ onSelectProject }) {
  return (
    <section id="mini-projects" className="section mini-projects-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-badge">
            <Bookmark size={14} />
            <span>Academic Mini Projects</span>
          </div>
          <h2 className="section-title">Foundational & Coursework Projects</h2>
          <p className="section-subtitle">
            Hands-on implementations reinforcing core concepts in object-oriented programming, graphical user interfaces, and client-side web technologies.
          </p>
        </div>

        <div className="mini-projects-grid">
          {ACADEMIC_MINI_PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
              isMini={true}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
