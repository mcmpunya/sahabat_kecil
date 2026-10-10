'use client';

import { motion } from 'framer-motion';
import {
  Sun, Cloud, Ground, Heart, FloatingHeart, Star, Sparkle, Flower,
} from './Decorations';
import { WomanFigure, CharacterFigure } from './Characters';

interface SceneProps {
  triggered: boolean;
  onTrigger: () => void;
}

// Scene 1: Khadijah introduction with flowers
export function KhadijahIntro({ triggered, onTrigger }: SceneProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-100 via-pink-50 to-amber-50" />
      <Sun className="absolute top-6 right-8 w-24 h-24" onClick={onTrigger} />
      <Cloud className="absolute top-12 left-8 w-28 h-14" delay={0} />
      <Ground color="#FDA4AF" />
      {/* Khadijah */}
      <WomanFigure
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-48 md:w-40 md:h-56"
        robeColor="#EC4899"
        skinColor="#FBBF24"
        onClick={onTrigger}
      />
      {/* Flowers around */}
      <Flower className="absolute bottom-2 left-4 w-12 h-20" color="#F59E0B" delay={0} />
      <Flower className="absolute bottom-2 left-12 w-10 h-16" color="#A855F7" delay={0.5} />
      <Flower className="absolute bottom-2 right-4 w-12 h-20" color="#3B82F6" delay={1} />
      <Flower className="absolute bottom-2 right-12 w-10 h-16" color="#F59E0B" delay={1.5} />
      <Flower className="absolute bottom-2 left-1/2 -translate-x-1/2 w-14 h-22" color="#EC4899" delay={2} />
      {triggered && (
        <>
          {/* Blooming flowers */}
          <motion.div
            className="absolute bottom-2 left-1/4"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.8, repeat: 3 }}
          >
            <div className="text-4xl">🌸</div>
          </motion.div>
          <motion.div
            className="absolute bottom-2 right-1/4"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.8, repeat: 3, delay: 0.3 }}
          >
            <div className="text-4xl">🌺</div>
          </motion.div>
          <FloatingHeart className="absolute top-1/3 left-1/4 w-7 h-7" delay={0} />
          <FloatingHeart className="absolute top-1/2 right-1/4 w-8 h-8" delay={0.5} />
          <FloatingHeart className="absolute top-1/4 left-1/2 w-6 h-6" delay={1} />
          <Sparkle className="absolute top-1/3 right-1/3 w-6 h-6" delay={0.3} color="#EC4899" />
        </>
      )}
    </div>
  );
}

