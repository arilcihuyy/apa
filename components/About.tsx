import AnimatedSection from "@/components/AnimatedSection";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-[#e5e2e1] py-24 md:py-32 max-w-[1200px] mx-auto px-5 md:px-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
        {/* Left label column */}
        <AnimatedSection className="md:col-span-4 lg:col-span-3" delay={0}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#747878]">
            A little about me
          </p>
        </AnimatedSection>

        {/* Right content column */}
        <AnimatedSection className="md:col-span-8 lg:col-span-9" delay={0.15}>
          <p className="font-serif text-2xl md:text-[28px] leading-[1.45] text-[#1c1b1b] mb-6 max-w-2xl">
            I&rsquo;m interested in technology, AI tools, creative digital
            experiments, gaming, and learning how things work.
          </p>
          <p className="text-[17px] leading-[1.75] text-[#444748] max-w-xl">
            I enjoy testing new tools, understanding systems, and slowly
            building practical skills through small projects and experiments.
            There&rsquo;s something satisfying about taking something complex
            and making it simple — whether that&rsquo;s a workflow, a concept,
            or a piece of code.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
