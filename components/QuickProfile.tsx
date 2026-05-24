"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/lib/LanguageContext";

export default function QuickProfile() {
  const { t } = useLanguage();

  return (
    <section className="border-t border-[#e5e2e1] py-24 md:py-32 max-w-[1200px] mx-auto px-5 md:px-10">
      <AnimatedSection delay={0}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#747878] mb-10">
          {t.quickProfile.eyebrow}
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e5e2e1]">
        {t.quickProfile.items.map((item, i) => (
          <AnimatedSection key={item.label} delay={i * 0.08} className="h-full">
            <div className="bg-[#fdf8f8] px-6 py-8 h-full hover:bg-[#f7f3f2] transition-colors duration-200">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#747878] mb-3">
                {item.label}
              </p>
              <p className="font-serif text-xl text-[#1c1b1b] leading-[1.3]">
                {item.value}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
