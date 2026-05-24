"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="border-t border-[#e5e2e1] py-24 md:py-32 max-w-[1200px] mx-auto px-5 md:px-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
        {/* Left label column */}
        <AnimatedSection className="md:col-span-4 lg:col-span-3" delay={0}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#747878]">
            {t.about.eyebrow}
          </p>
        </AnimatedSection>

        {/* Right content column */}
        <AnimatedSection className="md:col-span-8 lg:col-span-9" delay={0.15}>
          <p className="font-serif text-2xl md:text-[28px] leading-[1.45] text-[#1c1b1b] mb-6 max-w-2xl">
            {t.about.heading}
          </p>
          <p className="text-[17px] leading-[1.75] text-[#444748] max-w-xl">
            {t.about.body}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
