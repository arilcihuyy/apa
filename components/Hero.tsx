"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

// Typed as tuple so TS satisfies Framer Motion's BezierDefinition (Easing) type
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

// words is now defined inside the Hero component using the localized translations

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

const fadeUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE },
  },
});

// Fix 3: SSR-safe scroll helper
function scrollTo(id: string) {
  if (typeof window === "undefined") return;
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const { t } = useLanguage();
  const words = t.hero.heading;

  return (
    <section className="pt-32 md:pt-40 pb-24 md:pb-32 max-w-[1200px] mx-auto px-5 md:px-10">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16 lg:gap-24">
        {/* Left — Text */}
        <div className="flex-1 w-full lg:max-w-[640px]">
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="visible"
            className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#747878] mb-8"
          >
            {t.hero.eyebrow}
          </motion.p>

          {/* Heading */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.05] tracking-[-0.02em] font-semibold text-[#1c1b1b] mb-6"
            aria-label={t.hero.ariaLabel}
          >
            {/* Fix 1: use word as key instead of index */}
            {words.map((word) => (
              <motion.span
                key={word}
                variants={wordVariants}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp(0.7)}
            initial="hidden"
            animate="visible"
            className="font-serif text-xl md:text-2xl text-[#444748] italic leading-[1.4] mb-6 max-w-xl"
          >
            {t.hero.subheading}
          </motion.p>

          {/* Body */}
          <motion.p
            variants={fadeUp(0.85)}
            initial="hidden"
            animate="visible"
            className="text-[17px] leading-[1.75] text-[#444748] mb-10 max-w-lg"
          >
            {t.hero.body}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp(1.0)}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            {/* Fix 3: using SSR-safe scrollTo helper */}
            <a
              href="#socials"
              className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1c1b1b] border border-[#1c1b1b] px-8 py-3.5 hover:bg-[#1c1b1b] hover:text-[#fdf8f8] transition-all duration-200 inline-block"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#socials");
              }}
            >
              {t.hero.contactBtn}
            </a>
            <a
              href="#socials"
              className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#444748] relative group inline-block"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#socials");
              }}
            >
              {t.hero.socialsBtn}
              <span className="absolute -bottom-px left-0 w-0 h-px bg-[#444748] group-hover:w-full transition-all duration-300" />
            </a>
          </motion.div>
        </div>

        {/* Right — Profile Image Portrait (Pure Cutout) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-[400px] xl:w-[460px] mx-auto lg:mx-0 flex-shrink-0"
        >
          <div className="relative aspect-[3/4] w-full bg-transparent border-0 shadow-none outline-none overflow-visible group">
            <Image
              src="/images/arilprofile.png"
              alt="Aril"
              fill
              sizes="(max-width: 768px) 100vw, 460px"
              className="object-contain transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
