"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";

type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.id;
  isMounted: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_lang") as Language;
    if (saved === "id" || saved === "en") {
      setLanguageState(saved);
    }
    setIsMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio_lang", lang);
  };

  // Use "id" translations during server rendering and initial hydration,
  // then switch to the client's chosen language.
  const currentLanguage = isMounted ? language : "id";
  const t = translations[currentLanguage];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isMounted }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