// Scene 2: Khadijah and Prophet as family
export function KhadijahFamily({ triggered, onTrigger }: SceneProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-pink-50 to-rose-50" />
      <Sun className="absolute top-6 right-8 w-20 h-20" onClick={onTrigger} />
      <Cloud className="absolute top-12 left-8 w-28 h-14" delay={0} />
      <Ground color="#86EFAC" />
      {/* House with warm glow */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-40 h-32 md:w-56 md:h-44 cursor-pointer"
        onClick={onTrigger}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={triggered ? { scale: [1, 1.05, 1] } : {}}
        transition={triggered ? { duration: 2, repeat: 3 } : {}}
      >
        <svg viewBox="0 0 200 160" className="w-full h-full">
          {/* House body */}
          <rect x="40" y="70" width="120" height="80" fill="#FEF3C7" />
          <rect x="40" y="70" width="120" height="80" fill="url(#houseGrad)" opacity="0.6" />
          <defs>
            <linearGradient id="houseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
          {/* Roof */}
          <path d="M 30 70 L 100 25 L 170 70 Z" fill="#92400E" />
          <path d="M 40 70 L 100 35 L 160 70 Z" fill="#B45309" />
          {/* Door */}
          <rect x="85" y="100" width="30" height="50" rx="3" fill="#7C2D12" />
          <circle cx="108" cy="125" r="2" fill="#FCD34D" />
          {/* Windows with glow */}
          <rect x="55" y="85" width="20" height="20" rx="2" fill={triggered ? '#FCD34D' : '#1E40AF'} opacity={triggered ? 1 : 0.8} />
          <rect x="125" y="85" width="20" height="20" rx="2" fill={triggered ? '#FCD34D' : '#1E40AF'} opacity={triggered ? 1 : 0.8} />
          {/* Chimney */}
          <rect x="140" y="40" width="10" height="20" fill="#92400E" />
          {/* Heart on door */}
          <path d="M 100 110 L 95 115 L 95 110 L 100 105 L 105 110 L 105 115 Z" fill="#EC4899" />
        </svg>
      </motion.div>
      {/* Khadijah */}
      <WomanFigure
        className="absolute bottom-4 left-4 w-24 h-40 md:w-32 md:h-48"
        robeColor="#EC4899"
        skinColor="#FBBF24"
        onClick={onTrigger}
      />
      {/* Prophet character */}
      <CharacterFigure
        className="absolute bottom-4 right-4 w-24 h-40 md:w-32 md:h-48"
        robeColor="#059669"
        skinColor="#FBBF24"
        onClick={onTrigger}
        waving={triggered}
      />
      {triggered && (
        <>
          {/* Warm glow */}
          <motion.div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full"
            animate={{ opacity: [0, 0.5, 0], scale: [0.5, 1.5, 2] }}
            transition={{ duration: 2, repeat: 5 }}
            style={{ background: 'radial-gradient(circle, #FCD34D 0%, transparent 60%)' }}
          />
          <FloatingHeart className="absolute top-1/3 left-1/2 w-8 h-8" delay={0} />
          <FloatingHeart className="absolute top-1/2 left-1/3 w-6 h-6" delay={0.5} />
          <FloatingHeart className="absolute top-1/4 right-1/3 w-7 h-7" delay={1} />
        </>
      )}
    </div>
  );
}

// Scene 3: Khadijah hugging Prophet (abstract)
export function KhadijahHug({ triggered, onTrigger }: SceneProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-200 via-pink-100 to-amber-50" />
      <Sun className="absolute top-6 right-8 w-20 h-20" onClick={onTrigger} />
      <Cloud className="absolute top-12 left-8 w-28 h-14" delay={0} />
      <Ground color="#FDA4AF" />
      {/* Two characters close together (hugging) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-0">
        <motion.div
          animate={triggered ? { x: [0, -5, 0] } : {}}
          transition={{ duration: 1, repeat: triggered ? 5 : 0 }}
        >
          <WomanFigure
            className="w-28 h-44 md:w-36 md:h-52"
            robeColor="#EC4899"
            skinColor="#FBBF24"
            onClick={onTrigger}
          />
        </motion.div>
        <motion.div
          animate={triggered ? { x: [0, 5, 0] } : {}}
          transition={{ duration: 1, repeat: triggered ? 5 : 0 }}
        >
          <CharacterFigure
            className="w-28 h-44 md:w-36 md:h-52 -ml-4"
            robeColor="#059669"
            skinColor="#FBBF24"
            onClick={onTrigger}
          />
        </motion.div>
      </div>
      {/* Big heart above */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-20 h-20 cursor-pointer"
        onClick={onTrigger}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M 50 90 L 10 50 Q 0 30 20 25 Q 35 22 50 40 Q 65 22 80 25 Q 100 30 90 50 Z" fill="#EC4899" />
          <path d="M 50 80 L 20 50 Q 15 35 25 32 Q 35 30 50 45 Q 65 30 75 32 Q 85 35 80 50 Z" fill="#F472B6" />
        </svg>
      </motion.div>
      {triggered && (
        <>
          <FloatingHeart className="absolute top-1/3 left-1/4 w-8 h-8" delay={0} />
          <FloatingHeart className="absolute top-1/2 right-1/4 w-7 h-7" delay={0.3} />
          <FloatingHeart className="absolute top-1/4 left-1/3 w-6 h-6" delay={0.6} />
          <FloatingHeart className="absolute top-1/3 right-1/3 w-8 h-8" delay={0.9} />
          <FloatingHeart className="absolute top-1/2 left-1/2 w-7 h-7" delay={1.2} />
          <Sparkle className="absolute top-1/4 right-1/4 w-6 h-6" delay={0.5} color="#EC4899" />
        </>
      )}
    </div>
  );
}

