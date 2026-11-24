import React from 'react';
import { Sparkles, Code } from 'lucide-react';
import { FEATURED_PROJECTS } from '../../data/portfolioData';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function FeaturedProjects({ onSelectProject }) {
  return (
    <section id="featured-projects" className="section projects-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Core Technical Work</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Demonstrating applied machine learning, practical data analysis, and scalable software application architecture.
          </p>
        </div>

        <div className="projects-grid">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
              isMini={false}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
