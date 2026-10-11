'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CoverPage } from '@/components/storybook/CoverPage';
import { StoryReader } from '@/components/storybook/StoryReader';
import { stories, getStoryById, type Language } from '@/lib/storybook/stories';
import { useLanguage } from '@/lib/storybook/use-language';

export default function Home() {
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);
  const { language, setLang } = useLanguage();

  const selectedStory = selectedStoryId ? getStoryById(selectedStoryId) : null;

  return (
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        {!selectedStory ? (
          <motion.div
            key="cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <CoverPage
              stories={stories}
              language={language}
              onLanguageChange={setLang}
              onSelectStory={(id) => setSelectedStoryId(id)}
            />
          </motion.div>
        ) : (
          <motion.div
            key={`story-${selectedStory.id}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <StoryReader
              story={selectedStory}
              language={language}
              onLanguageChange={setLang}
              onBack={() => setSelectedStoryId(null)}
              onComplete={() => setSelectedStoryId(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
