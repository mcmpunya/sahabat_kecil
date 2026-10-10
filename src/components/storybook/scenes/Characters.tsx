'use client';

import { motion } from 'framer-motion';

// Base character: A cute simplified figure (no facial features of Prophet out of respect)
// For preschool, we use friendly abstract characters with robes and turbans

export function CharacterFigure({
  className = '',
  robeColor = '#10B981',
  skinColor = '#FBBF24',
  waving = false,
  walking = false,
  onClick,
}: {
  className?: string;
  robeColor?: string;
  skinColor?: string;
  waving?: boolean;
  walking?: boolean;
  onClick?: () => void;
}) {
  return (
    <motion.div
      className={`cursor-pointer ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={walking ? { x: [-10, 10, -10] } : { y: [0, -5, 0] }}
      transition={walking
        ? { duration: 2, repeat: Infinity, ease: 'easeInOut' }
        : { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
      }
    >
      <svg viewBox="0 0 100 180" className="w-full h-full">
        {/* Robe body */}
        <path d="M 35 80 L 30 175 L 70 175 L 65 80 Z" fill={robeColor} />
        <path d="M 35 80 L 30 175 L 70 175 L 65 80 Z" fill="rgba(0,0,0,0.1)" />
        {/* Body shading */}
        <ellipse cx="50" cy="80" rx="20" ry="8" fill={robeColor} />
        {/* Head (no facial features — abstract) */}
        <circle cx="50" cy="50" r="18" fill={skinColor} />
        {/* Hair/Head covering */}
        <path d="M 32 50 Q 30 25 50 25 Q 70 25 68 50 Q 65 35 50 32 Q 35 35 32 50 Z" fill="#3F2B1D" opacity="0.7" />
        {/* Turban (optional cute hat) */}
        <path d="M 30 38 Q 30 18 50 18 Q 70 18 70 38 Q 65 32 50 30 Q 35 32 30 38 Z" fill={robeColor} opacity="0.8" />
        {/* Beard (decorative, non-facial) */}
        <path d="M 38 55 Q 50 75 62 55 Q 60 70 50 72 Q 40 70 38 55 Z" fill="#3F2B1D" opacity="0.4" />
        {/* Arms */}
        <motion.g
          animate={waving ? { rotate: [0, 30, 0, 30, 0] } : {}}
          transition={waving ? { duration: 1.5, repeat: Infinity } : {}}
          style={{ transformOrigin: '30px 90px' }}
        >
          <ellipse cx="25" cy="95" rx="5" ry="20" fill={robeColor} transform="rotate(-20 30 90)" />
          <circle cx="20" cy="115" r="6" fill={skinColor} />
        </motion.g>
        <ellipse cx="75" cy="100" rx="5" ry="18" fill={robeColor} transform="rotate(15 70 90)" />
        <circle cx="80" cy="115" r="6" fill={skinColor} />
        {/* Feet */}
        <ellipse cx="42" cy="175" rx="8" ry="4" fill="#3F2B1D" />
        <ellipse cx="58" cy="175" rx="8" ry="4" fill="#3F2B1D" />
      </svg>
    </motion.div>
  );
}

export function WomanFigure({
  className = '',
  robeColor = '#EC4899',
  skinColor = '#FBBF24',
  onClick,
}: {
  className?: string;
  robeColor?: string;
  skinColor?: string;
  onClick?: () => void;
}) {
  return (
    <motion.div
      className={`cursor-pointer ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 100 180" className="w-full h-full">
        {/* Hijab/dress */}
        <path d="M 30 60 L 25 175 L 75 175 L 70 60 Z" fill={robeColor} />
        {/* Dress shading */}
        <path d="M 50 60 L 50 175 L 75 175 L 70 60 Z" fill="rgba(0,0,0,0.1)" />
        {/* Head covering (hijab) */}
        <ellipse cx="50" cy="45" rx="22" ry="20" fill={robeColor} />
        {/* Face circle (no features) */}
        <circle cx="50" cy="52" r="13" fill={skinColor} />
        {/* Frame of hijab */}
        <path d="M 30 50 Q 28 25 50 25 Q 72 25 70 50 L 65 55 Q 60 40 50 38 Q 40 40 35 55 Z" fill={robeColor} />
        {/* Hands */}
        <circle cx="28" cy="110" r="5" fill={skinColor} />
        <circle cx="72" cy="110" r="5" fill={skinColor} />
        {/* Feet */}
        <ellipse cx="42" cy="175" rx="7" ry="3" fill="#3F2B1D" />
        <ellipse cx="58" cy="175" rx="7" ry="3" fill="#3F2B1D" />
      </svg>
    </motion.div>
  );
}

export function LionFigure({
  className = '',
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <motion.div
      className={`cursor-pointer ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{ rotate: [-2, 2, -2] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 120 120" className="w-full h-full">
        {/* Mane */}
        <circle cx="60" cy="55" r="40" fill="#D97706" />
        <circle cx="60" cy="55" r="35" fill="#F59E0B" />
        {/* Body */}
        <ellipse cx="60" cy="100" rx="30" ry="18" fill="#FBBF24" />
        {/* Head */}
        <circle cx="60" cy="50" r="22" fill="#FCD34D" />
        {/* Ears */}
        <circle cx="40" cy="35" r="6" fill="#D97706" />
        <circle cx="80" cy="35" r="6" fill="#D97706" />
        {/* Eyes (cute, no realistic) */}
        <circle cx="52" cy="48" r="3" fill="#1F2937" />
        <circle cx="68" cy="48" r="3" fill="#1F2937" />
        {/* Nose */}
        <ellipse cx="60" cy="56" rx="3" ry="2" fill="#92400E" />
        {/* Mouth */}
        <path d="M 55 62 Q 60 65 65 62" stroke="#92400E" strokeWidth="1.5" fill="none" />
        {/* Whiskers */}
        <line x1="35" y1="58" x2="48" y2="60" stroke="#92400E" strokeWidth="1" />
        <line x1="35" y1="62" x2="48" y2="63" stroke="#92400E" strokeWidth="1" />
        <line x1="72" y1="60" x2="85" y2="58" stroke="#92400E" strokeWidth="1" />
        <line x1="72" y1="63" x2="85" y2="62" stroke="#92400E" strokeWidth="1" />
        {/* Legs */}
        <ellipse cx="42" cy="115" rx="6" ry="3" fill="#D97706" />
        <ellipse cx="78" cy="115" rx="6" ry="3" fill="#D97706" />
        {/* Tail */}
        <path d="M 90 90 Q 105 70 100 55" stroke="#D97706" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="100" cy="55" r="4" fill="#92400E" />
      </svg>
    </motion.div>
  );
}

export function Bird({
  className = '',
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ x: [-50, 200], y: [0, -10, 0, 10, 0] }}
      transition={{ duration: 12, repeat: Infinity, delay, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 50 30" className="w-full h-full">
        <motion.g
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 0.5, repeat: Infinity, delay }}
          style={{ transformOrigin: '25px 15px' }}
        >
          <path d="M 5 15 L 25 8 L 25 22 Z" fill="#3B82F6" />
          <path d="M 45 15 L 25 8 L 25 22 Z" fill="#3B82F6" />
        </motion.g>
        <ellipse cx="25" cy="15" rx="6" ry="4" fill="#1E40AF" />
      </svg>
    </motion.div>
  );
}
