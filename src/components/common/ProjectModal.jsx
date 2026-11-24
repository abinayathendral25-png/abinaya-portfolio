import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Calendar, Tag } from 'lucide-react';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
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

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-meta">
            <span className="modal-category">{project.category}</span>
            <h2 className="modal-title">{project.title}</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body">
          
          {/* Overview */}
          <div className="modal-section">
            <h4 className="modal-section-title">Overview</h4>
            <p className="modal-description">{project.description || project.summary}</p>
          </div>

          {/* Key Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="modal-section">
              <h4 className="modal-section-title">Key Architectural Highlights</h4>
              <ul className="modal-highlights-list">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="modal-highlight-item">
                    <CheckCircle2 size={16} className="highlight-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div className="modal-section">
            <h4 className="modal-section-title">Technologies & Tools</h4>
            <div className="modal-tech-pills">
              {project.technologies.map((tech) => (
                <span key={tech} className="modal-tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Status and Repository Note */}
          <div className="modal-meta-box">
            <div className="meta-row">
              <span className="meta-label">Status:</span>
              <span className="meta-value status-badge">{project.status || 'Active Academic Work'}</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Code Repository:</span>
              <span className="meta-value">
                Available via verified GitHub profile (<code>abinayathendral25-png</code>)
              </span>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Github size={16} />
              <span>View GitHub Profile</span>
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
