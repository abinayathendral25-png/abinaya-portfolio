import React, { useState } from 'react';
import { 
  Wrench, 
  Code2, 
  Coffee, 
  Cpu, 
  FileCode, 
  Palette, 
  Sparkles, 
  Database, 
  Server, 
  Table, 
  Binary, 
  BarChart3, 
  Workflow, 
  BrainCircuit,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { SKILLS_DATA } from '../../data/portfolioData';
import './Skills.css';

// Icon map helper
const iconMap = {
  Code2: <Code2 size={22} />,
  Coffee: <Coffee size={22} />,
  Cpu: <Cpu size={22} />,
  FileCode: <FileCode size={22} />,
  Palette: <Palette size={22} />,
  Sparkles: <Sparkles size={22} />,
  Database: <Database size={22} />,
  Server: <Server size={22} />,
  Table: <Table size={22} />,
  Binary: <Binary size={22} />,
  BarChart3: <BarChart3 size={22} />,
  Workflow: <Workflow size={22} />,
  BrainCircuit: <BrainCircuit size={22} />
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...SKILLS_DATA.map(cat => cat.category)];

  const filteredCategories = activeCategory === 'All' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(cat => cat.category === activeCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-badge">
            <Wrench size={14} />
            <span>Technical Skills</span>
          </div>
          <h2 className="section-title">Core Competencies & Toolset</h2>
          <p className="section-subtitle">
            A balanced foundation spanning system programming, full-stack web basics, database management, and applied data science & machine learning.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Category Blocks */}
        <div className="skills-grid-container">
          {filteredCategories.map((group) => (
            <div key={group.category} className="skill-group-card">
              
              <div className="group-header">
                <div className="group-title-wrap">
                  <Layers size={18} className="group-icon" />
                  <h3 className="group-title">{group.category}</h3>
                </div>
                <p className="group-desc">{group.description}</p>
              </div>

              <div className="skills-items-grid">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-item-card">
                    <div className="skill-icon-wrap">
                      {iconMap[skill.icon] || <Code2 size={22} />}
                    </div>

                    <div className="skill-info">
                      <div className="skill-name-row">
                        <h4 className="skill-name">{skill.name}</h4>
                        <span className={`skill-level-badge level-${skill.level.toLowerCase()}`}>
                          {skill.level}
                        </span>
                      </div>
                      <span className="skill-tag">{skill.tag}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Assurance Note */}
        <div className="skills-footnote">
          <CheckCircle2 size={18} className="footnote-icon" />
          <span>
            Continuously advancing practical proficiency through academic coursework, laboratory implementations, and independent software development.
          </span>
        </div>

      </div>
    </section>
  );
}
