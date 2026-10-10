'use client';

import { motion } from 'framer-motion';
import {
  Sun, Cloud, Ground, Heart, FloatingHeart, Star, Sparkle, FoodBasket, Crown,
} from './Decorations';
import { CharacterFigure } from './Characters';

interface SceneProps {
  triggered: boolean;
  onTrigger: () => void;
}

// Scene 1: Abu Bakar and Prophet together (abstract)
export function AbuBakarIntro({ triggered, onTrigger }: SceneProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-100 via-teal-50 to-green-50" />
      <Sun className="absolute top-6 right-8 w-24 h-24" onClick={onTrigger} />
      <Cloud className="absolute top-12 left-8 w-32 h-16" delay={0} />
      <Cloud className="absolute top-20 right-1/4 w-24 h-12" delay={2} />
      <Ground color="#86EFAC" />
      {/* Two characters side by side */}
      <CharacterFigure
        className="absolute bottom-4 left-1/4 w-28 h-44 md:w-36 md:h-52"
        robeColor="#059669"
        skinColor="#FBBF24"
        onClick={onTrigger}
        waving={triggered}
      />
      <CharacterFigure
        className="absolute bottom-4 right-1/4 w-28 h-44 md:w-36 md:h-52"
        robeColor="#0D9488"
        skinColor="#FBBF24"
        onClick={onTrigger}
        waving={triggered}
      />
      {/* Friendship heart */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-12 h-12"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Heart />
      </motion.div>
      {triggered && (
        <>
          <Sparkle className="absolute top-1/4 left-1/3 w-6 h-6" delay={0} color="#10B981" />
          <Sparkle className="absolute top-1/3 right-1/3 w-8 h-8" delay={0.3} color="#10B981" />
          <FloatingHeart className="absolute top-1/3 left-1/2 w-8 h-8" delay={0.5} />
        </>
      )}
    </div>
  );
}

// Scene 2: Abu Bakar telling truth - star above
export function AbuBakarTruth({ triggered, onTrigger }: SceneProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-emerald-50 to-green-50" />
      <Cloud className="absolute top-6 left-8 w-28 h-14" delay={0} />
      <Ground color="#6EE7B7" />
      {/* Abu Bakar */}
      <CharacterFigure
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-48 md:w-40 md:h-56"
        robeColor="#059669"
        skinColor="#FBBF24"
        onClick={onTrigger}
        waving={false}
      />
      {/* Glowing star above */}
      <motion.div
        className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-20 cursor-pointer"
        onClick={onTrigger}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={triggered
          ? { scale: [1, 1.4, 1], rotate: [0, 360] }
          : { y: [0, -8, 0] }
        }
        transition={triggered
          ? { duration: 2, repeat: 5, ease: 'easeInOut' }
          : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <radialGradient id="truthStarGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FCD34D" />
              <stop offset="60%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </radialGradient>
          </defs>
          <path d="M 50 5 L 60 35 L 95 35 L 67 55 L 78 90 L 50 70 L 22 90 L 33 55 L 5 35 L 40 35 Z" fill="url(#truthStarGlow)" />
          <path d="M 50 15 L 58 38 L 85 38 L 63 54 L 72 80 L 50 65 L 28 80 L 37 54 L 15 38 L 42 38 Z" fill="#FCD34D" />
        </svg>
      </motion.div>
      {/* Halo/glow effect */}
      <motion.div
        className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ background: 'radial-gradient(circle, #FCD34D 0%, transparent 60%)' }}
      />
      {triggered && (
        <>
          <Sparkle className="absolute top-1/3 left-1/4 w-6 h-6" delay={0} color="#FCD34D" />
          <Sparkle className="absolute top-1/2 right-1/4 w-8 h-8" delay={0.3} color="#FBBF24" />
          <Sparkle className="absolute top-20 left-1/3 w-5 h-5" delay={0.6} />
          <Sparkle className="absolute top-1/3 right-1/3 w-7 h-7" delay={0.9} color="#FCD34D" />
        </>
      )}
    </div>
  );
}

// Scene 3: Abu Bakar listening and believing
export function AbuBakarBelieve({ triggered, onTrigger }: SceneProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-100 via-yellow-50 to-emerald-50" />
      <Sun className="absolute top-8 right-8 w-24 h-24" onClick={onTrigger} />
      <Cloud className="absolute top-12 left-1/4 w-28 h-14" delay={1} />
      <Ground color="#86EFAC" />
      {/* Lightbulb / glowing light */}
      <motion.div
        className="absolute top-16 left-1/2 -translate-x-1/2 w-16 h-20 cursor-pointer"
        onClick={onTrigger}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={triggered ? { scale: [1, 1.3, 1] } : {}}
        transition={triggered ? { duration: 1, repeat: 5 } : {}}
      >
        <svg viewBox="0 0 60 80" className="w-full h-full">
          <defs>
            <radialGradient id="bulbGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="50%" stopColor="#FCD34D" />
              <stop offset="100%" stopColor="#F59E0B" />
            </radialGradient>
          </defs>
          {/* Bulb */}
          <circle cx="30" cy="35" r="22" fill="url(#bulbGlow)" />
          {/* Filament */}
          <path d="M 22 35 Q 30 25 38 35" stroke="#92400E" strokeWidth="1.5" fill="none" />
          {/* Base */}
          <rect x="24" y="55" width="12" height="6" fill="#92400E" />
          <rect x="25" y="60" width="10" height="4" fill="#713F12" />
          <rect x="26" y="64" width="8" height="3" fill="#451A03" />
        </svg>
      </motion.div>
      {/* Glow around bulb */}
      {triggered && (
        <motion.div
          className="absolute top-12 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full"
          animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1.5, 2] }}
          transition={{ duration: 2, repeat: 5 }}
          style={{ background: 'radial-gradient(circle, #FCD34D 0%, transparent 70%)' }}
        />
      )}
      {/* Abu Bakar */}
      <CharacterFigure
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-28 h-44 md:w-36 md:h-52"
        robeColor="#059669"
        skinColor="#FBBF24"
        onClick={onTrigger}
      />
      {/* Hearts and sparkles when triggered */}
      {triggered && (
        <>
          <FloatingHeart className="absolute top-1/3 left-1/4 w-7 h-7" delay={0} />
          <FloatingHeart className="absolute top-1/2 right-1/4 w-6 h-6" delay={0.5} />
          <FloatingHeart className="absolute top-1/4 left-1/3 w-8 h-8" delay={1} />
          <Sparkle className="absolute top-1/4 right-1/4 w-6 h-6" delay={0.3} color="#FBBF24" />
        </>
      )}
    </div>
  );
}

