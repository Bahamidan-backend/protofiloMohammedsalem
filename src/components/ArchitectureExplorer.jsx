import React, { useState } from 'react';
import { Layers, Terminal, Check, Code2, ChevronRight, Cpu } from 'lucide-react';

export const ArchitectureExplorer = ({ data, lang }) => {
  const { cleanArchitecture } = data;
  const [activeLayerId, setActiveLayerId] = useState(cleanArchitecture.layers[0].id);

  const activeLayer = cleanArchitecture.layers.find((l) => l.id === activeLayerId) || cleanArchitecture.layers[0];

  return (
    <section className="architecture-section" id="architecture">
      <div className="ribbon-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow eyebrow-dark">
            <Layers size={14} />
            <span>{cleanArchitecture.badge[lang]}</span>
          </div>

          <h2 className="dark-heading">
            {cleanArchitecture.title[lang]}{' '}
            <span className="dark-heading-italic">
              {cleanArchitecture.titleAccent[lang]}
            </span>
          </h2>

          <p className="section-desc">
            {cleanArchitecture.description[lang]}
          </p>
        </div>

        {/* Interactive Explorer Grid */}
        <div className="arch-explorer-container">
          {/* Layer Cards List */}
          <div className="arch-layers-list">
            {cleanArchitecture.layers.map((layer) => {
              const isActive = layer.id === activeLayerId;
              return (
                <div
                  key={layer.id}
                  className={`arch-layer-card ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveLayerId(layer.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveLayerId(layer.id);
                    }
                  }}
                >
                  <div
                    className="arch-layer-indicator"
                    style={{ backgroundColor: layer.color }}
                  />

                  <div className="arch-layer-top">
                    <span className="arch-layer-name">{layer.name[lang]}</span>
                    <span
                      className="arch-layer-badge"
                      style={{
                        backgroundColor: `${layer.color}18`,
                        color: layer.color,
                        border: `1px solid ${layer.color}40`,
                      }}
                    >
                      {layer.badge}
                    </span>
                  </div>

                  <div className="arch-layer-role">{layer.role[lang]}</div>
                </div>
              );
            })}
          </div>

          {/* Code & Architectural Inspector View */}
          <div className="arch-code-display">
            {/* Top Mac/IDE Window Bar */}
            <div className="arch-code-topbar">
              <div className="window-dots">
                <span className="window-dot dot-red" />
                <span className="window-dot dot-yellow" />
                <span className="window-dot dot-green" />
              </div>
              <div className="code-title">
                {activeLayer.name[lang]} — Clean Architecture Node
              </div>
              <Cpu size={14} color="#60a5fa" />
            </div>

            {/* Explanation Body */}
            <div className="arch-details-body">
              <p className="arch-details-text">{activeLayer.details[lang]}</p>

              <div className="arch-highlights-grid">
                {activeLayer.highlights.map((h, idx) => (
                  <div key={idx} className="arch-highlight-box">
                    <div className="arch-highlight-label">{h.label[lang]}</div>
                    <div className="arch-highlight-val">{h.val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live C# Code Snippet */}
            <pre className="arch-code-editor">
              <code>{activeLayer.codeSnippet}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
