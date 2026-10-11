'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SceneRenderer } from './scenes/SceneRenderer';
import { LanguagePicker } from './LanguagePicker';
import type { Story, Language, LocalizedText } from '@/lib/storybook/stories';
import { ui, isRTL } from '@/lib/storybook/stories';
import { useNarration } from '@/lib/storybook/use-narration';

interface StoryReaderProps {
  story: Story;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onBack: () => void;
  onComplete: () => void;
}

function t(text: LocalizedText, lang: Language) {
  return text[lang];
}

export function StoryReader({ story, language, onLanguageChange, onBack, onComplete }: StoryReaderProps) {
  const [pageIndex, setPageIndex] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const [autoNarrate, setAutoNarrate] = useState(true);
  const [showLesson, setShowLesson] = useState(false);

  const { narrate, stop, isNarrating } = useNarration();

  const currentPage = story.pages[pageIndex];
  const isLastPage = pageIndex === story.pages.length - 1;
  const progress = ((pageIndex + 1) / story.pages.length) * 100;
  const rtl = isRTL(language);

  const goToPage = useCallback((newIndex: number) => {
    setTriggered(false);
    setShowLesson(false);
    setPageIndex(newIndex);
  }, []);

  // Auto-narrate on page change (and when language changes)
  useEffect(() => {
    if (!autoNarrate) {
      stop();
      return;
    }
    const timer = setTimeout(() => {
      narrate(currentPage.narration[language], language);
    }, 600);
    return () => {
      clearTimeout(timer);
      stop();
    };
  }, [pageIndex, autoNarrate, narrate, stop, currentPage.narration, language]);

  const handleNext = () => {
    if (isLastPage) {
      stop();
      setShowLesson(true);
    } else {
      goToPage(pageIndex + 1);
    }
  };

  const handlePrev = () => {
    if (pageIndex > 0) {
      goToPage(pageIndex - 1);
    }
  };

  const handleTrigger = () => {
    setTriggered(true);
    // Re-narrate if not currently playing
    if (!isNarrating) {
      narrate(currentPage.narration[language], language);
    }
  };

  const handleReplayNarration = () => {
    narrate(currentPage.narration[language], language);
  };

  const arabicFontClass = rtl ? 'font-arabic' : '';

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${story.gradientFrom}, ${story.gradientTo})`,
      }}
      dir={rtl ? 'rtl' : 'ltr'}
    >
      {/* Top bar */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md shadow-md">
        <div className="max-w-5xl mx-auto px-3 py-3 flex items-center gap-2 sm:gap-3">
          {/* Back button */}
          <button
            onClick={() => {
              stop();
              onBack();
            }}
            className="flex items-center gap-1 px-3 py-2 rounded-full bg-white shadow hover:scale-105 transition-transform"
            aria-label={ui.backToStories[language]}
          >
            <span className="text-lg">{rtl ? '→' : '←'}</span>
            <span className="hidden sm:inline text-sm font-semibold" style={{ color: story.accentColor }}>
              {ui.back[language]}
            </span>
          </button>

          {/* Story title */}
          <div className="flex-1 min-w-0">
            <h2
              className="text-base md:text-xl font-extrabold truncate"
              style={{ color: story.accentColor }}
            >
              {t(story.title, language)}
            </h2>
            <p
              className="text-xs opacity-70 truncate"
              style={{ color: story.accentColor }}
            >
              {story.sahabatName} • {ui.page[language]} {pageIndex + 1} {ui.of[language]} {story.pages.length}
            </p>
          </div>

          {/* Language picker - inline */}
          <LanguagePicker language={language} onChange={onLanguageChange} variant="inline" accentColor={story.accentColor} />

          {/* Narration toggle */}
          <button
            onClick={() => {
              const newAuto = !autoNarrate;
              setAutoNarrate(newAuto);
              if (!newAuto) {
                stop();
              }
            }}
            className={`flex items-center gap-1 px-3 py-2 rounded-full shadow hover:scale-105 transition-all ${
              autoNarrate ? 'bg-white text-emerald-600' : 'bg-gray-200 text-gray-600'
            }`}
            aria-label={ui.toggleNarration[language]}
            title={autoNarrate ? ui.narrationOn[language] : ui.narrationOff[language]}
          >
            <span className="text-lg">{autoNarrate ? '🔊' : '🔇'}</span>
          </button>

          {/* Replay narration */}
          <button
            onClick={handleReplayNarration}
            className="flex items-center gap-1 px-3 py-2 rounded-full bg-white shadow hover:scale-105 transition-transform"
            aria-label={ui.replayNarration[language]}
            title={ui.replayNarration[language]}
          >
            <span className={`text-lg ${isNarrating ? 'animate-pulse' : ''}`}>
              🔁
            </span>
          </button>
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-white/50">
          <motion.div
            className="h-full rounded-r-full"
            style={{ background: story.accentColor }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-3 py-4 md:py-6">
        {/* Illustration */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pageIndex}
            initial={{ opacity: 0, x: rtl ? -50 : 50, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            exit={{ opacity: 0, x: rtl ? 50 : -50, rotate: -2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative w-full aspect-[4/3] md:aspect-[16/10] rounded-3xl shadow-2xl overflow-hidden mb-4"
          >
            <SceneRenderer
              storyId={story.id}
              illustrationKey={currentPage.illustrationKey}
              triggered={triggered}
              onTrigger={handleTrigger}
            />
          </motion.div>
        </AnimatePresence>

        {/* Interactive hint */}
        <AnimatePresence>
          {!triggered && currentPage.interactiveHint && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center justify-center gap-2 mb-3"
            >
              <motion.span
                className="text-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                👆
              </motion.span>
              <span
                className={`text-sm md:text-base font-semibold px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm ${arabicFontClass}`}
                style={{ color: story.accentColor }}
              >
                {t(currentPage.interactiveHint, language)}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Story text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${pageIndex}-${language}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-5 md:p-7 shadow-lg mb-6"
          >
            <div className="flex items-start gap-3">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-md"
                style={{ background: story.accentColor }}
              >
                <span className="text-white">📖</span>
              </div>
              <p
                className={`text-lg md:text-2xl font-semibold leading-relaxed flex-1 ${arabicFontClass}`}
                style={{ color: story.accentColor }}
              >
                {t(currentPage.text, language)}
              </p>
            </div>
            {/* Narrating indicator */}
            {isNarrating && (
              <motion.div
                className="flex items-center gap-1 mt-3 ml-13"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {[0, 1, 2, 3].map((i) => (
                  <motion.span
                    key={i}
                    className="w-1.5 rounded-full"
                    style={{ background: story.accentColor }}
                    animate={{ height: [4, 16, 4], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                  />
                ))}
                <span className="text-xs ml-2 opacity-60" style={{ color: story.accentColor }}>
                  {`${ui.reading[language]}...`}
                </span>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between gap-3">
          {/* Previous */}
          <button
            onClick={handlePrev}
            disabled={pageIndex === 0}
            className={`flex items-center gap-2 px-5 py-3 md:px-6 md:py-4 rounded-2xl font-bold shadow-lg transition-all ${
              pageIndex === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:scale-105 active:scale-95'
            }`}
            aria-label={ui.previous[language]}
          >
            <span className="text-xl">{rtl ? '→' : '←'}</span>
            <span className="hidden sm:inline">{ui.previous[language]}</span>
          </button>

          {/* Page dots */}
          <div className="flex items-center gap-1.5">
            {story.pages.map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i)}
                className={`rounded-full transition-all ${
                  i === pageIndex
                    ? 'w-8 h-3'
                    : 'w-3 h-3 hover:scale-125'
                }`}
                style={{
                  background: i === pageIndex ? story.accentColor : 'rgba(255,255,255,0.7)',
                }}
                aria-label={`${ui.goToPage[language]} ${i + 1}`}
              />
            ))}
          </div>

          {/* Next or Finish */}
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-5 py-3 md:px-6 md:py-4 rounded-2xl font-bold text-white shadow-lg hover:scale-105 active:scale-95 transition-all"
            style={{ background: story.accentColor }}
            aria-label={isLastPage ? ui.lesson[language] : ui.next[language]}
          >
            <span className="hidden sm:inline">{isLastPage ? ui.lesson[language] : ui.next[language]}</span>
            <span className="text-xl">{isLastPage ? '🎯' : rtl ? '←' : '→'}</span>
          </button>
        </div>
      </div>

      {/* Lesson modal */}
      <AnimatePresence>
        {showLesson && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLesson(false)}
          >
            <motion.div
              className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl"
              initial={{ scale: 0.5, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 50 }}
              transition={{ type: 'spring', bounce: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              dir={rtl ? 'rtl' : 'ltr'}
            >
              {/* Decorations */}
              <div className="flex justify-center gap-2 mb-4">
                <motion.span
                  className="text-3xl"
                  animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ⭐
                </motion.span>
                <motion.span
                  className="text-3xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  💝
                </motion.span>
                <motion.span
                  className="text-3xl"
                  animate={{ rotate: [0, -15, 15, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                >
                  🌟
                </motion.span>
              </div>

              <h3
                className={`text-2xl md:text-3xl font-extrabold text-center mb-2 ${arabicFontClass}`}
                style={{ color: story.accentColor }}
              >
                {t(story.lessonTitle, language)}
              </h3>
              <p
                className={`text-base md:text-lg text-center text-gray-700 mb-6 leading-relaxed ${arabicFontClass}`}
              >
                {t(story.lessonText, language)}
              </p>

              {/* Sahabat signature */}
              <div className="text-center mb-6">
                <p className="text-sm text-gray-500 font-medium">{ui.theSahabah[language]}</p>
                <p className="text-lg font-bold" style={{ color: story.accentColor }}>
                  {story.sahabatName}
                </p>
                <p
                  className={`text-sm text-gray-600 ${arabicFontClass}`}
                >
                  {t(story.meaning, language)}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    goToPage(0);
                    setShowLesson(false);
                  }}
                  className="w-full py-3 rounded-2xl font-bold text-white shadow-md hover:scale-[1.02] active:scale-95 transition-all"
                  style={{ background: story.accentColor }}
                >
                  🔁 {ui.readAgain[language]}
                </button>
                <button
                  onClick={() => {
                    stop();
                    onComplete();
                  }}
                  className="w-full py-3 rounded-2xl font-bold bg-emerald-500 text-white shadow-md hover:scale-[1.02] active:scale-95 transition-all"
                >
                  ✨ {ui.chooseAnotherStory[language]}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
