"use client";
import React from "react";
import { clsx } from "clsx";
import { motion } from "framer-motion";

export function BentoCard({
  dark = false,
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
  onClick,
}: {
  dark?: boolean;
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic?: React.ReactNode;
  fade?: ("top" | "bottom")[];
  onClick?: () => void;
}) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? "true" : undefined}
      onClick={onClick}
      className={clsx(
        className,
        "group relative flex flex-col overflow-hidden rounded-2xl bento-card-root",
        "bg-[#0a0c14] border border-[rgba(255,255,255,0.08)] transform-gpu shadow-xl",
        "hover:border-[rgba(250,204,21,0.4)] hover:shadow-[0_15px_40px_-10px_rgba(250,204,21,0.18)] transition-all duration-300",
        onClick && "cursor-pointer"
      )}
    >
      <div className="relative w-full h-[240px] sm:h-[280px] lg:h-[310px] overflow-hidden bento-graphic-wrap shrink-0">
        {graphic}
        {fade.includes("top") && (
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c14] via-transparent to-transparent opacity-60 pointer-events-none" />
        )}
        {fade.includes("bottom") && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c14] via-[#0a0c14]/70 to-transparent opacity-85 pointer-events-none" />
        )}
      </div>

      <div
        className="bento-content-body"
        style={{
          position: "relative",
          padding: "1.25rem 1.5rem",
          zIndex: 20,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0c14",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div style={{ marginBottom: "0.5rem" }}>
          {/* Eyebrow / Category Tag (Distinct Golden Pill Badge) */}
          <div
            className="bento-eyebrow-tag"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "#facc15",
              background: "rgba(250, 204, 21, 0.1)",
              border: "1px solid rgba(250, 204, 21, 0.25)",
              padding: "0.22rem 0.65rem",
              borderRadius: "9999px",
              fontSize: "0.72rem",
              fontWeight: 800,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: "0.55rem",
              width: "fit-content",
            }}
          >
            {eyebrow}
          </div>

          {/* Card Title (Crisp White Heading) */}
          <h4
            className="bento-card-title"
            style={{
              fontSize: "1.2rem",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.35,
              margin: "0 0 0.45rem 0",
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </h4>
        </div>

        {/* Card Description (Muted Slate / Gray for Easy Readability) */}
        <p
          className="bento-card-desc"
          style={{
            fontSize: "0.85rem",
            color: "#94a3b8",
            lineHeight: 1.65,
            fontWeight: 400,
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function FUIBentoGridDark() {
  return (
    <div className="pt-16 pb-20 container mx-auto flex flex-col px-4 sm:px-6 lg:px-8">
      <h1 className="tracking-tight text-3xl md:text-5xl font-extrabold text-white">
        Sales
      </h1>
      <p className="max-w-3xl text-xl sm:text-2xl font-medium tracking-tight mt-2 text-slate-300">
        Know more about your customers than they do.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 lg:grid-cols-6">
        <BentoCard
          eyebrow="Insight"
          title="Get perfect clarity"
          description="PerkAI uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, and more."
          graphic={
            <div className="absolute inset-0 bg-gradient-to-tr from-[#11131a] to-[#1e2333] flex items-center justify-center p-8">
              <div className="w-full h-full rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-400">
                Visual Analytics Graphic
              </div>
            </div>
          }
          className="lg:col-span-3 rounded-2xl"
          fade={["bottom"]}
        />
        <BentoCard
          eyebrow="Analysis"
          title="Undercut your competitors"
          description="With advanced data mining, know which companies your leads are talking to and exactly how much they’re being charged."
          graphic={
            <div className="absolute inset-0 bg-gradient-to-tr from-[#11131a] to-[#1e2333] flex items-center justify-center p-8">
              <div className="w-full h-full rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-400">
                Competitive Analysis Graphic
              </div>
            </div>
          }
          className="lg:col-span-3 rounded-2xl"
          fade={["bottom"]}
        />
        <BentoCard
          eyebrow="Speed"
          title="Built for power users"
          description="Never been faster to cold email your entire contact list using streamlined keyboard shortcuts."
          graphic={
            <div className="absolute inset-0 bg-gradient-to-tr from-[#11131a] to-[#1e2333] flex items-center justify-center p-8">
              <div className="w-full h-full rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-400">
                Speed & Shortcuts Graphic
              </div>
            </div>
          }
          className="lg:col-span-2 rounded-2xl"
          fade={["bottom"]}
        />
        <BentoCard
          eyebrow="Source"
          title="Get the furthest reach"
          description="Source leads from unexpected places with automated verification and pipeline ingestion."
          graphic={
            <div className="absolute inset-0 bg-gradient-to-tr from-[#11131a] to-[#1e2333] flex items-center justify-center p-8">
              <div className="w-full h-full rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-400">
                Lead Sourcing Graphic
              </div>
            </div>
          }
          className="lg:col-span-2 rounded-2xl"
          fade={["bottom"]}
        />
        <BentoCard
          eyebrow="Limitless"
          title="Sell globally"
          description="Scale your reach across borders with automated compliance and international currency conversion."
          graphic={
            <div className="absolute inset-0 bg-gradient-to-tr from-[#11131a] to-[#1e2333] flex items-center justify-center p-8">
              <div className="w-full h-full rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-400">
                Global Operations Graphic
              </div>
            </div>
          }
          className="lg:col-span-2 rounded-2xl"
          fade={["bottom"]}
        />
      </div>
    </div>
  );
}
