import React, { useState } from 'react';
import { Mail, Phone, MapPin, Download, MessageSquare, Check, Copy } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

export const ContactCta = ({ data, lang }) => {
  const { contact, personal } = data;
  const [copiedType, setCopiedType] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const triggerDownloadConfetti = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#2563eb', '#10b981', '#7c3aed', '#f59e0b']
      });
    } catch (e) {}
  };

  return (
    <section className="cta-ribbon-section" id="contact">
      <div className="ribbon-container">
        <div className="cta-box-card">
          {/* Left Column: Heading, Subtitle & Primary Action Buttons */}
          <div className="cta-left">
            <div className="section-eyebrow eyebrow-light">
              <MessageSquare size={14} />
              <span>{contact.badge[lang]}</span>
            </div>

            <h2>
              {contact.title[lang]}{' '}
              <span className="ribbon-heading-italic">
                {contact.titleAccent[lang]}
              </span>
            </h2>

            <p>{contact.subtitle[lang]}</p>

            <div className="cta-buttons-row">
              {/* Direct WhatsApp Action */}
              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-whatsapp"
              >
                <MessageSquare size={16} />
                <span>{contact.ctaButton[lang]}</span>
              </a>

              {/* Direct Email Action */}
              <a
                href={`mailto:${personal.email}`}
                className="btn-cta-email"
              >
                <Mail size={16} />
                <span>{contact.emailButton[lang]}</span>
              </a>

              {/* Direct CV Download */}
              <a
                href={personal.cvUrl}
                download="Mohammed_Salem_Bahumaidan_CV.pdf"
                onClick={triggerDownloadConfetti}
                className="btn-island-secondary"
                style={{
                  background: '#f1f5f9',
                  color: '#0f172a',
                  borderColor: '#cbd5e1'
                }}
              >
                <span>{contact.cvButton[lang]}</span>
                <span className="btn-island-icon" style={{ background: '#0f172a', color: '#fff' }}>
                  <Download size={14} />
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Contact & Info Card */}
          <div className="cta-contact-details">
            {/* Email item */}
            <div className="contact-row-item" style={{ cursor: 'pointer' }} onClick={() => handleCopy(personal.email, 'email')}>
              <div className="contact-item-icon">
                <Mail size={16} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: '600', textTransform: 'uppercase' }}>
                  {lang === 'ar' ? 'البريد الإلكتروني (انقر للنسخ)' : 'Email (Click to copy)'}
                </div>
                <div style={{ fontWeight: '700', fontSize: '0.9rem', wordBreak: 'break-all' }}>
                  {personal.email}
                </div>
              </div>
              <div style={{ color: copiedType === 'email' ? '#10b981' : '#94a3b8' }}>
                {copiedType === 'email' ? <Check size={16} /> : <Copy size={16} />}
              </div>
            </div>

            {/* Phone item */}
            <div className="contact-row-item" style={{ cursor: 'pointer' }} onClick={() => handleCopy(personal.phone, 'phone')}>
              <div className="contact-item-icon">
                <Phone size={16} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: '600', textTransform: 'uppercase' }}>
                  {lang === 'ar' ? 'رقم الهاتف / واتساب' : 'Phone / WhatsApp'}
                </div>
                <div style={{ fontWeight: '700', fontSize: '0.9rem', direction: 'ltr', textAlign: lang === 'ar' ? 'right' : 'left' }}>
                  {personal.phone}
                </div>
              </div>
              <div style={{ color: copiedType === 'phone' ? '#10b981' : '#94a3b8' }}>
                {copiedType === 'phone' ? <Check size={16} /> : <Copy size={16} />}
              </div>
            </div>

            {/* Location */}
            <div className="contact-row-item">
              <div className="contact-item-icon">
                <MapPin size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: '600', textTransform: 'uppercase' }}>
                  {lang === 'ar' ? 'الموقع الحالي' : 'Current Base'}
                </div>
                <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>
                  {personal.location[lang]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
