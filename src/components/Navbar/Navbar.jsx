import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Github, Mail, FileText, Code2 } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Featured Projects', href: '#featured-projects' },
  { name: 'Mini Projects', href: '#mini-projects' },
  { name: 'Farm2Home', href: '#concept' },
  { name: 'Education', href: '#education' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link spy
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="navbar-brand" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
          <div className="brand-monogram">
            <span>AT</span>
          </div>
          <div className="brand-text">
            <span className="brand-name">Abinaya Thendral</span>
            <span className="brand-tag">B.Tech CSE (AI & ML)</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-nav desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && <span className="active-dot" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button */}
        <div className="navbar-actions">
          <button className="btn btn-secondary nav-resume-btn" onClick={onOpenResume} title="Preview Resume">
            <FileText size={16} />
            <span>Resume</span>
          </button>
          <a
            href="#contact"
            className="btn btn-primary nav-contact-btn"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
          >
            <span>Let's Connect</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-menu-actions">
            <button className="btn btn-secondary w-full" onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}>
              <FileText size={16} />
              <span>Preview Resume</span>
            </button>
            <a
              href="#contact"
              className="btn btn-primary w-full"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
            >
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
