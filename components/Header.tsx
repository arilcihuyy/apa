"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { useLanguage } from "@/lib/LanguageContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const getNavLinkLabel = (href: string) => {
    switch (href) {
      case "#about":
        return t.nav.about;
      case "#interests":
        return t.nav.interests;
      case "#currently":
        return t.nav.currently;
      case "#socials":
        return t.nav.socials;
      default:
        return "";
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fdf8f8]/90 backdrop-blur-md border-b border-[#e5e2e1]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          className="font-serif text-xl font-semibold text-[#1c1b1b] tracking-tight hover:opacity-70 transition-opacity duration-200"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Aril
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#444748] hover:text-[#1c1b1b] transition-colors duration-200 relative group"
            >
              {getNavLinkLabel(link.href)}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#1c1b1b] transition-all duration-250 group-hover:w-full" />
            </a>
          ))}

          {/* Language Switcher */}
          <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#747878]">
            <button
              onClick={() => setLanguage("id")}
              className={`hover:text-[#1c1b1b] transition-colors duration-200 ${
                language === "id" ? "text-[#1c1b1b] underline underline-offset-4" : ""
              }`}
            >
              ID
            </button>
            <span className="text-[#c4c7c7] select-none">/</span>
            <button
              onClick={() => setLanguage("en")}
              className={`hover:text-[#1c1b1b] transition-colors duration-200 ${
                language === "en" ? "text-[#1c1b1b] underline underline-offset-4" : ""
              }`}
            >
              EN
            </button>
          </div>

          <a
            href="#socials"
            onClick={(e) => handleNavClick(e, "#socials")}
            className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1c1b1b] border border-[#1c1b1b] px-4 py-2 hover:bg-[#1c1b1b] hover:text-[#fdf8f8] transition-all duration-200"
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-px bg-[#1c1b1b] transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#1c1b1b] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#1c1b1b] transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden overflow-hidden bg-[#fdf8f8] border-b border-[#e5e2e1]"
          >
            <nav className="px-5 py-6 flex flex-col gap-4" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#444748] hover:text-[#1c1b1b] py-2 border-b border-[#e5e2e1] transition-colors"
                >
                  {getNavLinkLabel(link.href)}
                </motion.a>
              ))}
              <a
                href="#socials"
                onClick={(e) => handleNavClick(e, "#socials")}
                className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1c1b1b] border border-[#1c1b1b] px-4 py-3 text-center hover:bg-[#1c1b1b] hover:text-[#fdf8f8] transition-all duration-200 mt-2"
              >
                {t.nav.contact}
              </a>

              {/* Mobile Language Switcher */}
              <div className="flex items-center justify-center gap-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#747878] mt-4 pt-4 border-t border-[#e5e2e1]">
                <button
                  onClick={() => setLanguage("id")}
                  className={`hover:text-[#1c1b1b] py-2 transition-colors duration-200 ${
                    language === "id" ? "text-[#1c1b1b] underline underline-offset-4" : ""
                  }`}
                >
                  ID
                </button>
                <span className="text-[#c4c7c7] select-none">|</span>
                <button
                  onClick={() => setLanguage("en")}
                  className={`hover:text-[#1c1b1b] py-2 transition-colors duration-200 ${
                    language === "en" ? "text-[#1c1b1b] underline underline-offset-4" : ""
                  }`}
                >
                  EN
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
