import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WaveDivider } from './components/WaveDivider';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Journey } from './components/Journey';
import { ContactCta } from './components/ContactCta';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState('ar');
  const [showFloatingNav, setShowFloatingNav] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const handleScroll = () => {
      // Show sticky island nav once user scrolls past hero section
      if (window.scrollY > 400) {
        setShowFloatingNav(true);
      } else {
        setShowFloatingNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang]);

  return (
    <div className="portfolio-app-root">
      {/* Background Noise Texture */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Floating Island Navigation (Appears smoothly when scrolling down) */}
      {showFloatingNav && <Navbar lang={lang} setLang={setLang} />}

      {/* Section 1: Minimalist Full-Screen Hero with Cutout & Iconic Yellow Disc */}
      <Hero data={portfolioData} lang={lang} setLang={setLang} />

      {/* Transition Wave 1: Dark -> Sculpted White Silk Ribbon */}
      <WaveDivider type="dark-to-white" />

      {/* Section 2: About Me & Stats (Sculpted White Porcelain Ribbon) */}
      <About data={portfolioData} lang={lang} />

      {/* Transition Wave 2: Sculpted White Silk Ribbon -> Deep Dark */}
      <WaveDivider type="white-to-dark" />

      {/* Section 3: Skills & Tech Ecosystem (Glowing Glassmorphic Cards) */}
      <Skills data={portfolioData} lang={lang} />

      {/* Section 4: Featured Projects (NexCash Real UI Gallery & Hotel Management) */}
      <Projects data={portfolioData} lang={lang} />

      {/* Transition Wave 3: Deep Dark -> Sculpted White Silk Ribbon */}
      <WaveDivider type="dark-to-white" />

      {/* Section 5: Career Journey & Education Chronology */}
      <Journey data={portfolioData} lang={lang} />

      {/* Section 6: Have a Project in Mind? (Contact Actions & Download CV) */}
      <ContactCta data={portfolioData} lang={lang} />

      {/* Transition Wave 4: Sculpted White Silk Ribbon -> Deep Dark */}
      <WaveDivider type="white-to-dark" />

      {/* Section 7: High-Tech Obsidian Footer */}
      <Footer data={portfolioData} lang={lang} />
    </div>
  );
}
