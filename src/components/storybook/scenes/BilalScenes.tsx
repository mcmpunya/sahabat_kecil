'use client';

import { motion } from 'framer-motion';
import {
  Sun, Cloud, PalmTree, Ground, Heart, FloatingHeart, Star, Sparkle, SoundWaves,
} from './Decorations';
import { CharacterFigure, Bird } from './Characters';

interface SceneProps {
  triggered: boolean;
  onTrigger: () => void;
}

// Scene 1: Bilal introduction - Bilal under the sun
export function BilalIntro({ triggered, onTrigger }: SceneProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      {/* Sky background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-amber-50" />
      {/* Sun - interactive */}
      <Sun
        className="absolute top-6 right-8 w-24 h-24 md:w-32 md:h-32"
        onClick={onTrigger}
      />
      {triggered && (
        <>
          <Sparkle className="absolute top-2 right-2 w-6 h-6" delay={0} />
          <Sparkle className="absolute top-20 left-12 w-8 h-8" delay={0.5} color="#FCD34D" />
          <Sparkle className="absolute top-32 right-32 w-5 h-5" delay={1} />
        </>
      )}
      <Cloud className="absolute top-10 left-10 w-32 h-16" delay={0} />
      <Cloud className="absolute top-20 left-1/2 w-24 h-12" delay={2} />
      {/* Ground */}
      <Ground color="#86EFAC" />
      {/* Bilal character */}
      <CharacterFigure
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-48 md:w-40 md:h-56"
        robeColor="#10B981"
        skinColor="#FBBF24"
        onClick={onTrigger}
        waving={triggered}
      />
      {/* Birds */}
      <Bird className="absolute top-12 left-0 w-10 h-6" delay={0} />
      <Bird className="absolute top-20 right-1/4 w-8 h-5" delay={3} />
      {/* Palm trees */}
      <PalmTree className="absolute bottom-0 left-2 w-24 h-40 md:w-32 md:h-48" sway />
      <PalmTree className="absolute bottom-0 right-2 w-24 h-40 md:w-32 md:h-48" sway />
    </div>
  );
}

// Scene 2: Bilal's voice - sound waves coming out
export function BilalVoice({ triggered, onTrigger }: SceneProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 via-purple-50 to-pink-50" />
      <Cloud className="absolute top-6 left-8 w-24 h-12" delay={0} />
      {/* Bilal with sound waves */}
      <CharacterFigure
        className="absolute bottom-4 left-1/4 w-32 h-48 md:w-40 md:h-56"
        robeColor="#10B981"
        skinColor="#FBBF24"
        onClick={onTrigger}
        waving={false}
      />
      {/* Sound waves */}
      <SoundWaves
        className={`absolute top-1/3 left-1/2 w-1/2 h-12 transition-opacity ${triggered ? 'opacity-100' : 'opacity-60'}`}
        color="#8B5CF6"
      />
      {triggered && (
        <>
          <motion.div
            className="absolute top-1/3 left-1/2"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: [0, 3], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-20 h-20 rounded-full border-4 border-purple-400" />
          </motion.div>
          <Sparkle className="absolute top-1/4 left-1/2 w-8 h-8" delay={0} color="#A855F7" />
          <Sparkle className="absolute top-1/2 right-1/4 w-6 h-6" delay={0.3} color="#EC4899" />
        </>
      )}
      {/* Listening people */}
      <CharacterFigure
        className="absolute bottom-4 right-8 w-24 h-40 md:w-32 md:h-48"
        robeColor="#3B82F6"
        skinColor="#FBBF24"
        onClick={onTrigger}
        waving={false}
      />
      <Ground color="#A7F3D0" />
    </div>
  );
}

