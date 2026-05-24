"use client";

import { motion } from "framer-motion";

const words = ["Hi,", "I'm", "Cibuyy."];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  },
});

export default function Hero() {
  return (
    <section className="pt-32 md:pt-40 pb-24 md:pb-32 max-w-[1200px] mx-auto px-5 md:px-10">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16 lg:gap-24">
        {/* Left — Text */}
        <div className="flex-1 order-2 lg:order-1">
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="visible"
            className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#747878] mb-8"
          >
            Personal Space
          </motion.p>

          {/* Heading */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.05] tracking-[-0.02em] font-semibold text-[#1c1b1b] mb-6"
            aria-label="Hi, I'm Cibuyy."
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
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
            A tech learner exploring AI tools, games, creative ideas, and the
            digital world.
          </motion.p>

          {/* Body */}
          <motion.p
            variants={fadeUp(0.85)}
            initial="hidden"
            animate="visible"
            className="text-[17px] leading-[1.75] text-[#444748] mb-10 max-w-lg"
          >
            This is my personal space to introduce myself, share what I'm
            learning, and keep my social links in one simple place.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp(1.0)}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <a
              href="#socials"
              className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1c1b1b] border border-[#1c1b1b] px-8 py-3.5 hover:bg-[#1c1b1b] hover:text-[#fdf8f8] transition-all duration-200 inline-block"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#socials")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
            </a>
            <a
              href="#socials"
              className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#444748] relative group inline-block"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#socials")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Socials
              <span className="absolute -bottom-px left-0 w-0 h-px bg-[#444748] group-hover:w-full transition-all duration-300" />
            </a>
          </motion.div>
        </div>

        {/* Right — Identity Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex-shrink-0 order-1 lg:order-2"
        >
          <div className="border border-[#e5e2e1] p-8 w-72 md:w-80">
            {/* Avatar */}
            <div className="w-24 h-24 border border-[#e5e2e1] flex items-center justify-center bg-[#f7f3f2] mb-6">
              <span className="font-serif text-4xl font-semibold text-[#c4c7c7] select-none">
                C
              </span>
            </div>

            {/* Name */}
            <h2 className="font-serif text-2xl font-semibold text-[#1c1b1b] mb-1">
              Cibuyy
            </h2>
            <p className="text-[13px] text-[#747878] mb-6">
              Personal space on the internet
            </p>

            {/* Divider */}
            <div className="h-px w-full bg-[#e5e2e1] mb-6" />

            {/* Info items */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#444748] flex-shrink-0" />
                <span className="text-[13px] text-[#444748]">Based in Indonesia</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#444748] flex-shrink-0" />
                <span className="text-[13px] text-[#444748]">Learning AI tools & web dev</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#4a8c6f] flex-shrink-0" />
                <span className="text-[13px] text-[#444748]">Open to connect</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
