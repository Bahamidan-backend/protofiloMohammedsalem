import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';

export const Footer = ({ data, lang }) => {
  const { personal } = data;

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <span className="brand-badge" style={{ width: '1.75rem', height: '1.75rem', fontSize: '0.75rem' }}>
            MB
          </span>
          <div>
            <div style={{ fontWeight: '700', fontSize: '0.92rem', color: '#fff' }}>
              {personal.name[lang]}
            </div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
              {personal.title[lang]} • {personal.location[lang]}
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="footer-copy">
          {lang === 'ar'
            ? '© 2026 محمد سالم باحميدان — صُمم وطُوّر بمعايير هندسية متقدمة.'
            : '© 2026 Mohammed Salem Bahumaidan — Engineered with Clean Architecture & Passion.'}
        </div>

        {/* Social Links */}
        <div className="footer-social-links">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={16} />
          </a>

          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="GitHub"
          >
            <GitHubIcon size={16} />
          </a>

          <a
            href={personal.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
            aria-label="WhatsApp"
          >
            <MessageSquare size={16} />
          </a>

          <a
            href={`mailto:${personal.email}`}
            className="footer-social-icon"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};
