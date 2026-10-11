'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { languages, type Language } from '@/lib/storybook/stories';

interface LanguagePickerProps {
  language: Language;
  onChange: (lang: Language) => void;
  variant?: 'floating' | 'inline';
  accentColor?: string;
}

export function LanguagePicker({ language, onChange, variant = 'floating', accentColor = '#059669' }: LanguagePickerProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const current = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [open]);

  const baseClasses = variant === 'floating'
    ? 'fixed top-4 left-4 z-40'
    : 'relative';

  return (
    <div ref={containerRef} className={baseClasses}>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white shadow-lg hover:scale-105 active:scale-95 transition-transform"
        whileTap={{ scale: 0.95 }}
        aria-label="Switch language"
        aria-expanded={open}
      >
        <span className="text-lg">🌐</span>
        <span className="text-xs font-bold" style={{ color: accentColor }}>
          {current.flag} {current.code.toUpperCase()}
        </span>
        <motion.span
          className="text-[10px] opacity-60"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▼
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 left-0 bg-white rounded-2xl shadow-2xl overflow-hidden min-w-[180px] py-1.5 border border-gray-100"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  onChange(lang.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-emerald-50 transition-colors text-left ${
                  lang.code === language ? 'bg-emerald-50' : ''
                }`}
                dir={lang.rtl ? 'rtl' : 'ltr'}
              >
                <span className="text-xl">{lang.flag}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-gray-800">{lang.nativeLabel}</div>
                  <div className="text-xs text-gray-500">{lang.label}</div>
                </div>
                {lang.code === language && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-emerald-600 text-base"
                  >
                    ✓
                  </motion.span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
