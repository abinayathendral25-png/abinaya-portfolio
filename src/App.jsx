import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import FeaturedProjects from './components/Projects/FeaturedProjects';
import AcademicProjects from './components/Projects/AcademicProjects';
import ProjectConcept from './components/Projects/ProjectConcept';
import Education from './components/Education/Education';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ProjectModal from './components/common/ProjectModal';
import ResumeModal from './components/common/ResumeModal';
import { CheckCircle2 } from 'lucide-react';
import './App.css';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  const addToast = (message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  return (
    <div className="app-wrapper">
      {/* Ambient background glows for soft sky-blue light theme */}
      <div className="ambient-bg-glow" aria-hidden="true">
        <div className="ambient-circle-1" />
        <div className="ambient-circle-2" />
        <div className="ambient-circle-3" />
      </div>

      {/* Main Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Sections */}
      <main>
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <About />
        <Skills />
        <FeaturedProjects onSelectProject={(proj) => setSelectedProject(proj)} />
        <AcademicProjects onSelectProject={(proj) => setSelectedProject(proj)} />
        <ProjectConcept />
        <Education />
        <Resume 
          onOpenPreview={() => setResumeModalOpen(true)} 
          onTriggerToast={addToast}
        />
        <Contact onTriggerToast={addToast} />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* Interactive Modals */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {resumeModalOpen && (
        <ResumeModal onClose={() => setResumeModalOpen(false)} />
      )}

      {/* Toast Notifications */}
      {toasts.length > 0 && (
        <div className="toast-container" role="status" aria-live="polite">
          {toasts.map(toast => (
            <div key={toast.id} className="toast-message">
              <CheckCircle2 size={18} color="#0284c7" />
              <span>{toast.message}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
