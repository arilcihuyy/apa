import AnimatedSection from "@/components/AnimatedSection";
import { INTEREST_ITEMS } from "@/lib/constants";

export default function Interests() {
  return (
    <section
      id="interests"
      className="border-t border-[#e5e2e1] py-24 md:py-32 max-w-[1200px] mx-auto px-5 md:px-10"
    >
      {/* Section header */}
      <AnimatedSection className="flex items-center gap-6 mb-16" delay={0}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#747878] whitespace-nowrap">
          Areas of Focus
        </p>
        <div className="h-px flex-1 bg-[#e5e2e1]" />
      </AnimatedSection>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {INTEREST_ITEMS.map((item, i) => (
          <AnimatedSection key={item.number} delay={i * 0.07}>
            <div className="border-t border-[#e5e2e1] py-8 pr-8 group">
              <span className="text-[11px] font-semibold tracking-[0.1em] text-[#c4c7c7] block mb-4">
                {item.number}
              </span>
              <h3 className="font-serif text-xl font-medium text-[#1c1b1b] mb-3 group-hover:opacity-70 transition-opacity duration-200">
                {item.title}
              </h3>
              <p className="text-[15px] leading-[1.65] text-[#444748]">
                {item.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
