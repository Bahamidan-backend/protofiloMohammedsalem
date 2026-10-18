import React, { useState } from 'react';
import { Briefcase, CheckCircle2, ArrowUpRight, Cpu, Layers, Maximize2, X, Eye } from 'lucide-react';
import { TiltedGridHero } from '@/components/ui/tilted-grid-hero';
import { BentoCard } from '@/components/ui/bento';

export const Projects = ({ data, lang }) => {
  const { projects } = data;
  const nexcashProject = projects.items.find((p) => p.id === 'nexcash') || projects.items[0];
  const nuqtatWaslProject = projects.items.find((p) => p.id === 'nuqtat-wasl');
  const saasProject = projects.items.find((p) => p.id === 'rental-saas');
  const hotelProject = projects.items.find((p) => p.id === 'hotel-system');

  const [waslScreenIndex, setWaslScreenIndex] = useState(0);
  const [lightboxData, setLightboxData] = useState(null);

  const showcaseImages = [
    {
      src: "/logos/nexcash-logo.jpg",
      alt: lang === 'ar' ? "هوية وشعار نظام NexCash" : "NexCash ERP & POS Brand Logo",
    },
    {
      src: "/logos/rental-saas-logo.jpg",
      alt: lang === 'ar' ? "شعار وهوية منصة سلس لتأجير الموارد (Rental SaaS)" : "Salis Rental SaaS Brand Identity",
    },
    {
      src: "/logos/nuqtat-wasl-logo.jpg",
      alt: lang === 'ar' ? "شعار وهوية تطبيق نقطة وصل للأماكن الخدمية" : "Nuqtat Wasl Platform Brand Identity",
    },
    {
      src: "/logos/fondoki-logo.jpg",
      alt: lang === 'ar' ? "شعار وهوية نظام فندقي لإدارة الفنادق" : "Fondoki Hotel Management Suite Brand",
    },
    {
      src: "/logos/rental-saas-logo.jpg",
      alt: lang === 'ar' ? "هوية وشعار مشروع تأجير الموارد السحابي (سلس)" : "Salis Rental Cloud SaaS Logo",
    },
    {
      src: "/logos/nexcash-logo.jpg",
      alt: lang === 'ar' ? "شعار نظام NexCash المحاسبي" : "NexCash POS Brand Logo",
    },
    {
      src: "/logos/nuqtat-wasl-logo.jpg",
      alt: lang === 'ar' ? "هوية تطبيق نقطة وصل المحلية" : "Nuqtat Wasl Local Services Identity",
    },
    {
      src: "/logos/fondoki-logo.jpg",
      alt: lang === 'ar' ? "هوية فندقي لإدارة المنشآت الفندقية" : "Fondoki Hospitality Platform Logo",
    },
    {
      src: "/logos/rental-saas-logo.jpg",
      alt: lang === 'ar' ? "شعار منصة سلس لإدارة التأجير" : "Salis Rental SaaS Logo",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="ribbon-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow eyebrow-dark">
            <Briefcase size={14} />
            <span>{projects.badge[lang]}</span>
          </div>

          <h2 className="dark-heading">
            {projects.title[lang]}{' '}
            <span className="dark-heading-italic">
              {projects.titleAccent[lang]}
            </span>
          </h2>
        </div>

        {/* 3D Tilted Grid Cylindrical Live Systems Stream */}
        <div style={{ marginBottom: '3.5rem' }}>
          <TiltedGridHero
            images={showcaseImages}
            className="tilted-hero-box"
            speed={3.5}
            curve={80}
            tileHeight={25}
          >
            <div className="tilted-hero-overlay">
              <div style={{ padding: '0 1.5rem' }}>
                <span className="tilted-hero-badge">
                  {lang === 'ar' ? 'معرض الهويات والمشاريع ثلاثي الأبعاد • 3D BRANDS SHOWCASE' : '3D INTERACTIVE BRANDS SHOWCASE'}
                </span>
                <h3 className="tilted-hero-title">
                  {lang === 'ar' ? (
                    <>
                      كل علامة ونظام، صُمم ليترك <span style={{ color: 'var(--accent-yellow)' }}>أثراً ملموساً.</span>
                    </>
                  ) : (
                    <>
                      Every frame, <span style={{ color: 'var(--accent-yellow)' }}>brought into focus.</span>
                    </>
                  )}
                </h3>
              </div>
              <p className="tilted-hero-subtitle">
                {lang === 'ar'
                  ? 'أسطوانة تفاعلية ثلاثية الأبعاد تستعرض هويات المشاريع والأنظمة: نظام NexCash لنقاط البيع، تطبيق نقطة وصل، ونظام فندقي للضيافة'
                  : 'Interactive 3D cylindrical stream curving across production brand identities: NexCash POS/ERP, Nuqtat Wasl, and Fondoki Hotel Systems.'}
              </p>
            </div>
          </TiltedGridHero>
        </div>

        {/* Flagship NexCash POS & ERP Showcase - Bento Grid Redesign */}
        <div className="projects-container">
          <div className="nexcash-bento-hero">
            {/* Bento Header: Brand Context, Achievements & Tech Stack */}
            <div className="bento-header-wrap">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '0.85rem' }}>
                <div
                  onClick={() => {
                    setLightboxData({
                      image: "/logos/nexcash-logo.jpg",
                      title: lang === 'ar' ? 'شعار وهوية نظام NexCash المحاسبي' : 'NexCash ERP & POS Brand Logo',
                      desc: lang === 'ar' ? 'الهوية والشعار الرسمي لنظام نقاط البيع وإدارة الموارد NexCash' : 'Official brand identity for NexCash ERP & POS system.'
                    });
                  }}
                  style={{
                    background: '#ffffff',
                    padding: '4px 12px',
                    borderRadius: '8px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    cursor: 'pointer',
                  }}
                  title={lang === 'ar' ? 'انقر لتكبير الشعار' : 'Click to enlarge logo'}
                >
                  <img
                    src="/logos/nexcash-logo.jpg"
                    alt="NexCash Logo"
                    style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
                  />
                </div>
                <div className="project-badge-strip" style={{ marginBottom: 0, gap: '0.45rem', flexWrap: 'wrap' }}>
                  <span className="badge-featured">FLAGSHIP PRODUCTION SYSTEM</span>
                  <span className="badge-role">{nexcashProject.role[lang]}</span>
                  <span className="badge-role">{nexcashProject.period}</span>
                </div>
              </div>

              <div>
                <h3 className="project-title" style={{ fontSize: '1.85rem', marginBottom: '0.6rem' }}>
                  {nexcashProject.title[lang]}
                </h3>
                <p className="project-summary" style={{ maxWidth: '950px', fontSize: '1rem' }}>
                  {nexcashProject.summary[lang]}
                </p>
              </div>

              {/* Achievements Checklist & Tech Stack Bar */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                {nexcashProject.achievements[lang].slice(0, 3).map((bullet, idx) => (
                  <div key={idx} className="project-bullet" style={{ fontSize: '0.85rem' }}>
                    <CheckCircle2 size={15} className="bullet-icon" style={{ flexShrink: 0 }} />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="project-stack-tags" style={{ marginTop: '0.25rem' }}>
                {nexcashProject.stack.map((tech, idx) => (
                  <span key={idx} className="stack-tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Bento Grid: 5 Interactive Bento Cards */}
            <div className="nexcash-bento-grid">
              {/* Card 1: Frontline Cashier POS Screen (Col Span 3) */}
              <BentoCard
                className="bento-col-3"
                fade={["bottom"]}
                eyebrow={lang === 'ar' ? 'واجهة الكاشير المباشرة • FRONTLINE POS' : 'FRONTLINE POS SCREEN'}
                title={lang === 'ar' ? 'شاشة الكاشير ونقاط البيع التفاعلية' : 'Reactive Cashier POS & High-Speed Checkout'}
                description={
                  lang === 'ar'
                    ? 'بناء أكثر من 40 واجهة مستخدم تفاعلية بتقنية WPF قلّصت زمن إدخال الطلبات بنسبة 25%، مع فوترة لحظية وتصنيف ديناميكي للوجبات والخصومات.'
                    : 'Engineered 40+ responsive WPF views cutting order entry time by 25% with instant menu categories and billing.'
                }
                onClick={() => {
                  setLightboxData({
                    image: "/nexcash/main-pos.jpg",
                    title: lang === 'ar' ? 'شاشة الكاشير ونقاط البيع التفاعلية' : 'NexCash Frontline POS Cashier Screen',
                    desc: lang === 'ar' ? 'شاشة الكاشير الرئيسية لمعالجة الطلبات السريعة، تصنيف الوجبات، والفوترة اللحظية.' : 'High-speed cashier POS interface for order processing, categories, and real-time billing.'
                  });
                }}
                graphic={
                  <div className="bento-screen-mockup">
                    <div className="screen-topbar" style={{ padding: '0.45rem 0.85rem' }}>
                      <div className="window-dots">
                        <span className="window-dot dot-red" />
                        <span className="window-dot dot-yellow" />
                        <span className="window-dot dot-green" />
                      </div>
                      <span className="bento-topbar-title">NexCash • Main POS Screen</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--accent-yellow)', fontSize: '0.7rem' }}>
                        <Eye size={12} />
                        <span>{lang === 'ar' ? 'تكبير' : 'Zoom'}</span>
                      </div>
                    </div>
                    <img
                      src="/nexcash/main-pos.jpg"
                      alt="NexCash POS Screen"
                      className="bento-screen-img"
                      loading="lazy"
                    />
                  </div>
                }
              />

              {/* Card 2: 4-Layer MVVM Architecture & Verified Metrics (Col Span 3) */}
              <BentoCard
                className="bento-col-3"
                fade={["bottom"]}
                eyebrow={lang === 'ar' ? 'المعمارية والأداء • CLEAN ARCHITECTURE & ACID' : 'ARCHITECTURE & ACID METRICS'}
                title={lang === 'ar' ? 'تسريع الاستعلامات بنسبة 30% وضمان 10,000+ حركة يومياً' : '+30% Faster Queries & 10,000+ Daily Capacity'}
                description={
                  lang === 'ar'
                    ? 'تطبيق معمارية Clean Architecture رباعية الطبقات لفصل منطق الأعمال، مع مخططات SQLite مفهرسة ونسبة تسليم نظيفة 95% في Git.'
                    : 'Decoupled domain rules with 4-layer MVVM, indexed SQLite schemas with zero lockups, and 95% clean Git merge rate.'
                }
                onClick={() => {
                  setLightboxData({
                    image: "/nexcash/financial-reports.jpg",
                    title: lang === 'ar' ? 'التقارير المالية ومطابقة الإيداعات' : 'Financial Reports & Deposit Reconciliation',
                    desc: lang === 'ar' ? 'مطابقة إيرادات النظام مقابل الإيداعات البنكية المعتمدة واحتساب نسب التحويل والفروقات بدقة.' : 'System revenue reconciled against verified bank deposits with precision audit metrics.'
                  });
                }}
                graphic={
                  <div className="bento-screen-mockup">
                    <div className="screen-topbar" style={{ padding: '0.45rem 0.85rem' }}>
                      <div className="window-dots">
                        <span className="window-dot dot-red" />
                        <span className="window-dot dot-yellow" />
                        <span className="window-dot dot-green" />
                      </div>
                      <span className="bento-topbar-title">NexCash • Architecture & Performance</span>
                    </div>
                    <div className="bento-metrics-container">
                      <img
                        src="/nexcash/financial-reports.jpg"
                        alt="NexCash Performance & Financial Reports"
                        className="bento-metrics-bg"
                        loading="lazy"
                      />
                      <div className="bento-metrics-overlay">
                        {nexcashProject.metrics.map((m, idx) => (
                          <div key={idx} className="bento-metric-tile">
                            <div className="bento-metric-val" dir="ltr">{m.value}</div>
                            <div className="bento-metric-lbl">{m.label[lang]}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                }
              />

              {/* Card 3: Cash Drawer & Shift Audit (Col Span 2) */}
              <BentoCard
                className="bento-col-2"
                fade={["bottom"]}
                eyebrow={lang === 'ar' ? 'الصندوق والمناوبات • CASH & SHIFTS' : 'CASH DRAWER AUDIT'}
                title={lang === 'ar' ? 'تقرير الصندوق والمناوبات' : 'Daily Cash Drawer & Shift Audit'}
                description={
                  lang === 'ar'
                    ? 'متابعة المبيعات النقدية وتتبع مسحوبات الدرج ومطابقة الإيداعات البنكية بدقة 100%.'
                    : 'End-of-day drawer reconciliation tracking net cash sales, withdrawals, and bank audits.'
                }
                onClick={() => {
                  setLightboxData({
                    image: "/nexcash/cash-report.jpg",
                    title: lang === 'ar' ? 'تقرير الصندوق والمناوبات' : 'Full Cash Drawer & Shift Audit',
                    desc: lang === 'ar' ? 'متابعة المبيعات النقدية، متوسط الفاتورة، وحالة إغلاق الدرج والمناوبات.' : 'Shift reconciliation tracking net sales, cash withdrawals, and drawer closeout status.'
                  });
                }}
                graphic={
                  <div className="bento-screen-mockup">
                    <div className="screen-topbar" style={{ padding: '0.45rem 0.85rem' }}>
                      <div className="window-dots">
                        <span className="window-dot dot-red" />
                        <span className="window-dot dot-yellow" />
                        <span className="window-dot dot-green" />
                      </div>
                      <span className="bento-topbar-title">NexCash • Cash & Shift Audit</span>
                      <Eye size={12} style={{ color: 'var(--accent-yellow)' }} />
                    </div>
                    <img
                      src="/nexcash/cash-report.jpg"
                      alt="NexCash Cash Drawer Audit"
                      className="bento-screen-img"
                      loading="lazy"
                    />
                  </div>
                }
              />

              {/* Card 4: Kitchen Stations & Hardware Thermal Routing (Col Span 2) */}
              <BentoCard
                className="bento-col-2"
                fade={["bottom"]}
                eyebrow={lang === 'ar' ? 'العتاد والمطابخ • THERMAL PRINTERS' : 'HARDWARE & KITCHEN STATIONS'}
                title={lang === 'ar' ? 'توجيه طابعات المطابخ' : 'Kitchen Stations & Receipt Routing'}
                description={
                  lang === 'ar'
                    ? 'ربط مباشر مع طابعات XP-80C الحرارية وتوجيه الطلبات آلياً لمحطات التحضير والمشاوي.'
                    : 'Multi-station routing across dedicated thermal printers with instant receipt dispatching.'
                }
                onClick={() => {
                  setLightboxData({
                    image: "/nexcash/kitchens.jpg",
                    title: lang === 'ar' ? 'إدارة المطابخ وطابعات الفواتير' : 'Kitchen Stations & Thermal Printers',
                    desc: lang === 'ar' ? 'توزيع محطات التحضير والربط مع طابعات XP-80C الحرارية.' : 'Multi-station order routing with dedicated XP-80C thermal printers.'
                  });
                }}
                graphic={
                  <div className="bento-screen-mockup">
                    <div className="screen-topbar" style={{ padding: '0.45rem 0.85rem' }}>
                      <div className="window-dots">
                        <span className="window-dot dot-red" />
                        <span className="window-dot dot-yellow" />
                        <span className="window-dot dot-green" />
                      </div>
                      <span className="bento-topbar-title">NexCash • Kitchen Stations</span>
                      <Eye size={12} style={{ color: 'var(--accent-yellow)' }} />
                    </div>
                    <img
                      src="/nexcash/kitchens.jpg"
                      alt="NexCash Kitchen Stations"
                      className="bento-screen-img"
                      loading="lazy"
                    />
                  </div>
                }
              />

              {/* Card 5: Purchases, Supply Chain & Payroll (Col Span 2) */}
              <BentoCard
                className="bento-col-2"
                fade={["bottom"]}
                eyebrow={lang === 'ar' ? 'المشتريات والموظفين • SUPPLY & HR' : 'SUPPLY CHAIN & PAYROLL'}
                title={lang === 'ar' ? 'إدارة الموردين والرواتب' : 'Purchase Orders & Payroll Suite'}
                description={
                  lang === 'ar'
                    ? 'تسجيل فواتير الشراء وحساب التكاليف آلياً، مع إدارة كشوفات الموظفين والسلفيات وتصدير تقارير PDF.'
                    : 'Streamlined purchase orders with supplier invoicing, staff advance tracking, and PDF reports.'
                }
                onClick={() => {
                  setLightboxData({
                    image: "/nexcash/purchases.jpg",
                    title: lang === 'ar' ? 'تسجيل المشتريات وإدارة الموردين' : 'Purchase Orders & Supplier Invoicing',
                    desc: lang === 'ar' ? 'شاشة تسجيل فواتير الشراء، حساب التكاليف، والتحديث الفوري للمخزون.' : 'Purchase entry with cost computation, supplier selection, and stock updates.'
                  });
                }}
                graphic={
                  <div className="bento-screen-mockup">
                    <div className="screen-topbar" style={{ padding: '0.45rem 0.85rem' }}>
                      <div className="window-dots">
                        <span className="window-dot dot-red" />
                        <span className="window-dot dot-yellow" />
                        <span className="window-dot dot-green" />
                      </div>
                      <span className="bento-topbar-title">NexCash • Purchases & Supply</span>
                      <Eye size={12} style={{ color: 'var(--accent-yellow)' }} />
                    </div>
                    <img
                      src="/nexcash/purchases.jpg"
                      alt="NexCash Purchases & Suppliers"
                      className="bento-screen-img"
                      loading="lazy"
                    />
                  </div>
                }
              />
            </div>
          </div>

          {/* Flagship Nuqtat Wasl Mobile & Platform Showcase - Bento Grid Redesign */}
          {nuqtatWaslProject && (
            <div className="nexcash-bento-hero" style={{ borderColor: 'rgba(250, 204, 21, 0.35)' }}>
              {/* Bento Header: Brand Context, Achievements & Tech Stack */}
              <div className="bento-header-wrap">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '0.85rem' }}>
                  <div
                    onClick={() => {
                      setLightboxData({
                        image: "/logos/nuqtat-wasl-logo.jpg",
                        title: lang === 'ar' ? 'شعار وهوية تطبيق نقطة وصل' : 'Nuqtat Wasl Platform Brand Logo',
                        desc: lang === 'ar' ? 'الهوية والشعار الرسمي لتطبيق ومنصة نقطة وصل الخدمية' : 'Official brand identity for Nuqtat Wasl Platform.'
                      });
                    }}
                    style={{
                      background: '#ffffff',
                      padding: '4px 12px',
                      borderRadius: '8px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      cursor: 'pointer',
                    }}
                    title={lang === 'ar' ? 'انقر لتكبير الشعار' : 'Click to enlarge logo'}
                  >
                    <img
                      src="/logos/nuqtat-wasl-logo.jpg"
                      alt="Nuqtat Wasl Logo"
                      style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
                    />
                  </div>
                  <div className="project-badge-strip" style={{ marginBottom: 0, gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span className="badge-featured" style={{ background: 'var(--accent-yellow)', color: '#000000', fontWeight: '800' }}>
                      {lang === 'ar' ? 'مشروع مكتمل ومنجز 100%' : '100% COMPLETED & DELIVERED'}
                    </span>
                    <span className="badge-role" style={{ borderColor: 'rgba(250, 204, 21, 0.35)', color: 'var(--accent-yellow)', fontWeight: '700' }}>
                      {lang === 'ar' ? 'فريق عمل من 5 مطورين' : '5-Member Dev Team'}
                    </span>
                    <span className="badge-role">
                      {lang === 'ar' ? 'مطور برمجيات متكامل (Full-Stack)' : 'Full-Stack Engineer'}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="project-title" style={{ fontSize: '1.85rem', marginBottom: '0.6rem' }}>
                    {nuqtatWaslProject.title[lang]}
                  </h3>
                  <p className="project-summary" style={{ maxWidth: '950px', fontSize: '1rem' }}>
                    {nuqtatWaslProject.summary[lang]}
                  </p>
                </div>

                {/* Achievements Checklist & Tech Stack Bar */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem', background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                  {nuqtatWaslProject.achievements[lang].slice(0, 3).map((bullet, idx) => (
                    <div key={idx} className="project-bullet" style={{ fontSize: '0.85rem' }}>
                      <CheckCircle2 size={15} className="bullet-icon" style={{ flexShrink: 0 }} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="project-stack-tags" style={{ marginTop: '0.25rem' }}>
                  {nuqtatWaslProject.stack.map((tech, idx) => (
                    <span key={idx} className="stack-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Bento Grid: 5 Interactive Bento Cards for Nuqtat Wasl */}
              <div className="nexcash-bento-grid">
                {/* Card 1: Mobile Admin Dashboard (Col Span 3) */}
                <BentoCard
                  className="bento-col-3"
                  fade={["bottom"]}
                  eyebrow={lang === 'ar' ? 'لوحة تحكم المشرف • MOBILE ADMIN DASHBOARD' : 'MOBILE ADMIN DASHBOARD'}
                  title={lang === 'ar' ? 'متابعة المستخدمين والطلبات والسجلات التجارية' : 'Live Registered Users & Incoming Orders Queue'}
                  description={
                    lang === 'ar'
                      ? 'لوحة تحكم إدارية متكاملة تتابع 160+ مستخدم، والمحلات المسجلة، والطلبات اللحظية، وتوثيق السجلات التجارية للتجار.'
                      : 'Real-time tracking of 160+ registered users, dining merchants, live incoming orders, and business credential verification.'
                  }
                  onClick={() => {
                    setLightboxData({
                      image: "/nuqtat-wasl/admin-dashboard-clean.png",
                      title: lang === 'ar' ? 'لوحة تحكم المشرف وإدارة النظام' : 'Mobile Admin Dashboard & Metrics',
                      desc: lang === 'ar' ? 'متابعة فورية لإجمالي المستخدمين (160+)، المحلات المسجلة، الطلبات الجديدة، وأقسام النظام الشاملة.' : 'Real-time tracking of registered users (160+), active restaurants, incoming order flow, and system navigation.'
                    });
                  }}
                  graphic={
                    <div className="bento-screen-mockup">
                      <div className="screen-topbar" style={{ padding: '0.45rem 0.85rem' }}>
                        <div className="window-dots">
                          <span className="window-dot dot-red" />
                          <span className="window-dot dot-yellow" />
                          <span className="window-dot dot-green" />
                        </div>
                        <span className="bento-topbar-title">Nuqtat Wasl • Mobile Admin Suite</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--accent-yellow)', fontSize: '0.7rem' }}>
                          <Eye size={12} />
                          <span>{lang === 'ar' ? 'تكبير' : 'Zoom'}</span>
                        </div>
                      </div>
                      <img
                        src="/nuqtat-wasl/admin-dashboard-clean.png"
                        alt="Nuqtat Wasl Admin Dashboard"
                        className="bento-mobile-screen-img"
                        loading="lazy"
                      />
                    </div>
                  }
                />

                {/* Card 2: Dynamic Category & Subcategory Taxonomy Engine (Col Span 3) */}
                <BentoCard
                  className="bento-col-3"
                  fade={["bottom"]}
                  eyebrow={lang === 'ar' ? 'محرك التصنيفات • DYNAMIC TAXONOMY' : 'DYNAMIC CATEGORY ENGINE'}
                  title={lang === 'ar' ? 'إدارة هرمية للتصنيفات وتخصيص القوائم' : 'Hierarchical Taxonomy & Custom Menu Management'}
                  description={
                    lang === 'ar'
                      ? 'محرك فئات ديناميكي يتيح لأصحاب المطاعم التحكم الكامل في الفئات الرئيسية والفرعية وإضافة العروض وتعديل الخدمات فورياً.'
                      : 'Full control over primary and subcategory hierarchies with instant edits, additions, and updates for merchants.'
                  }
                  onClick={() => {
                    setLightboxData({
                      image: "/nuqtat-wasl/categories-management-clean.png",
                      title: lang === 'ar' ? 'محرك إدارة وتعديل التصنيفات والفئات' : 'Dynamic Category & Subcategory Engine',
                      desc: lang === 'ar' ? 'إدارة هرمية للتصنيفات والتصنيفات الفرعية للمحلات مع إمكانية التعديل والحذف والحفظ الفوري.' : 'Full hierarchical control over primary categories and subcategories with instant edits, additions, and updates.'
                    });
                  }}
                  graphic={
                    <div className="bento-screen-mockup">
                      <div className="screen-topbar" style={{ padding: '0.45rem 0.85rem' }}>
                        <div className="window-dots">
                          <span className="window-dot dot-red" />
                          <span className="window-dot dot-yellow" />
                          <span className="window-dot dot-green" />
                        </div>
                        <span className="bento-topbar-title">Nuqtat Wasl • Categories Management</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--accent-yellow)', fontSize: '0.7rem' }}>
                          <Eye size={12} />
                          <span>{lang === 'ar' ? 'تكبير' : 'Zoom'}</span>
                        </div>
                      </div>
                      <img
                        src="/nuqtat-wasl/categories-management-clean.png"
                        alt="Nuqtat Wasl Categories Engine"
                        className="bento-mobile-screen-img"
                        loading="lazy"
                      />
                    </div>
                  }
                />

                {/* Card 3: ASP.NET Core High-Performance Web APIs (Col Span 2) */}
                <BentoCard
                  className="bento-col-2"
                  fade={["bottom"]}
                  eyebrow={lang === 'ar' ? 'الواجهات الخلفية • ASP.NET CORE' : 'BACKEND WEB APIS'}
                  title={lang === 'ar' ? 'واجهات برمجية لحظية للبحث والاستكشاف' : 'High-Throughput Restaurant Discovery APIs'}
                  description={
                    lang === 'ar'
                      ? 'هندسة واجهات RESTful APIs فائقة الكفاءة لمعالجة استعلامات البحث والمطاعم والطلبات اللحظية.'
                      : 'Engineered high-throughput ASP.NET Core endpoints handling dynamic search, ratings, and order ingestion.'
                  }
                  graphic={
                    <div className="bento-screen-mockup">
                      <div className="screen-topbar" style={{ padding: '0.45rem 0.85rem' }}>
                        <div className="window-dots">
                          <span className="window-dot dot-red" />
                          <span className="window-dot dot-yellow" />
                          <span className="window-dot dot-green" />
                        </div>
                        <span className="bento-topbar-title">Nuqtat Wasl • Web API Architecture</span>
                      </div>
                      <div className="bento-metrics-container">
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1rem', background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.12) 0%, rgba(5, 6, 9, 0.95) 100%)' }}>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#34d399', marginBottom: '0.5rem', direction: 'ltr', textAlign: 'left' }}>
                            GET /api/v1/restaurants/nearby<br/>
                            POST /api/v1/ratings/verify<br/>
                            GET /api/v1/admin/analytics
                          </div>
                          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '0.7rem', background: 'rgba(52, 211, 153, 0.15)', color: '#34d399', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid rgba(52, 211, 153, 0.3)' }}>ASP.NET Core</span>
                            <span style={{ fontSize: '0.7rem', background: 'rgba(52, 211, 153, 0.15)', color: '#34d399', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid rgba(52, 211, 153, 0.3)' }}>JWT Secured</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                />

                {/* Card 4: Authentic Rating & Anti-Fraud Algorithm (Col Span 2) */}
                <BentoCard
                  className="bento-col-2"
                  fade={["bottom"]}
                  eyebrow={lang === 'ar' ? 'خوارزمية التقييم • AUTHENTIC RATING' : 'ANTI-FRAUD RATING ENGINE'}
                  title={lang === 'ar' ? 'منع التقييمات الوهمية وتعزيز الثقة' : 'Verified Reviews & Merchant Trust Score'}
                  description={
                    lang === 'ar'
                      ? 'خوارزمية ذكية لمطابقة التقييمات تمنع التلاعب وتُبرز المطاعم المتميزة بجدارة لزيادة المبيعات.'
                      : 'Authentic rating algorithm filtering bot reviews and spotlighting top-rated dining spots.'
                  }
                  graphic={
                    <div className="bento-screen-mockup">
                      <div className="screen-topbar" style={{ padding: '0.45rem 0.85rem' }}>
                        <div className="window-dots">
                          <span className="window-dot dot-red" />
                          <span className="window-dot dot-yellow" />
                          <span className="window-dot dot-green" />
                        </div>
                        <span className="bento-topbar-title">Nuqtat Wasl • Rating Algorithm</span>
                      </div>
                      <div className="bento-metrics-container">
                        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', background: 'radial-gradient(circle at center, rgba(250, 204, 21, 0.12) 0%, rgba(5, 6, 9, 0.95) 100%)', textAlign: 'center' }}>
                          <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--accent-yellow)', fontFamily: 'var(--font-mono)' }}>100%</div>
                          <div style={{ fontSize: '0.78rem', color: '#e2e8f0', fontWeight: '600' }}>{lang === 'ar' ? 'موثوقية التقييم ومنع الحسابات الوهمية' : 'Rating Authenticity & Anti-Fraud'}</div>
                        </div>
                      </div>
                    </div>
                  }
                />

                {/* Card 5: Brand Identity & Merchant Expansion (Col Span 2) */}
                <BentoCard
                  className="bento-col-2"
                  fade={["bottom"]}
                  eyebrow={lang === 'ar' ? 'هوية المنصة • BRAND IDENTITY' : 'BRAND IDENTITY & EXPANSION'}
                  title={lang === 'ar' ? 'تنمية أعمال التجار وزيادة العملاء' : 'Merchant Growth & Commercial Expansion'}
                  description={
                    lang === 'ar'
                      ? 'ربط العملاء بالأماكن الخدمية والمطاعم المتميزة مع توثيق السجلات التجارية وتوسيع شريحة الزبائن.'
                      : 'Connecting local communities with verified merchants to boost customer footfall and loyalty.'
                  }
                  onClick={() => {
                    setLightboxData({
                      image: "/logos/nuqtat-wasl-logo.jpg",
                      title: lang === 'ar' ? 'هوية تطبيق نقطة وصل' : 'Nuqtat Wasl Brand Identity',
                      desc: lang === 'ar' ? 'نقطة وصل للأماكن الخدمية المحلية والمطاعم.' : 'Nuqtat Wasl local services and merchant discovery identity.'
                    });
                  }}
                  graphic={
                    <div className="bento-screen-mockup">
                      <div className="screen-topbar" style={{ padding: '0.45rem 0.85rem' }}>
                        <div className="window-dots">
                          <span className="window-dot dot-red" />
                          <span className="window-dot dot-yellow" />
                          <span className="window-dot dot-green" />
                        </div>
                        <span className="bento-topbar-title">Nuqtat Wasl • Official Identity</span>
                        <Eye size={12} style={{ color: 'var(--accent-yellow)' }} />
                      </div>
                      <img
                        src="/logos/nuqtat-wasl-logo.jpg"
                        alt="Nuqtat Wasl Official Logo"
                        className="bento-screen-img"
                        loading="lazy"
                      />
                    </div>
                  }
                />
              </div>
            </div>
          )}

          {/* Featured Cloud SaaS Architecture: Multi-Tenant Rental Platform */}
          {saasProject && (
            <div className="project-card-hero" style={{ borderColor: 'rgba(250, 204, 21, 0.25)' }}>
              {/* Left Column: Story & Architecture */}
              <div className="project-info">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '0.85rem' }}>
                  <div
                    onClick={() => {
                      setLightboxData({
                        image: "/logos/rental-saas-logo.jpg",
                        title: lang === 'ar' ? 'شعار وهوية منصة سلس (Salis) لإدارة التأجير' : 'Salis Rental SaaS Brand Logo',
                        desc: lang === 'ar' ? 'الهوية والشعار الرسمي لمنصة تأجير الموارد السحابية متعددة المستأجرين' : 'Official brand identity for the Multi-Tenant Rental SaaS Platform.'
                      });
                    }}
                    style={{
                      background: '#ffffff',
                      padding: '4px 12px',
                      borderRadius: '8px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      cursor: 'pointer',
                    }}
                    title={lang === 'ar' ? 'انقر لتكبير الشعار' : 'Click to enlarge logo'}
                  >
                    <img
                      src="/logos/rental-saas-logo.jpg"
                      alt="Salis Logo"
                      style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
                    />
                  </div>
                  <div className="project-badge-strip" style={{ marginBottom: 0, gap: '0.45rem', flexWrap: 'wrap' }}>
                    <span className="badge-featured">
                      {lang === 'ar' ? 'منصة سحابية متقدمة (قيد الإطلاق)' : 'ENTERPRISE CLOUD SAAS'}
                    </span>
                    <span className="badge-role">{saasProject.role[lang]}</span>
                    <span className="badge-role">{saasProject.period}</span>
                  </div>
                </div>

                <h3 className="project-title">{saasProject.title[lang]}</h3>

                <p className="project-summary">{saasProject.summary[lang]}</p>

                <div className="project-bullets-list">
                  {saasProject.achievements[lang].map((bullet, idx) => (
                    <div key={idx} className="project-bullet">
                      <CheckCircle2 size={16} className="bullet-icon" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="project-stack-tags">
                  {saasProject.stack.map((tech, idx) => (
                    <span key={idx} className="stack-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Preview & Architectural Highlights */}
              <div className="project-media-metrics-col">
                {saasProject.mainImage && (
                  <div
                    className="project-hero-preview-box"
                    onClick={() => {
                      setLightboxData({
                        image: saasProject.mainImage,
                        title: saasProject.screenshots ? saasProject.screenshots[0].title[lang] : saasProject.title[lang],
                        desc: saasProject.screenshots ? saasProject.screenshots[0].desc[lang] : saasProject.summary[lang],
                      });
                    }}
                    title={lang === 'ar' ? 'انقر لتكبير لوحة تحكم التأجير' : 'Click to enlarge Rental SaaS Dashboard'}
                  >
                    <div className="screen-topbar" style={{ padding: '0.5rem 0.85rem' }}>
                      <div className="window-dots">
                        <span className="window-dot dot-red" />
                        <span className="window-dot dot-yellow" />
                        <span className="window-dot dot-green" />
                      </div>
                      <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                        Smart Rental SaaS • Main Cloud Dashboard
                      </span>
                      <Maximize2 size={13} style={{ color: '#94a3b8' }} />
                    </div>
                    <div className="project-preview-img-wrap">
                      <img
                        src={saasProject.mainImage}
                        alt={saasProject.title[lang]}
                        className="screen-main-img"
                        loading="lazy"
                      />
                      <div className="screen-zoom-hint">
                        <Eye size={13} />
                        <span>{lang === 'ar' ? 'عرض مكبّر' : 'Expand'}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="project-metrics-panel">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0.85rem' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#fff' }}>
                      {lang === 'ar' ? 'المعايير المعمارية للخدمة' : 'Architectural Highlights'}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--accent-yellow)', fontFamily: 'var(--font-mono)' }}>
                      ENTERPRISE SAAS
                    </span>
                  </div>

                  <div className="metrics-row">
                    {saasProject.metrics.map((m, idx) => (
                      <div key={idx} className="metric-card-tile">
                        <div className="metric-tile-val" style={{ fontSize: '1.25rem' }}>{m.value}</div>
                        <div className="metric-tile-label">{m.label[lang]}</div>
                      </div>
                    ))}
                  </div>

                  {/* Pipeline Flow representation */}
                  <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '0.85rem', padding: '0.85rem', marginTop: '0.25rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#94a3b8', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {lang === 'ar' ? 'مسار الطلب (Request Pipeline)' : 'Request Execution Pipeline'}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#e2e8f0', fontFamily: 'var(--font-mono)', lineHeight: '1.6', direction: 'ltr', textAlign: 'left' }}>
                      Minimal API Endpoint &rarr; Tenant Middleware &rarr; MediatR Pipeline &rarr; Validation Behavior &rarr; CQRS Handler &rarr; Isolated DB
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Project Card: Hotel Management System */}
          {hotelProject && (
            <div className={`project-card-secondary ${hotelProject.mainImage ? 'project-card-secondary-grid' : ''}`}>
              <div className="project-info">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap', marginBottom: '0.85rem' }}>
                  <div
                    onClick={() => {
                      setLightboxData({
                        image: "/logos/fondoki-logo.jpg",
                        title: lang === 'ar' ? 'شعار وهوية نظام فندقي لإدارة الفنادق' : 'Fondoki Hotel System Brand Logo',
                        desc: lang === 'ar' ? 'الهوية والشعار الرسمي لنظام إدارة الفنادق والضيافة فندقي' : 'Official brand identity for Fondoki Hotel Management Suite.'
                      });
                    }}
                    style={{
                      background: '#ffffff',
                      padding: '4px 12px',
                      borderRadius: '8px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      cursor: 'pointer',
                    }}
                    title={lang === 'ar' ? 'انقر لتكبير الشعار' : 'Click to enlarge logo'}
                  >
                    <img
                      src="/logos/fondoki-logo.jpg"
                      alt="Fondoki Logo"
                      style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span className="badge-role">{hotelProject.role[lang]}</span>
                    <span className="badge-role">{hotelProject.period}</span>
                  </div>
                </div>

                <h3 className="project-title" style={{ fontSize: '1.45rem', marginBottom: '0.75rem' }}>
                  {hotelProject.title[lang]}
                </h3>

                <p className="project-summary">{hotelProject.summary[lang]}</p>

                <div className="project-bullets-list">
                  {hotelProject.achievements[lang].map((bullet, idx) => (
                    <div key={idx} className="project-bullet">
                      <CheckCircle2 size={16} className="bullet-icon" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="project-stack-tags">
                  {hotelProject.stack.map((tech, idx) => (
                    <span key={idx} className="stack-tag">{tech}</span>
                  ))}
                </div>
              </div>

              {hotelProject.mainImage && (
                <div className="project-hero-preview-box">
                  <div className="screen-topbar" style={{ padding: '0.5rem 0.85rem' }}>
                    <div className="window-dots">
                      <span className="window-dot dot-red" />
                      <span className="window-dot dot-yellow" />
                      <span className="window-dot dot-green" />
                    </div>
                    <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                      Hotel System • Desktop Suite
                    </span>
                  </div>
                  <div className="project-preview-img-wrap">
                    <img
                      src={hotelProject.mainImage}
                      alt={hotelProject.title[lang]}
                      className="screen-main-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxData && (
        <div className="lightbox-overlay" onClick={() => setLightboxData(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox-close-btn"
              onClick={() => setLightboxData(null)}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
            <img
              src={lightboxData.image}
              alt={lightboxData.title}
              className="lightbox-img"
            />
            <div style={{ marginTop: '1rem', color: '#ffffff', textAlign: 'center' }}>
              <div style={{ fontWeight: '700', fontSize: '1.1rem' }}>{lightboxData.title}</div>
              <div style={{ fontSize: '0.85rem', color: '#94a3b8', marginTop: '0.3rem' }}>{lightboxData.desc}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
