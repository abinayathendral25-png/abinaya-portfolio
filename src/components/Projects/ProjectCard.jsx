import React from 'react';
import { ExternalLink, Github, ArrowRight, ShieldCheck, Activity, Users, Globe, HelpCircle, CheckSquare, ClipboardCheck } from 'lucide-react';

const projectIcons = {
  'fraud-activity-monitor': <ShieldCheck size={24} />,
  'diabetes-detection': <Activity size={24} />,
  'student-attendance-management': <Users size={24} />,
  'personal-portfolio-website': <Globe size={24} />,
  'gui-quiz-app': <HelpCircle size={22} />,
  'todo-list-app': <CheckSquare size={22} />,
  'registration-form': <ClipboardCheck size={22} />
};

export default function ProjectCard({ project, onSelect, isMini = false }) {
  const icon = projectIcons[project.id] || <Globe size={22} />;

  return (
    <div className={`project-card ${isMini ? 'mini-card' : 'featured-card'}`}>
      
      {/* Top Banner & Category */}
      <div className="card-top">
        <div className="card-icon-wrap">
          {icon}
        </div>
        <div className="card-meta">
          <span className="card-category">{project.category}</span>
          {project.status && (
            <span className="card-status-badge">{project.status}</span>
          )}
        </div>
      </div>

      {/* Title & Summary */}
      <div className="card-content">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-summary">{project.summary}</p>
      </div>

      {/* Tech Tags */}
      <div className="card-tech-tags">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      {/* Card Action Footer */}
      <div className="card-actions">
        <button
          className="btn-card-details"
          onClick={() => onSelect(project)}
          title="View detailed architecture & highlights"
        >
          <span>View Details</span>
          <ArrowRight size={15} />
        </button>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-card-github"
            title="View developer profile on GitHub"
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={17} />
            <span>GitHub</span>
          </a>
        )}
      </div>

    </div>
  );
}
