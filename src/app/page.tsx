'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CoverPage } from '@/components/storybook/CoverPage';
import { StoryReader } from '@/components/storybook/StoryReader';
import { stories, getStoryById } from '@/lib/storybook/stories';

export default function Home() {
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);

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
              onBack={() => setSelectedStoryId(null)}
              onComplete={() => setSelectedStoryId(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
