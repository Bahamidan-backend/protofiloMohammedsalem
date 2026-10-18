"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  ShieldCheck,
  Database,
  Users,
  Award,
} from "lucide-react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";

export interface AboutUsSectionProps {
  data?: any;
  lang?: "ar" | "en";
}

export default function AboutUsSection({ data, lang = "ar" }: AboutUsSectionProps) {
  const isArabic = lang === "ar";
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.2 });

  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Content matching visual reference
  const eyebrow = data?.about?.badge?.[lang] || (isArabic ? "نبذة عني" : "ABOUT ME");
  const quote = data?.about?.quote?.[lang] || (isArabic ? "الكود وسيلتي، وهندسة المعمارية هي قوتي" : "Code is my medium. Architecture is my");
  const quoteAccent = data?.about?.quoteAccent?.[lang] || (isArabic ? "الحقيقية." : "superpower.");

  const bioParagraphs = isArabic
    ? [
        "مهندس برمجيات مقيم في اليمن - المكلا، متخصص في تصميم وتطوير الأنظمة الخلفية المفصولة (Decoupled Backends) والتطبيقات المكتبية والمؤسسية ذات الاعتمادية الفائقة.",
        "بصفتي قائد الفريق والمطور الأساسي لمشروع NexCash، أدرت فريقاً من 3 مطورين لبناء وتسليم نظام متكامل لنقاط البيع وإدارة الموارد (POS & ERP) من مرحلة التأسيس حتى الإنتاج الكامل، مع تطبيق صارم لمعمارية Clean Architecture رباعية الطبقات ونسبة دمج نظيفة 95% في Git.",
        "تعتمد فلسفتي الهندسية على الدمج بين المعايير الصارمة (مبادئ SOLID والمعمارية البصلية) وصناعة القيمة الملموسة للأعمال: ضمان سلامة المعاملات لأكثر من 10,000 حركة يومياً، وبناء واجهات استخدام سريعة ومريحة.",
      ]
    : (data?.about?.paragraphs?.[lang]?.slice(0, 3) || [
        "Ambitious Software Engineer based in Mukalla, Yemen, dedicated to designing decoupled enterprise backends and highly reliable enterprise systems.",
        "As Lead Developer on the NexCash project, I spearheaded a 3-member team to build and deliver a complete POS & ERP system from scratch to production, enforcing 4-layer MVVM Clean Architecture and a 95% clean Git merge rate.",
        "My engineering philosophy bridges rigorous architecture (SOLID, Onion Architecture) with tangible business impact: guaranteeing transactional integrity for 10,000+ daily entries and delivering fast, intuitive interfaces.",
      ]);

  const strengths = [
    {
      icon: <ShieldCheck size={22} />,
      title: isArabic ? "المعمارية النظيفة و MVVM" : "Clean Architecture & MVVM",
      desc: isArabic
        ? "فصل صارم للمسؤوليات وقابلية عالية للاختبار والصيانة طويلة الأمد."
        : "Strict separation of concerns, testability, and long-term maintainability.",
    },
    {
      icon: <Database size={22} />,
      title: isArabic ? "قواعد بيانات عالية الكفاءة" : "High-Performance Databases",
      desc: isArabic
        ? "تصميم الهياكل والفهارس وضمان المعاملات عبر SQL Server و SQLite و PostgreSQL."
        : "Schema optimization, indexing strategies, and transactional integrity across SQL engines.",
    },
    {
      icon: <Users size={22} />,
      title: isArabic ? "قيادة تقنية وإدارة فرق" : "Technical Team Leadership",
      desc: isArabic
        ? "توجيه خطط العمل، مراجعة الكود، استراتيجيات Git، والالتزام الصارم بمواعيد التسليم."
        : "Sprint planning, code reviews, Git branching discipline, and on-time milestone delivery.",
    },
  ];

  const portraitImg = data?.personal?.avatar || "/mohammed-bahumaidan.jpg";
  const badgeTitle = data?.personal?.title?.[lang] || (isArabic ? "مطور .NET ومهندس برمجيات متكامل (Lead Full-Stack)" : ".NET Developer & Lead Full-Stack Engineer");

  // 4 high-impact production stats (1 year project cycle - سنة خبرة سنة فقط)
  // Ordered for RTL layout from right to left
  const statsList = [
    {
      targetValue: 10000,
      prefix: "+",
      suffix: "",
      formattedTarget: "+10,000",
      label: isArabic ? "معاملة يومية مستقرة" : "Daily Transactions Scaled",
      sub: isArabic ? "سلامة معاملات متكاملة" : "Full SQLite transactional integrity",
    },
    {
      targetValue: 40,
      prefix: "+",
      suffix: "",
      formattedTarget: "+40",
      label: isArabic ? "واجهة WPF تشغيلية غنية" : "Rich WPF Production UIs",
      sub: isArabic ? "تسريع إدخال البيانات بنسبة 25%" : "25% manual entry reduction",
    },
    {
      targetValue: 30,
      prefix: "",
      suffix: "%",
      formattedTarget: "30%",
      label: isArabic ? "تحسين سرعة الاستعلامات" : "Query Speed Optimization",
      sub: isArabic ? "عبر هياكل وفهارس محسنة" : "Optimized indexing & schemas",
    },
    {
      targetValue: 100,
      prefix: "",
      suffix: "%",
      formattedTarget: "100%",
      label: isArabic ? "تسليم في الموعد المحدد" : "On-Time Milestone Delivery",
      sub: isArabic ? "خلال دورة تطوير كاملة لعام" : "Full 1-year client project cycle",
    },
  ];

  return (
    <section className="ribbon-section" id="about" ref={sectionRef} dir={isArabic ? "rtl" : "ltr"}>
      {/* Decorative ambient background glows */}
      <motion.div
        className="pointer-events-none absolute top-12 right-10 w-96 h-96 rounded-full bg-[rgba(250,204,21,0.04)] blur-[120px]"
        style={{ y: y1 }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-16 left-8 w-[30rem] h-[30rem] rounded-full bg-[rgba(59,130,246,0.03)] blur-[140px]"
        style={{ y: y2 }}
      />

      <div className="ribbon-container">
        {/* Section Eyebrow */}
        <motion.div
          className="section-eyebrow eyebrow-light"
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles size={14} />
          <span>{eyebrow}</span>
        </motion.div>

        {/* Heading in Yellow / Gold matching reference */}
        <motion.h2
          className="about-heading-gold"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {quote}
          <br />
          {quoteAccent}
        </motion.h2>

        {/* Editorial Split Grid */}
        <div className="about-grid">
          {/* Column 1 (Renders on the RIGHT in RTL): Artistic Portrait */}
          <motion.div
            className="portrait-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="portrait-glow-backdrop" aria-hidden="true" />
            <div className="portrait-shell">
              <img
                src={portraitImg}
                alt="Mohammed Salem Bahumaidan"
                className="portrait-img"
                loading="lazy"
              />
              <div className="portrait-chip">
                <Award size={16} color="#facc15" />
                <span>{badgeTitle}</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2 (Renders on the LEFT in RTL): Bio Narrative & Strengths */}
          <motion.div
            className="about-text-content"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {bioParagraphs.map((para, index) => (
              <motion.p key={index} variants={itemVariants}>
                {para}
              </motion.p>
            ))}

            {/* Strengths Cards (3 cards in 1 row) */}
            <motion.div className="about-strengths-row" variants={itemVariants}>
              {strengths.map((strength, index) => (
                <div key={index} className="strength-box">
                  <div className="strength-icon">
                    {strength.icon}
                  </div>
                  <div className="strength-title">{strength.title}</div>
                  <div className="strength-desc">{strength.desc}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Counter Banner (4 high-impact metrics) */}
        <motion.div
          ref={statsRef}
          className="stats-banner"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {statsList.map((item, index) => (
            <StatItem
              key={index}
              targetValue={item.targetValue}
              prefix={item.prefix}
              suffix={item.suffix}
              formattedTarget={item.formattedTarget}
              label={item.label}
              sub={item.sub}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface StatItemProps {
  targetValue: number;
  prefix?: string;
  suffix?: string;
  formattedTarget?: string;
  label: string;
  sub: string;
  delay: number;
}

function StatItem({
  targetValue,
  prefix = "",
  suffix = "",
  formattedTarget,
  label,
  sub,
  delay,
}: StatItemProps) {
  const countRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(countRef, { once: false, amount: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(0, {
    stiffness: 45,
    damping: 12,
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(targetValue);
      setHasAnimated(true);
    } else if (!isInView && hasAnimated) {
      springValue.set(0);
      setHasAnimated(false);
    }
  }, [isInView, targetValue, springValue, hasAnimated]);

  const displayValue = useTransform(springValue, (latest) => {
    const val = Math.floor(latest);
    if (formattedTarget && val >= targetValue - 100) {
      return formattedTarget;
    }
    return `${prefix}${val.toLocaleString("en-US")}${suffix}`;
  });

  return (
    <motion.div
      ref={countRef}
      className="stat-item"
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay },
        },
      }}
    >
      <div className="stat-val">
        <motion.span>{displayValue}</motion.span>
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-sub">{sub}</div>
    </motion.div>
  );
}
