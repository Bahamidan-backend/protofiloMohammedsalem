import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Navbar = ({ lang, setLang }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#about', label: { en: 'About', ar: 'عني' } },
    { href: '#skills', label: { en: 'Skills', ar: 'المهارات' } },
    { href: '#projects', label: { en: 'Projects', ar: 'المشاريع' } },
    { href: '#journey', label: { en: 'Journey', ar: 'المسيرة' } },
    { href: '#contact', label: { en: 'Contact', ar: 'تواصل' } },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="floating-nav-container">
      <nav className="floating-nav" aria-label="Main Navigation">
        {/* Brand */}
        <a href="#" className="nav-brand">
          <span className="brand-badge">.NET</span>
          <div className="brand-text">
            <span className="brand-name">
              {lang === 'ar' ? 'محمد باحميدان' : 'M. Bahumaidan'}
            </span>
            <span className="brand-tag">LEAD ENGINEER</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="nav-link"
                onClick={handleLinkClick}
              >
                {item.label[lang]}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions (Lang Switcher & Primary Island CTA) */}
        <div className="nav-actions">
          {/* Language Toggle */}
          <div className="lang-toggle" role="group" aria-label="Language selection">
            <button
              type="button"
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
              title="English"
            >
              EN
            </button>
            <button
              type="button"
              className={`lang-btn ${lang === 'ar' ? 'active' : ''}`}
              onClick={() => setLang('ar')}
              title="العربية"
            >
              عربي
            </button>
          </div>

          {/* Island CTA Button */}
          <a href="#contact" className="btn-island-primary">
            <span>{lang === 'ar' ? 'تواصل معي' : "Let's Talk"}</span>
            <span className="btn-island-icon">
              <ArrowUpRight size={14} />
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
};
