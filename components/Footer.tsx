"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[#e5e2e1] bg-[#fdf8f8]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
          <span className="font-serif text-lg font-semibold text-[#1c1b1b]">
            {t.footer.brand}
          </span>
          <span className="hidden md:block text-[#c4c7c7]">—</span>
          <p className="text-[13px] text-[#747878]">
            {t.footer.copyright}
          </p>
        </div>
        <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#c4c7c7]">
          {t.footer.madeWith}
        </p>
      </div>
    </footer>
  );
}
