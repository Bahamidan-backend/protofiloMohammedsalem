import React from "react";
import AboutUsSection from "@/components/ui/about-us-section";
import { TiltedGridHero } from "@/components/ui/tilted-grid-hero";
import { getAssetUrl } from "@/lib/utils";

const DemoOne = () => {
  return <AboutUsSection />;
};

export { DemoOne };
export default DemoOne;

// Mohammed Bahumaidan - Production Brands & Systems Showcase
const IMAGES = [
  {
    src: getAssetUrl("/logos/nexcash-logo.jpg"),
    alt: "شعار وهوية نظام NexCash المحاسبي ونقاط البيع (NexCash ERP & POS)",
  },
  {
    src: getAssetUrl("/logos/rental-saas-logo.jpg"),
    alt: "شعار وهوية منصة سلس لتأجير الموارد (Salis Rental SaaS)",
  },
  {
    src: getAssetUrl("/logos/nuqtat-wasl-logo.jpg"),
    alt: "شعار وهوية تطبيق نقطة وصل للأماكن الخدمية (Nuqtat Wasl Platform)",
  },
  {
    src: getAssetUrl("/logos/fondoki-logo.jpg"),
    alt: "شعار وهوية نظام فندقي لإدارة المنشآت الفندقية (Fondoki Hotel System)",
  },
  {
    src: getAssetUrl("/logos/rental-saas-logo.jpg"),
    alt: "Salis Rental Cloud SaaS Brand Identity",
  },
  {
    src: getAssetUrl("/logos/nexcash-logo.jpg"),
    alt: "NexCash Brand Identity",
  },
  {
    src: getAssetUrl("/logos/nuqtat-wasl-logo.jpg"),
    alt: "Nuqtat Wasl Brand Identity",
  },
  {
    src: getAssetUrl("/logos/fondoki-logo.jpg"),
    alt: "Fondoki Brand Identity",
  },
];

export function TiltedGridHeroDemo() {
  return (
    <TiltedGridHero
      images={IMAGES}
      className="h-[580px] w-full rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#050609] shadow-2xl"
      speed={3.5}
      curve={80}
    >
      <div className="relative z-10 flex h-full flex-col items-center justify-between py-12 text-center pointer-events-auto">
        <div className="px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(250,204,21,0.3)] bg-[rgba(250,204,21,0.08)] px-4 py-1.5 text-xs font-bold tracking-wider text-[#facc15] uppercase mb-4">
            معرض الأنظمة والمشاريع الحية • LIVE PRODUCTION SYSTEMS
          </div>
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            أنظمة برمجية مؤسسية
            <br />
            <span className="text-[#facc15]">تصنع فارقاً حقيقياً</span>
          </h2>
        </div>
        <p className="max-w-xl text-balance px-6 text-sm text-[#94a3b8] leading-relaxed">
          استعراض ثلاثي الأبعاد لواجهات المشاريع الحقيقية: نظام NexCash لنقاط البيع وإدارة الموارد (POS & ERP)، منصة التأجير السحابية (Rental SaaS)، وتطبيق نقطة وصل لتقييم المطاعم.
        </p>
      </div>
    </TiltedGridHero>
  );
}
