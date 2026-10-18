import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from '@/components/SocialIcons';
import { getAssetUrl } from '@/lib/utils';

export interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  readMoreText?: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: any; href: string }[];
  locationText: string;
  lang: string;
  setLang: (lang: string) => void;
  className?: string;
}

export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  readMoreText = 'Read More',
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  lang,
  setLang,
  className = '',
}: MinimalistHeroProps) => {
  return (
    <div className={`mnmlst-hero-container ${className}`} id="hero">
      {/* Top Header */}
      <header className="mnmlst-header">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mnmlst-brand"
        >
          <a href="#" style={{ textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span className="brand-badge">MB</span>
            <span style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.02em' }}>
              {logoText}
            </span>
          </a>
        </motion.div>

        {/* Desktop Nav Items + Lang Switcher + Island CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div className="mnmlst-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="mnmlst-nav-link"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Language Switcher Pill */}
          <div className="lang-toggle" role="group" aria-label="Language selection">
            <button
              type="button"
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={`lang-btn ${lang === 'ar' ? 'active' : ''}`}
              onClick={() => setLang('ar')}
            >
              عربي
            </button>
          </div>

          <a href="#contact" className="btn-island-primary" style={{ display: 'inline-flex' }}>
            <span>{lang === 'ar' ? 'تواصل معي' : "Let's Talk"}</span>
          </a>
        </div>
      </header>

      {/* Main 3-Column Content Area */}
      <div className="mnmlst-grid">
        {/* Left Column: Brief Bio & Read More */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mnmlst-left-text"
        >
          <p className="mnmlst-body-text">{mainText}</p>
          <a href={readMoreLink} className="mnmlst-readmore-link">
            <span>{readMoreText}</span>
            <ArrowDown size={14} style={{ display: 'inline-block', verticalAlign: 'middle' }} />
          </a>
        </motion.div>

        {/* Center Column: Iconic Yellow Disc + Transparent Cutout Person */}
        <div className="mnmlst-center-stage">
          {/* Bold Yellow / Gold Circle Backdrop */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mnmlst-circle"
            aria-hidden="true"
          />

          {/* Mohammed Bahumaidan Transparent PNG Cutout */}
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="mnmlst-cutout-img"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            onError={(e: any) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = getAssetUrl('/mohammed-bahumaidan.jpg');
            }}
          />
        </div>

        {/* Right Column: Giant Overlay Statement Typography ("less is more.") */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mnmlst-right-text"
        >
          <h1 className="mnmlst-giant-text">
            {overlayText.part1}
            <br />
            {overlayText.part2}
          </h1>
        </motion.div>
      </div>

      {/* Footer Elements */}
      <footer className="mnmlst-footer">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mnmlst-social-row"
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mnmlst-social-link"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mnmlst-location-text"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};