// Scene 3: Bilal learning Islam with Prophet (abstract)
export function BilalLearning({ triggered, onTrigger }: SceneProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-100 via-teal-50 to-amber-50" />
      <Sun className="absolute top-6 right-8 w-20 h-20" onClick={onTrigger} />
      <Cloud className="absolute top-12 left-12 w-28 h-14" delay={1} />
      <Ground color="#6EE7B7" />
      {/* Two characters - teacher and student */}
      <CharacterFigure
        className="absolute bottom-4 left-1/4 w-28 h-44 md:w-36 md:h-52"
        robeColor="#059669"
        skinColor="#FBBF24"
        onClick={onTrigger}
        waving={triggered}
      />
      <CharacterFigure
        className="absolute bottom-4 right-1/4 w-28 h-44 md:w-36 md:h-52"
        robeColor="#10B981"
        skinColor="#FBBF24"
        onClick={onTrigger}
      />
      {/* Hearts between them - learning love */}
      {triggered ? (
        <>
          <FloatingHeart className="absolute top-1/3 left-1/2 w-8 h-8" delay={0} />
          <FloatingHeart className="absolute top-1/2 left-1/2 w-6 h-6" delay={0.5} x={20} />
          <FloatingHeart className="absolute top-1/3 left-1/2 w-7 h-7" delay={1} x={-20} />
        </>
      ) : (
        <>
          <Heart className="absolute top-1/3 left-1/2 w-8 h-8 -translate-x-1/2" />
        </>
      )}
      {/* Book */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-20 h-16"
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 100 80" className="w-full h-full">
          <rect x="10" y="15" width="80" height="55" rx="3" fill="#F59E0B" />
          <rect x="15" y="20" width="35" height="45" fill="#FFFBEB" />
          <rect x="50" y="20" width="35" height="45" fill="#FFFBEB" />
          <line x1="50" y1="20" x2="50" y2="65" stroke="#92400E" strokeWidth="2" />
          <line x1="20" y1="30" x2="45" y2="30" stroke="#D1D5DB" strokeWidth="1" />
          <line x1="20" y1="35" x2="45" y2="35" stroke="#D1D5DB" strokeWidth="1" />
          <line x1="55" y1="30" x2="80" y2="30" stroke="#D1D5DB" strokeWidth="1" />
          <line x1="55" y1="35" x2="80" y2="35" stroke="#D1D5DB" strokeWidth="1" />
        </svg>
      </motion.div>
    </div>
  );
}

// Scene 4: Bilal being brave - heavy rock on chest, but praying
export function BilalBrave({ triggered, onTrigger }: SceneProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-200 via-amber-100 to-yellow-50" />
      <Sun className="absolute top-8 right-10 w-24 h-24" onClick={onTrigger} />
      <Cloud className="absolute top-12 left-8 w-28 h-14" delay={0} />
      <Ground color="#FCD34D" />
      {/* Bilal kneeling/praying */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={onTrigger}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={triggered ? { scale: [1, 1.1, 1] } : {}}
        transition={triggered ? { duration: 1, repeat: 5 } : {}}
      >
        <svg viewBox="0 0 100 120" className="w-32 h-40 md:w-40 md:h-48">
          {/* Kneeling body */}
          <ellipse cx="50" cy="95" rx="35" ry="15" fill="#10B981" />
          {/* Body/torso */}
          <path d="M 35 95 L 40 50 L 60 50 L 65 95 Z" fill="#10B981" />
          {/* Head */}
          <circle cx="50" cy="40" r="14" fill="#FBBF24" />
          {/* Head covering */}
          <path d="M 36 42 Q 35 25 50 25 Q 65 25 64 42 Q 60 32 50 30 Q 40 32 36 42 Z" fill="#059669" />
          {/* Arms raised in prayer */}
          <ellipse cx="35" cy="55" rx="4" ry="14" fill="#10B981" transform="rotate(-30 35 55)" />
          <ellipse cx="65" cy="55" rx="4" ry="14" fill="#10B981" transform="rotate(30 65 55)" />
          {/* Hands together */}
          <circle cx="50" cy="42" r="5" fill="#FBBF24" />
          {/* Knees */}
          <ellipse cx="40" cy="100" rx="8" ry="4" fill="#059669" />
          <ellipse cx="60" cy="100" rx="8" ry="4" fill="#059669" />
        </svg>
      </motion.div>
      {/* Strength sparkles */}
      {triggered && (
        <>
          <Sparkle className="absolute top-1/4 left-1/4 w-8 h-8" delay={0} color="#F59E0B" />
          <Sparkle className="absolute top-1/3 right-1/4 w-10 h-10" delay={0.3} color="#F59E0B" />
          <Sparkle className="absolute top-1/2 left-1/3 w-6 h-6" delay={0.6} color="#FCD34D" />
          <Sparkle className="absolute top-20 right-1/3 w-7 h-7" delay={0.9} color="#FBBF24" />
          {/* Strength aura */}
          <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.5, 0], scale: [0.5, 1.5, 2] }}
            transition={{ duration: 2, repeat: 5 }}
            style={{ background: 'radial-gradient(circle, #FCD34D 0%, transparent 70%)' }}
          />
        </>
      )}
    </div>
  );
}

