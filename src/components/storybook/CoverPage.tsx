'use client';

import { motion } from 'framer-motion';
import { Cloud, Sun, Star, Sparkle, FloatingHeart } from './scenes/Decorations';
import { LanguagePicker } from './LanguagePicker';
import type { Story, Language, LocalizedText } from '@/lib/storybook/stories';
import { ui, isRTL } from '@/lib/storybook/stories';

interface CoverPageProps {
  stories: Story[];
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onSelectStory: (id: string) => void;
}

function t(text: LocalizedText, lang: Language) {
  return text[lang];
}

export function CoverPage({ stories, language, onLanguageChange, onSelectStory }: CoverPageProps) {
  const rtl = isRTL(language);
  const arabicFontClass = rtl ? 'font-arabic' : '';

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-200 via-amber-50 to-emerald-100"
      dir={rtl ? 'rtl' : 'ltr'}
    >
      {/* Decorations */}
      <Sun className="absolute top-8 right-8 w-24 h-24 md:w-32 md:h-32" />
      <Cloud className="absolute top-12 left-8 w-32 h-16" delay={0} />
      <Cloud className="absolute top-24 right-1/4 w-24 h-12" delay={2} />
      <Cloud className="absolute top-40 left-1/3 w-28 h-14" delay={1} />
      <Star className="absolute top-20 left-1/4 w-6 h-6" delay={0} color="#FBBF24" />
      <Star className="absolute top-32 right-12 w-8 h-8" delay={1} color="#FCD34D" />
      <Sparkle className="absolute top-16 left-1/2 w-8 h-8" delay={0.5} color="#F59E0B" />
      <FloatingHeart className="absolute top-1/2 right-8 w-8 h-8" delay={0} />
      <FloatingHeart className="absolute top-1/3 left-4 w-7 h-7" delay={1.5} />

      {/* Language picker - top left floating */}
      <LanguagePicker language={language} onChange={onLanguageChange} variant="floating" />

      {/* Header */}
      <motion.div
        className="relative z-10 pt-16 pb-8 px-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm mb-4 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          <span className="text-2xl">📖</span>
          <span className="text-sm font-semibold text-emerald-700">{ui.appTagline[language]}</span>
        </motion.div>
        <motion.h1
          className={`text-5xl md:text-7xl font-extrabold text-emerald-700 drop-shadow-lg ${arabicFontClass}`}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: 'spring', bounce: 0.4 }}
          style={{
            textShadow: '3px 3px 0 white, 5px 5px 0 rgba(16, 185, 129, 0.2)',
          }}
        >
          {language === 'en' ? "Stories of the Prophet's Companions" : ui.appName[language]}
        </motion.h1>
        <motion.p
          className={`text-lg md:text-2xl text-amber-700 font-bold mt-3 ${arabicFontClass}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {ui.subtitleLine[language]}
        </motion.p>
        <motion.p
          className={`text-sm md:text-base text-emerald-600 mt-2 font-medium ${arabicFontClass}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {ui.tapToBegin[language]}
        </motion.p>
      </motion.div>

      {/* Story cards */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stories.map((story, idx) => (
            <motion.button
              key={story.id}
              onClick={() => onSelectStory(story.id)}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-shadow text-left"
              style={{
                background: `linear-gradient(135deg, ${story.gradientFrom}, ${story.gradientTo})`,
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + idx * 0.15, type: 'spring', bounce: 0.3 }}
              whileHover={{ scale: 1.03, rotate: idx % 2 === 0 ? -1 : 1 }}
              whileTap={{ scale: 0.98 }}
              dir={rtl ? 'rtl' : 'ltr'}
            >
              {/* Decorative emojis on corners */}
              <div className="absolute top-2 right-2 text-3xl opacity-70 group-hover:scale-125 transition-transform">
                {story.emoji === 'star' && '⭐'}
                {story.emoji === 'check' && '✅'}
                {story.emoji === 'heart' && '💖'}
                {story.emoji === 'crown' && '👑'}
              </div>
              <div className="absolute bottom-2 left-2 text-2xl opacity-50 group-hover:scale-110 transition-transform">
                📖
              </div>

              {/* Sparkles on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              >
                <Sparkle className="absolute top-4 left-4 w-4 h-4" delay={0} color={story.accentColor} />
                <Sparkle className="absolute bottom-4 right-4 w-5 h-5" delay={0.5} color={story.accentColor} />
              </motion.div>

              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-3xl md:text-4xl shadow-lg"
                    style={{ background: 'rgba(255,255,255,0.6)' }}
                  >
                    {story.emoji === 'star' && '🌟'}
                    {story.emoji === 'check' && '🤝'}
                    {story.emoji === 'heart' && '💝'}
                    {story.emoji === 'crown' && '🦁'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2
                      className={`text-xl md:text-2xl font-extrabold leading-tight ${arabicFontClass}`}
                      style={{ color: story.accentColor }}
                    >
                      {t(story.title, language)}
                    </h2>
                    <p
                      className={`text-sm md:text-base font-medium opacity-80 mt-1 ${arabicFontClass}`}
                      style={{ color: story.accentColor }}
                    >
                      {t(story.subtitle, language)}
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <span
                        className="px-2 py-0.5 rounded-full text-xs font-bold"
                        style={{ background: story.accentColor, color: 'white' }}
                      >
                        {story.sahabatName}
                      </span>
                    </div>
                    <p
                      className={`text-xs md:text-sm mt-2 font-medium opacity-70 ${arabicFontClass}`}
                      style={{ color: story.accentColor }}
                    >
                      {t(story.meaning, language)} • {story.pages.length} {ui.pages[language]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Read button */}
              <div className="px-6 pb-6 md:px-8 md:pb-8">
                <div
                  className="flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-white shadow-md group-hover:shadow-lg transition-all"
                  style={{ background: story.accentColor }}
                >
                  <span className="text-base md:text-lg">{ui.readStory[language]}</span>
                  <span className="text-xl group-hover:translate-x-1 transition-transform">{rtl ? '←' : '→'}</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Footer info */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <p
            className={`text-sm text-emerald-700 font-medium ${arabicFontClass}`}
          >
            ✨ {ui.footerLine[language]} ✨
          </p>
        </motion.div>
      </div>

      {/* Bottom decorations */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none">
        <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full">
          <path d="M 0 10 Q 25 5 50 8 T 100 6 L 100 20 L 0 20 Z" fill="#86EFAC" opacity="0.6" />
          <path d="M 0 15 Q 25 12 50 14 T 100 12 L 100 20 L 0 20 Z" fill="#22C55E" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
}
