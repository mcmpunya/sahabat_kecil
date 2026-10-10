'use client';

import { motion } from 'framer-motion';
import {
  Sun, Cloud, Ground, Heart, FloatingHeart, Star, Sparkle, Moon, TwinklingStar,
} from './Decorations';
import { CharacterFigure, LionFigure } from './Characters';

interface SceneProps {
  triggered: boolean;
  onTrigger: () => void;
}

// Scene 1: Umar walking tall like a lion
export function UmarIntro({ triggered, onTrigger }: SceneProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-cyan-50 to-blue-50" />
      <Sun className="absolute top-6 right-8 w-24 h-24" onClick={onTrigger} />
      <Cloud className="absolute top-12 left-8 w-32 h-16" delay={0} />
      <Ground color="#7DD3FC" />
      {/* Umar */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={onTrigger}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={triggered
          ? { y: [0, -15, 0], scale: [1, 1.1, 1] }
          : { y: [0, -5, 0] }
        }
        transition={triggered
          ? { duration: 1.5, repeat: 3 }
          : { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        <CharacterFigure
          className="w-36 h-52 md:w-44 md:h-64"
          robeColor="#0284C7"
          skinColor="#FBBF24"
          walking={!triggered}
        />
      </motion.div>
      {/* Lion next to him */}
      <LionFigure
        className="absolute bottom-4 right-8 w-20 h-24 md:w-28 md:h-32"
        onClick={onTrigger}
      />
      {triggered && (
        <>
          {/* Strength aura */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full"
            animate={{ opacity: [0, 0.4, 0], scale: [0.5, 1.5, 2] }}
            transition={{ duration: 2, repeat: 5 }}
            style={{ background: 'radial-gradient(circle, #0284C7 0%, transparent 60%)' }}
          />
          <Sparkle className="absolute top-1/4 left-1/4 w-8 h-8" delay={0} color="#0284C7" />
          <Sparkle className="absolute top-1/3 right-1/3 w-10 h-10" delay={0.3} color="#38BDF8" />
          <Sparkle className="absolute top-20 left-1/3 w-6 h-6" delay={0.6} color="#0EA5E9" />
          <Sparkle className="absolute top-1/2 right-1/4 w-7 h-7" delay={0.9} color="#0284C7" />
        </>
      )}
    </div>
  );
}

// Scene 2: Umar's heart becoming soft
export function UmarChange({ triggered, onTrigger }: SceneProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-rose-50 to-pink-50" />
      <Sun className="absolute top-6 right-8 w-20 h-20" onClick={onTrigger} />
      <Cloud className="absolute top-12 left-8 w-28 h-14" delay={0} />
      <Ground color="#86EFAC" />
      {/* Big heart */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 cursor-pointer"
        onClick={onTrigger}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={triggered
          ? { scale: [1, 1.3, 1], rotate: [0, 5, -5, 0] }
          : { scale: [0.9, 1, 0.9] }
        }
        transition={triggered
          ? { duration: 1.5, repeat: 3 }
          : { duration: 2, repeat: Infinity }
        }
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <radialGradient id="umarHeart" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FBCFE8" />
              <stop offset="60%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#BE185D" />
            </radialGradient>
          </defs>
          <path d="M 50 90 L 10 50 Q 0 25 25 22 Q 40 22 50 38 Q 60 22 75 22 Q 100 25 90 50 Z" fill="url(#umarHeart)" />
          {/* Heartbeat line */}
          <motion.path
            d="M 20 50 L 35 50 L 40 35 L 50 65 L 60 35 L 65 50 L 80 50"
            stroke="white"
            strokeWidth="2"
            fill="none"
            animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </svg>
      </motion.div>
      {/* Umar */}
      <CharacterFigure
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-48 md:w-40 md:h-56"
        robeColor="#0284C7"
        skinColor="#FBBF24"
        onClick={onTrigger}
        waving={triggered}
      />
      {triggered && (
        <>
          <FloatingHeart className="absolute top-1/3 left-1/4 w-7 h-7" delay={0} />
          <FloatingHeart className="absolute top-1/2 right-1/4 w-8 h-8" delay={0.3} />
          <FloatingHeart className="absolute top-1/4 left-1/3 w-6 h-6" delay={0.6} />
          <FloatingHeart className="absolute top-1/3 right-1/3 w-9 h-9" delay={0.9} />
          <Sparkle className="absolute top-1/4 left-1/2 w-6 h-6" delay={0.5} color="#EC4899" />
        </>
      )}
    </div>
  );
}

// Scene 3: Umar as a fair leader
export function UmarLeader({ triggered, onTrigger }: SceneProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-blue-50 to-emerald-50" />
      <Sun className="absolute top-6 right-8 w-24 h-24" onClick={onTrigger} />
      <Cloud className="absolute top-12 left-8 w-32 h-16" delay={0} />
      <Ground color="#6EE7B7" />
      {/* Crown above Umar */}
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
          : { duration: 3, repeat: Infinity }
        }
      >
        <svg viewBox="0 0 100 80" className="w-full h-full">
          <defs>
            <linearGradient id="umarCrown" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#BAE6FD" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>
          <path d="M 10 70 L 20 30 L 35 55 L 50 20 L 65 55 L 80 30 L 90 70 Z" fill="url(#umarCrown)" stroke="#0369A1" strokeWidth="2" />
          <rect x="10" y="65" width="80" height="8" fill="#0369A1" />
          <circle cx="20" cy="30" r="4" fill="#FCD34D" />
          <circle cx="50" cy="20" r="4" fill="#FCD34D" />
          <circle cx="80" cy="30" r="4" fill="#FCD34D" />
        </svg>
      </motion.div>
      {/* Umar */}
      <CharacterFigure
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-48 md:w-40 md:h-56"
        robeColor="#0284C7"
        skinColor="#FBBF24"
        onClick={onTrigger}
        waving={triggered}
      />
      {/* People around him - rich and poor equally */}
      <CharacterFigure
        className="absolute bottom-4 left-2 w-20 h-32 md:w-24 md:h-40"
        robeColor="#F59E0B"
        skinColor="#FBBF24"
        onClick={onTrigger}
      />
      <CharacterFigure
        className="absolute bottom-4 right-2 w-20 h-32 md:w-24 md:h-40"
        robeColor="#6B7280"
        skinColor="#FBBF24"
        onClick={onTrigger}
      />
      {triggered && (
        <>
          <Sparkle className="absolute top-1/3 left-1/4 w-8 h-8" delay={0} color="#0284C7" />
          <Sparkle className="absolute top-1/2 right-1/4 w-10 h-10" delay={0.3} color="#38BDF8" />
          <Sparkle className="absolute top-20 left-1/3 w-6 h-6" delay={0.6} color="#0EA5E9" />
          <Sparkle className="absolute top-1/3 right-1/3 w-7 h-7" delay={0.9} color="#0284C7" />
          <FloatingHeart className="absolute top-1/2 left-1/2 w-8 h-8" delay={0.5} />
        </>
      )}
    </div>
  );
}

// Scene 4: Umar at night checking on people
export function UmarNight({ triggered, onTrigger }: SceneProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900" />
      {/* Stars */}
      <TwinklingStar className="absolute top-4 left-8 w-4 h-4" delay={0} />
      <TwinklingStar className="absolute top-12 right-1/4 w-5 h-5" delay={0.5} />
      <TwinklingStar className="absolute top-20 left-1/3 w-3 h-3" delay={1} />
      <TwinklingStar className="absolute top-6 right-8 w-5 h-5" delay={1.5} />
      <TwinklingStar className="absolute top-24 right-1/3 w-4 h-4" delay={2} />
      {/* Moon */}
      <Moon className="absolute top-8 right-8 w-24 h-24" onClick={onTrigger} />
      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0" style={{ height: '25%' }}>
        <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full">
          <path d="M 0 15 Q 25 10 50 12 T 100 10 L 100 30 L 0 30 Z" fill="#1E3A8A" />
        </svg>
      </div>
      {/* Houses with lights */}
      <div className="absolute bottom-4 left-4 w-20 h-16 md:w-28 md:h-20">
        <svg viewBox="0 0 100 80" className="w-full h-full">
          <rect x="20" y="30" width="60" height="50" fill="#1E40AF" />
          <path d="M 15 30 L 50 5 L 85 30 Z" fill="#312E81" />
          <rect x="40" y="50" width="20" height="30" rx="2" fill="#7C2D12" />
          <rect x="25" y="40" width="12" height="12" rx="1" fill={triggered ? '#FCD34D' : '#1E40AF'} opacity={triggered ? 1 : 0.5} />
          <rect x="63" y="40" width="12" height="12" rx="1" fill={triggered ? '#FCD34D' : '#1E40AF'} opacity={triggered ? 1 : 0.5} />
        </svg>
      </div>
      <div className="absolute bottom-4 right-4 w-20 h-16 md:w-28 md:h-20">
        <svg viewBox="0 0 100 80" className="w-full h-full">
          <rect x="20" y="30" width="60" height="50" fill="#1E40AF" />
          <path d="M 15 30 L 50 5 L 85 30 Z" fill="#312E81" />
          <rect x="40" y="50" width="20" height="30" rx="2" fill="#7C2D12" />
          <rect x="25" y="40" width="12" height="12" rx="1" fill={triggered ? '#FCD34D' : '#1E40AF'} opacity={triggered ? 1 : 0.5} />
          <rect x="63" y="40" width="12" height="12" rx="1" fill={triggered ? '#FCD34D' : '#1E40AF'} opacity={triggered ? 1 : 0.5} />
        </svg>
      </div>
      {/* Umar walking with lantern */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={onTrigger}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ x: [-30, 30, -30] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 100 180" className="w-32 h-48 md:w-40 md:h-56">
          {/* Robe */}
          <path d="M 35 80 L 30 175 L 70 175 L 65 80 Z" fill="#0284C7" />
          <ellipse cx="50" cy="80" rx="20" ry="8" fill="#0284C7" />
          {/* Head */}
          <circle cx="50" cy="50" r="18" fill="#FBBF24" />
          {/* Turban */}
          <path d="M 30 38 Q 30 18 50 18 Q 70 18 70 38 Q 65 32 50 30 Q 35 32 30 38 Z" fill="#0369A1" opacity="0.9" />
          {/* Beard */}
          <path d="M 38 55 Q 50 75 62 55 Q 60 70 50 72 Q 40 70 38 55 Z" fill="#3F2B1D" opacity="0.4" />
          {/* Lantern in hand */}
          <motion.g
            animate={triggered ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 1, repeat: Infinity }}
            style={{ transformOrigin: '80px 120px' }}
          >
            <line x1="65" y1="100" x2="80" y2="115" stroke="#451A03" strokeWidth="1.5" />
            <rect x="74" y="115" width="14" height="18" rx="2" fill="#FCD34D" opacity="0.9" />
            <rect x="76" y="117" width="10" height="14" fill="#FEF3C7" />
            <circle cx="81" cy="124" r="3" fill="#F59E0B" />
          </motion.g>
          {/* Lantern glow */}
          {triggered && (
            <motion.circle
              cx="81"
              cy="124"
              r="15"
              fill="#FCD34D"
              opacity="0.4"
              animate={{ r: [10, 20, 10], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
          {/* Feet */}
          <ellipse cx="42" cy="175" rx="8" ry="4" fill="#3F2B1D" />
          <ellipse cx="58" cy="175" rx="8" ry="4" fill="#3F2B1D" />
        </svg>
      </motion.div>
      {triggered && (
        <>
          <Sparkle className="absolute top-1/3 left-1/4 w-6 h-6" delay={0} color="#FCD34D" />
          <Sparkle className="absolute top-1/2 right-1/4 w-8 h-8" delay={0.3} color="#FBBF24" />
          <Sparkle className="absolute top-20 left-1/3 w-5 h-5" delay={0.6} color="#FCD34D" />
        </>
      )}
    </div>
  );
}

// Scene 5: Umar being celebrated
export function UmarGood({ triggered, onTrigger }: SceneProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-cyan-50 to-emerald-50" />
      <Sun className="absolute top-6 right-8 w-24 h-24" onClick={onTrigger} />
      <Cloud className="absolute top-12 left-8 w-32 h-16" delay={0} />
      <Ground color="#6EE7B7" />
      {/* Umar */}
      <CharacterFigure
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-48 md:w-40 md:h-56"
        robeColor="#0284C7"
        skinColor="#FBBF24"
        onClick={onTrigger}
        waving={triggered}
      />
      {/* Stars and sparkles */}
      <Star className="absolute top-8 left-8 w-8 h-8" delay={0} color="#FBBF24" />
      <Star className="absolute top-12 right-1/3 w-6 h-6" delay={0.5} color="#FCD34D" />
      <Star className="absolute top-20 left-1/3 w-7 h-7" delay={1} color="#FBBF24" />
      <Star className="absolute top-4 right-1/4 w-5 h-5" delay={1.5} color="#FCD34D" />
      {triggered && (
        <>
          <Sparkle className="absolute top-1/3 left-1/4 w-8 h-8" delay={0} color="#FBBF24" />
          <Sparkle className="absolute top-1/2 right-1/4 w-10 h-10" delay={0.3} color="#FCD34D" />
          <Sparkle className="absolute top-20 left-1/3 w-6 h-6" delay={0.6} color="#FBBF24" />
          <Sparkle className="absolute top-1/3 right-1/3 w-7 h-7" delay={0.9} color="#FCD34D" />
          <FloatingHeart className="absolute top-1/2 left-1/2 w-8 h-8" delay={0.5} />
          <FloatingHeart className="absolute top-1/3 left-1/4 w-7 h-7" delay={1} />
          {/* Celebration confetti */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded"
              style={{
                left: `${10 + i * 10}%`,
                top: '20%',
                background: ['#FBBF24', '#EC4899', '#10B981', '#3B82F6', '#A855F7'][i % 5],
              }}
              animate={{ y: [0, 300, 0], rotate: [0, 360, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </>
      )}
    </div>
  );
}