// Scene 4: Khadijah as first believer - star above
export function KhadijahBelieve({ triggered, onTrigger }: SceneProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-100 via-pink-50 to-rose-50" />
      <Cloud className="absolute top-6 left-8 w-28 h-14" delay={0} />
      <Ground color="#FBCFE8" />
      {/* Star above */}
      <motion.div
        className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-24 cursor-pointer"
        onClick={onTrigger}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={triggered
          ? { scale: [1, 1.5, 1], rotate: [0, 360] }
          : { y: [0, -10, 0] }
        }
        transition={triggered
          ? { duration: 2, repeat: 5 }
          : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <radialGradient id="khStarGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FBCFE8" />
              <stop offset="50%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#BE185D" />
            </radialGradient>
          </defs>
          <path d="M 50 5 L 60 35 L 95 35 L 67 55 L 78 90 L 50 70 L 22 90 L 33 55 L 5 35 L 40 35 Z" fill="url(#khStarGlow)" />
          <path d="M 50 15 L 58 38 L 85 38 L 63 54 L 72 80 L 50 65 L 28 80 L 37 54 L 15 38 L 42 38 Z" fill="#F472B6" />
        </svg>
      </motion.div>
      {/* Glow */}
      <motion.div
        className="absolute top-8 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ background: 'radial-gradient(circle, #F472B6 0%, transparent 60%)' }}
      />
      {/* Khadijah */}
      <WomanFigure
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-48 md:w-40 md:h-56"
        robeColor="#EC4899"
        skinColor="#FBBF24"
        onClick={onTrigger}
      />
      {triggered && (
        <>
          <Sparkle className="absolute top-1/3 left-1/4 w-8 h-8" delay={0} color="#EC4899" />
          <Sparkle className="absolute top-1/2 right-1/4 w-10 h-10" delay={0.3} color="#F472B6" />
          <Sparkle className="absolute top-20 left-1/3 w-6 h-6" delay={0.6} color="#EC4899" />
          <FloatingHeart className="absolute top-1/2 left-1/2 w-8 h-8" delay={0.5} />
        </>
      )}
    </div>
  );
}

// Scene 5: Khadijah spreading love
export function KhadijahLove({ triggered, onTrigger }: SceneProps) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-b from-rose-200 via-pink-100 to-amber-100" />
      <Sun className="absolute top-6 right-8 w-24 h-24" onClick={onTrigger} />
      <Cloud className="absolute top-12 left-8 w-32 h-16" delay={0} />
      <Ground color="#FDA4AF" />
      {/* Khadijah */}
      <WomanFigure
        className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-48 md:w-40 md:h-56"
        robeColor="#EC4899"
        skinColor="#FBBF24"
        onClick={onTrigger}
      />
      {/* Hearts everywhere */}
      <Heart className="absolute top-1/4 left-8 w-10 h-10" delay={0} />
      <Heart className="absolute top-1/3 right-8 w-12 h-12" delay={0.5} />
      <Heart className="absolute top-1/2 left-4 w-8 h-8" delay={1} />
      <Heart className="absolute top-1/2 right-4 w-10 h-10" delay={1.5} />
      {triggered && (
        <>
          <FloatingHeart className="absolute top-1/3 left-1/4 w-10 h-10" delay={0} />
          <FloatingHeart className="absolute top-1/2 right-1/4 w-8 h-8" delay={0.3} />
          <FloatingHeart className="absolute top-1/4 left-1/3 w-9 h-9" delay={0.6} />
          <FloatingHeart className="absolute top-1/3 right-1/3 w-7 h-7" delay={0.9} />
          <FloatingHeart className="absolute top-1/2 left-1/2 w-10 h-10" delay={1.2} />
          <FloatingHeart className="absolute top-1/4 right-1/4 w-8 h-8" delay={1.5} />
          <Sparkle className="absolute top-1/4 left-1/2 w-6 h-6" delay={0.3} color="#EC4899" />
          <Sparkle className="absolute top-1/3 left-1/4 w-8 h-8" delay={0.7} color="#F472B6" />
        </>
      )}
    </div>
  );
}