// Scene 4: Abu Bakar giving food to people
export function AbuBakarGiving({ triggered, onTrigger }: SceneProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-amber-50 to-emerald-50" />
      <Sun className="absolute top-6 right-8 w-20 h-20" onClick={onTrigger} />
      <Cloud className="absolute top-10 left-8 w-28 h-14" delay={0} />
      <Ground color="#86EFAC" />
      {/* Abu Bakar */}
      <CharacterFigure
        className="absolute bottom-4 left-8 w-28 h-44 md:w-36 md:h-52"
        robeColor="#059669"
        skinColor="#FBBF24"
        onClick={onTrigger}
        waving={triggered}
      />
      {/* Food basket - interactive */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-24 h-20 cursor-pointer md:w-32 md:h-24"
        onClick={onTrigger}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={triggered ? { y: [0, -20, 0], rotate: [0, 10, -10, 0] } : { y: [0, -3, 0] }}
        transition={triggered ? { duration: 2, repeat: 3 } : { duration: 3, repeat: Infinity }}
      >
        <FoodBasket />
      </motion.div>
      {/* Other person receiving */}
      <CharacterFigure
        className="absolute bottom-4 right-8 w-28 h-44 md:w-36 md:h-52"
        robeColor="#7C3AED"
        skinColor="#FBBF24"
        onClick={onTrigger}
        waving={triggered}
      />
      {/* Floating food items when triggered */}
      {triggered && (
        <>
          <motion.div
            className="absolute top-1/3 left-1/2 -translate-x-1/2"
            animate={{ y: [-30, -100], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: 3 }}
          >
            <div className="text-3xl">🍎</div>
          </motion.div>
          <motion.div
            className="absolute top-1/2 left-1/3"
            animate={{ y: [-20, -90], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: 3, delay: 0.3 }}
          >
            <div className="text-2xl">🍊</div>
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-1/3"
            animate={{ y: [-30, -100], opacity: [1, 0] }}
            transition={{ duration: 1.5, repeat: 3, delay: 0.6 }}
          >
            <div className="text-2xl">🍇</div>
          </motion.div>
          <FloatingHeart className="absolute top-1/2 left-1/2 w-8 h-8" delay={0.5} />
        </>
      )}
    </div>
  );
}

// Scene 5: Abu Bakar as leader
export function AbuBakarLeader({ triggered, onTrigger }: SceneProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-200 via-amber-50 to-yellow-50" />
      <Sun className="absolute top-6 right-8 w-24 h-24" onClick={onTrigger} />
      <Cloud className="absolute top-12 left-8 w-32 h-16" delay={0} />
      <Cloud className="absolute top-20 right-1/4 w-24 h-12" delay={2} />
      <Ground color="#6EE7B7" />
      {/* Crown above Abu Bakar */}
      <motion.div
        className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-20 cursor-pointer"
        onClick={onTrigger}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={triggered
          ? { y: [0, -20, 0], rotate: [0, 5, -5, 0] }
          : { y: [0, -5, 0] }
        }
        transition={triggered
          ? { duration: 2, repeat: 3 }
          : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        <Crown />
      </motion.div>
      {/* Abu Bakar */}
      <CharacterFigure
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-48 md:w-40 md:h-56"
        robeColor="#059669"
        skinColor="#FBBF24"
        onClick={onTrigger}
        waving={triggered}
      />
      {/* Crowd of people */}
      <CharacterFigure
        className="absolute bottom-4 left-2 w-20 h-32 md:w-24 md:h-40"
        robeColor="#3B82F6"
        skinColor="#FBBF24"
        onClick={onTrigger}
      />
      <CharacterFigure
        className="absolute bottom-4 right-2 w-20 h-32 md:w-24 md:h-40"
        robeColor="#EC4899"
        skinColor="#FBBF24"
        onClick={onTrigger}
      />
      {triggered && (
        <>
          <Sparkle className="absolute top-1/3 left-1/4 w-8 h-8" delay={0} color="#FBBF24" />
          <Sparkle className="absolute top-1/2 right-1/4 w-10 h-10" delay={0.3} color="#FCD34D" />
          <Sparkle className="absolute top-20 left-1/3 w-6 h-6" delay={0.6} />
          <Sparkle className="absolute top-1/3 right-1/3 w-7 h-7" delay={0.9} color="#FCD34D" />
          <FloatingHeart className="absolute top-1/2 left-1/2 w-8 h-8" delay={0.5} />
        </>
      )}
    </div>
  );
}
