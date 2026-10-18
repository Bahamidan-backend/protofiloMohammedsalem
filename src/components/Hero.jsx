import React from 'react';
import { MinimalistHero } from '@/components/ui/minimalist-hero';
import { LinkedInIcon, GitHubIcon } from '@/components/SocialIcons';
import { Mail, MessageSquare } from 'lucide-react';

export const Hero = ({ data, lang, setLang }) => {
  const { personal, hero } = data;

  const navLinks = [
    { label: lang === 'ar' ? 'عني' : 'ABOUT', href: '#about' },
    { label: lang === 'ar' ? 'المهارات' : 'SKILLS', href: '#skills' },
    { label: lang === 'ar' ? 'المشاريع' : 'PROJECTS', href: '#projects' },
    { label: lang === 'ar' ? 'المسيرة' : 'JOURNEY', href: '#journey' },
    { label: lang === 'ar' ? 'تواصل' : 'CONTACT', href: '#contact' },
  ];

  const socialLinks = [
    { icon: LinkedInIcon, href: personal.linkedin },
    { icon: GitHubIcon, href: personal.github },
    { icon: MessageSquare, href: personal.whatsapp },
    { icon: Mail, href: `mailto:${personal.email}` },
  ];

  return (
    <MinimalistHero
      logoText={lang === 'ar' ? 'محمد باحميدان' : 'mnmlst.'}
      navLinks={navLinks}
      mainText={personal.shortBio[lang]}
      readMoreLink="#about"
      readMoreText={lang === 'ar' ? 'اقرأ المزيد' : 'Read More'}
      imageSrc="/mohammed-bahumaidan-cutout.png"
      imageAlt={personal.name[lang]}
      overlayText={{
        part1: 'less is',
        part2: 'more.',
      }}
      socialLinks={socialLinks}
      locationText={personal.location[lang]}
      lang={lang}
      setLang={setLang}
    />
  );
};