// Scene 5: Bilal calling adzan - stars, mosque, joy
export function BilalAdzan({ triggered, onTrigger }: SceneProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-purple-800 to-indigo-600" />
      {/* Stars in the sky */}
      <Star className="absolute top-4 left-8 w-5 h-5" delay={0} />
      <Star className="absolute top-12 right-1/4 w-6 h-6" delay={0.5} />
      <Star className="absolute top-20 left-1/3 w-4 h-4" delay={1} />
      <Star className="absolute top-6 right-8 w-7 h-7" delay={1.5} />
      {/* Moon */}
      <Sun className="absolute top-4 right-8 w-20 h-20" onClick={onTrigger} />
      {/* Mosque silhouette */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-32 md:w-64 md:h-40">
        <svg viewBox="0 0 200 150" className="w-full h-full">
          {/* Minarets */}
          <rect x="30" y="60" width="10" height="90" fill="#1E40AF" />
          <circle cx="35" cy="60" r="8" fill="#3B82F6" />
          <rect x="160" y="60" width="10" height="90" fill="#1E40AF" />
          <circle cx="165" cy="60" r="8" fill="#3B82F6" />
          {/* Main building */}
          <rect x="60" y="80" width="80" height="70" fill="#1E40AF" />
          {/* Dome */}
          <path d="M 60 80 Q 100 20 140 80 Z" fill="#3B82F6" />
          {/* Door */}
          <path d="M 85 150 L 85 120 Q 100 105 115 120 L 115 150 Z" fill="#FCD34D" />
          {/* Windows */}
          <rect x="70" y="100" width="10" height="15" rx="5" fill="#FCD34D" opacity="0.8" />
          <rect x="120" y="100" width="10" height="15" rx="5" fill="#FCD34D" opacity="0.8" />
          {/* Crescent */}
          <line x1="100" y1="20" x2="100" y2="10" stroke="#FCD34D" strokeWidth="1.5" />
          <path d="M 95 7 A 5 5 0 1 0 105 7 A 4 4 0 1 1 95 7" fill="#FCD34D" />
        </svg>
      </div>
      {/* Bilal standing in front */}
      <CharacterFigure
        className="absolute bottom-4 left-12 w-24 h-36 md:w-32 md:h-44"
        robeColor="#10B981"
        skinColor="#FBBF24"
        onClick={onTrigger}
        waving={triggered}
      />
      {/* Sound waves from Bilal */}
      <SoundWaves className="absolute bottom-1/3 left-8 w-1/2 h-12" color="#FCD34D" />
      {/* Celebration stars */}
      {triggered && (
        <>
          <Sparkle className="absolute top-1/3 left-1/4 w-8 h-8" delay={0} color="#FBBF24" />
          <Sparkle className="absolute top-1/2 right-1/4 w-10 h-10" delay={0.3} color="#FCD34D" />
          <Sparkle className="absolute top-20 left-1/3 w-6 h-6" delay={0.6} color="#FBBF24" />
          <Sparkle className="absolute bottom-1/4 right-1/3 w-7 h-7" delay={0.9} color="#FCD34D" />
          <Sparkle className="absolute top-1/3 right-1/4 w-8 h-8" delay={1.2} color="#FBBF24" />
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 2, repeat: 5 }}
            style={{ background: 'radial-gradient(circle, #FBBF24 0%, transparent 60%)' }}
          />
        </>
      )}
    </div>
  );
}
