import AnimatedSection from "@/components/AnimatedSection";
import { SKILL_TAGS } from "@/lib/constants";

export default function CurrentlyLearning() {
  return (
    <section
      id="currently"
      className="border-t border-[#e5e2e1] py-24 md:py-32 max-w-[1200px] mx-auto px-5 md:px-10"
    >
      <AnimatedSection delay={0}>
        <div className="bg-[#f7f3f2] border-l-2 border-[#1c1b1b] p-10 md:p-16 lg:p-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Text side */}
            <div className="flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#747878] mb-6">
                Currently Learning
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#1c1b1b] leading-[1.2] mb-6">
                Learning, building,<br className="hidden md:block" /> one step at a time.
              </h2>
              <p className="text-[17px] leading-[1.75] text-[#444748] max-w-lg">
                Right now, I&rsquo;m learning more about AI coding tools, web
                development, and practical tech projects. My goal is to build
                useful things while improving step by step.
              </p>
            </div>

            {/* Tags side */}
            <div className="flex-shrink-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#747878] mb-6">
                Skills in progress
              </p>
              <div className="flex flex-wrap gap-3 max-w-xs">
                {SKILL_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#1c1b1b] border border-[#c4c7c7] px-4 py-2.5 hover:border-[#1c1b1b] transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
