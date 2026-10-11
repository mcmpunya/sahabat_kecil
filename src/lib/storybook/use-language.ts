'use client';

import { useState, useCallback } from 'react';
import type { Language } from './stories';

const STORAGE_KEY = 'storybook-language';

const validLanguages: Language[] = ['en', 'ms', 'id', 'ar'];

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved && (validLanguages as string[]).includes(saved)) {
    return saved as Language;
  }
  return 'en';
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  const persist = useCallback((lang: Language) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, lang);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const idx = validLanguages.indexOf(prev);
      const next = validLanguages[(idx + 1) % validLanguages.length];
      persist(next);
      return next;
    });
  }, [persist]);

  const setLang = useCallback((lang: Language) => {
    setLanguage(lang);
    persist(lang);
  }, [persist]);

  return { language, toggleLanguage, setLang };
}
