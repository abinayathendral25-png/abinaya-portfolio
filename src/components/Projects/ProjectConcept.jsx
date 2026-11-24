import React from 'react';
import { Sprout, Lightbulb, TrendingUp, Layers, CheckCircle2, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { PROJECT_CONCEPT } from '../../data/portfolioData';
import './ProjectConcept.css';

export default function ProjectConcept() {
  return (
    <section id="concept" className="section concept-section">
      <div className="container">
        
        {/* Concept Top Badge & Heading */}
        <div className="section-header">
          <div className="section-badge concept-badge">
            <Sprout size={15} />
            <span>Project Concept & Future Initiative</span>
          </div>
          <h2 className="section-title">
            Farm2Home: <span className="concept-accent-text">Direct Farm-to-Consumer</span> Platform
          </h2>
          <p className="section-subtitle">
            A planned engineering initiative designed to eliminate exploitative agricultural middlemen, empower smallholders with direct market access, and optimize supply-chain freshness through AI-assisted demand forecasting.
          </p>
        </div>

        {/* Concept Notice Box */}
        <div className="concept-notice-banner">
          <div className="notice-icon">
            <Lightbulb size={22} />
          </div>
          <div className="notice-content">
            <h4 className="notice-title">Development Status: Conceptual Blueprint & Architectural Planning</h4>
            <p className="notice-text">
              <strong>Farm2Home</strong> is an ongoing conceptual project proposal and architectural design initiative under research, focusing on socio-economic impact through computational supply-chain optimization.
            </p>
          </div>
          <span className="concept-tag-status">Concept Only</span>
        </div>

        {/* Problem vs Solution Split */}
        <div className="concept-split-grid">
          
          <div className="concept-card problem-card">
            <div className="concept-card-header">
              <span className="card-phase-pill problem-pill">The Challenge</span>
              <h3 className="concept-card-title">Fragmented Agricultural Supply Chains</h3>
            </div>
            <p className="concept-card-desc">
              {PROJECT_CONCEPT.problemStatement}
            </p>
            <ul className="concept-points-list">
              <li>High markups incurred at intermediate broker levels.</li>
              <li>Unpredictable crop demand causing extensive post-harvest spoilage.</li>
              <li>Lack of transparent pricing data for regional farmers.</li>
            </ul>
          </div>

          <div className="concept-card solution-card">
            <div className="concept-card-header">
              <span className="card-phase-pill solution-pill">The Proposed Solution</span>
              <h3 className="concept-card-title">Decentralized Direct Marketplace</h3>
            </div>
            <p className="concept-card-desc">
              {PROJECT_CONCEPT.proposedSolution}
            </p>
            <ul className="concept-points-list">
              <li>Direct consumer pre-orders linking residential clusters with regional farms.</li>
              <li>AI forecasting to predict weekly household demand patterns.</li>
              <li>Fair-trade pricing model ensuring direct margin retention for growers.</li>
            </ul>
          </div>

        </div>

        {/* Proposed Architecture Pillars */}
        <div className="pillars-wrapper">
          <h3 className="pillars-heading">Planned System Pillars</h3>
          
          <div className="pillars-grid">
            {PROJECT_CONCEPT.plannedArchitecture.map((arch, idx) => (
              <div key={idx} className="pillar-item">
                <div className="pillar-number">0{idx + 1}</div>
                <h4 className="pillar-title">{arch.pillar}</h4>
                <p className="pillar-desc">{arch.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Planned Technology Intent */}
        <div className="concept-tech-footer">
          <div className="tech-intent-label">
            <Cpu size={16} />
            <span>Planned Tech Stack & Tools:</span>
          </div>
          <div className="tech-intent-pills">
            {PROJECT_CONCEPT.techStackIntent.map((tech) => (
              <span key={tech} className="intent-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
