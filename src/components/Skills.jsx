import React from 'react';
import { Cpu, Terminal, Layout, Database, GitBranch, Layers, Sparkles } from 'lucide-react';

export const Skills = ({ data, lang }) => {
  const { skills } = data;

  const categoryIcons = {
    backend: <Cpu size={20} color="#60a5fa" />,
    desktop: <Layout size={20} color="#c084fc" />,
    architecture: <Layers size={20} color="#34d399" />,
    databases: <Database size={20} color="#fbbf24" />,
  };

  return (
    <section className="skills-section" id="skills">
      <div className="ribbon-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow eyebrow-dark">
            <Sparkles size={14} />
            <span>{skills.badge[lang]}</span>
          </div>

          <h2 className="dark-heading">
            {skills.title[lang]}{' '}
            <span className="dark-heading-italic">
              {skills.titleAccent[lang]}
            </span>
          </h2>

          <p className="section-desc">
            {skills.subtitle[lang]}
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {skills.categories.map((cat) => (
            <div
              key={cat.id}
              className="skill-category-card"
              style={{
                boxShadow: `0 15px 35px rgba(0, 0, 0, 0.4), 0 0 25px ${cat.glowColor}`
              }}
            >
              <h3 className="skill-category-title">
                {categoryIcons[cat.id]}
                <span>{cat.name[lang]}</span>
              </h3>

              <div className="skill-items-list">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="skill-item-pill">
                    <div className="skill-item-top">
                      <span className="skill-item-name">{item.name}</span>
                      <span className="skill-item-level">{item.level}</span>
                    </div>
                    <div className="skill-item-desc">{item.desc[lang]}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
