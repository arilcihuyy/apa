import AnimatedSection from "@/components/AnimatedSection";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function SocialLinks() {
  return (
    <section
      id="socials"
      className="border-t border-[#e5e2e1] py-24 md:py-32 max-w-[1200px] mx-auto px-5 md:px-10"
    >
      {/* Header */}
      <AnimatedSection delay={0} className="mb-16 md:mb-20">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#747878] text-center mb-4">
          Find Me Online
        </p>
        <p className="text-center text-[17px] text-[#444748] max-w-sm mx-auto">
          Connect, follow, or say hello — I&rsquo;m easy to find.
        </p>
      </AnimatedSection>

      {/* Links */}
      <div className="flex flex-col items-center gap-1">
        {SOCIAL_LINKS.map((link, i) => (
          <AnimatedSection key={link.label} delay={i * 0.08} className="w-full">
            <a
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center justify-between max-w-2xl mx-auto py-5 border-b border-[#e5e2e1] hover:border-[#1c1b1b] transition-colors duration-200"
            >
              <span className="font-serif text-xl md:text-2xl text-[#1c1b1b] group-hover:opacity-60 transition-opacity duration-200">
                {link.label}
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#747878] group-hover:text-[#1c1b1b] group-hover:translate-x-1 transition-all duration-200">
                Visit →
              </span>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
