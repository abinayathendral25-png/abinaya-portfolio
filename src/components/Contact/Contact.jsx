import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, MapPin, MessageSquare, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import './Contact.css';

export default function Contact({ onTriggerToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      if (onTriggerToast) {
        onTriggerToast('Email copied to clipboard!');
      }
      setTimeout(() => setCopiedEmail(false), 3000);
    } catch (err) {
      console.error('Failed to copy email', err);
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please add a subject.';
    if (!formData.message.trim()) errs.message = 'Please write your message.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable delivery process
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onTriggerToast) {
        onTriggerToast('Message received! Thank you for reaching out.');
      }
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 900);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-badge">
            <Mail size={15} />
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">Let's Connect & Collaborate</h2>
          <p className="section-subtitle">
            I am always open to exploring software engineering opportunities, internships, academic collaborations, and project discussions.
          </p>
        </div>

        <div className="contact-main-grid">
          
          {/* Left Column: Direct channels and info cards */}
          <div className="contact-info-column">
            
            <div className="contact-card email-highlight-card">
              <div className="contact-card-icon sky-glow">
                <Mail size={24} />
              </div>
              <div className="contact-card-body">
                <span className="contact-card-label">Direct Email</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="contact-email-link">
                  {PERSONAL_INFO.email}
                </a>
                <p className="contact-card-note">Primary channel for inquiries and developer opportunities.</p>
              </div>
              <button
                className="btn-copy-action"
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                aria-label="Copy email"
              >
                {copiedEmail ? <Check size={18} className="text-green" /> : <Copy size={18} />}
                <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon dark-glow">
                <Github size={24} />
              </div>
              <div className="contact-card-body">
                <span className="contact-card-label">GitHub Profile</span>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-sublink"
                >
                  github.com/abinayathendral25-png
                </a>
                <p className="contact-card-note">Explore open-source repositories and coding activity.</p>
              </div>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-external-action"
              >
                Visit
              </a>
            </div>

            <div className="contact-card placeholder-card">
              <div className="contact-card-icon placeholder-glow">
                <Linkedin size={24} />
              </div>
              <div className="contact-card-body">
                <div className="placeholder-label-wrap">
                  <span className="contact-card-label">LinkedIn Profile</span>
                  <span className="placeholder-tag">Placeholder</span>
                </div>
                <span className="contact-sublink text-muted">
                  linkedin.com/in/placeholder
                </span>
                <p className="contact-card-note">Available upon direct request for verified recruiters.</p>
              </div>
            </div>

            <div className="contact-card location-card">
              <div className="contact-card-icon location-glow">
                <MapPin size={24} />
              </div>
              <div className="contact-card-body">
                <span className="contact-card-label">Location</span>
                <span className="contact-sublink text-navy">
                  {PERSONAL_INFO.location}
                </span>
                <p className="contact-card-note">Tamil Nadu, India • Open to on-site and remote developer roles.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Functional Contact Message Form */}
          <div className="contact-form-column">
            <div className="form-wrapper-card">
              <h3 className="form-card-title">Send a Direct Message</h3>
              <p className="form-card-subtitle">Fill out the form below and I will get back to you promptly.</p>

              {isSubmitted && (
                <div className="form-success-banner">
                  <Check size={20} className="success-icon" />
                  <div>
                    <h5 className="success-title">Message Delivered!</h5>
                    <p className="success-text">Thank you, {PERSONAL_INFO.name} has received your inquiry.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="interactive-contact-form">
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name <span className="required-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className={`form-input ${errors.name ? 'input-error' : ''}`}
                    />
                    {errors.name && <span className="field-error-text">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Your Email <span className="required-star">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@example.com"
                      className={`form-input ${errors.email ? 'input-error' : ''}`}
                    />
                    {errors.email && <span className="field-error-text">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject <span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Internship Opportunity / Collaboration"
                    className={`form-input ${errors.subject ? 'input-error' : ''}`}
                  />
                  {errors.subject && <span className="field-error-text">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="required-star">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Abinaya, I would like to discuss..."
                    className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                  />
                  {errors.message && <span className="field-error-text">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-submit-full"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
