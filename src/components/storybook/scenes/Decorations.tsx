'use client';

import { motion } from 'framer-motion';

// Reusable animated decorations
export function Sun({ className = '', onClick }: { className?: string; onClick?: () => void }) {
  return (
    <motion.div
      className={`cursor-pointer ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{ rotate: 360 }}
      transition={{ rotate: { duration: 30, repeat: Infinity, ease: 'linear' } }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="20" fill="#FBBF24" />
        <circle cx="50" cy="50" r="14" fill="#FCD34D" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <motion.rect
            key={angle}
            x="48"
            y="10"
            width="4"
            height="14"
            rx="2"
            fill="#F59E0B"
            style={{ transformOrigin: '50px 50px', transform: `rotate(${angle}deg)` }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: angle * 0.05 }}
          />
        ))}
      </svg>
    </motion.div>
  );
}

export function Cloud({ className = '', delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      animate={{ x: [0, 30, 0], y: [0, -5, 0] }}
      transition={{ duration: 8, repeat: Infinity, delay, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <ellipse cx="30" cy="40" rx="22" ry="14" fill="white" opacity="0.95" />
        <ellipse cx="50" cy="32" rx="20" ry="16" fill="white" opacity="0.95" />
        <ellipse cx="70" cy="40" rx="18" ry="12" fill="white" opacity="0.95" />
      </svg>
    </motion.div>
  );
}

export function PalmTree({ className = '', sway = false }: { className?: string; sway?: boolean }) {
  return (
    <motion.div
      className={className}
      animate={sway ? { rotate: [-2, 2, -2] } : {}}
      transition={sway ? { duration: 4, repeat: Infinity, ease: 'easeInOut' } : {}}
      style={{ transformOrigin: 'bottom center' }}
    >
      <svg viewBox="0 0 100 150" className="w-full h-full">
        {/* Trunk */}
        <path d="M 45 150 Q 48 100 50 50 L 55 50 Q 53 100 50 150 Z" fill="#92400E" />
        <path d="M 50 150 Q 52 110 54 70" stroke="#78350F" strokeWidth="1.5" fill="none" />
        {/* Leaves */}
        <motion.g
          animate={sway ? { rotate: [-3, 3, -3] } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '50px 50px' }}
        >
          <ellipse cx="25" cy="35" rx="22" ry="9" fill="#16A34A" transform="rotate(-30 25 35)" />
          <ellipse cx="75" cy="35" rx="22" ry="9" fill="#16A34A" transform="rotate(30 75 35)" />
          <ellipse cx="50" cy="22" rx="20" ry="9" fill="#22C55E" />
          <ellipse cx="35" cy="25" rx="18" ry="8" fill="#15803D" transform="rotate(-15 35 25)" />
          <ellipse cx="65" cy="25" rx="18" ry="8" fill="#15803D" transform="rotate(15 65 25)" />
          {/* Coconuts */}
          <circle cx="45" cy="48" r="3.5" fill="#7C2D12" />
          <circle cx="54" cy="49" r="3" fill="#7C2D12" />
        </motion.g>
      </svg>
    </motion.div>
  );
}

export function Heart({ className = '', delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 2, repeat: Infinity, delay, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="#EC4899">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </motion.div>
  );
}

export function FloatingHeart({ className = '', delay = 0, x = 0 }: { className?: string; delay?: number; x?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ y: 0, x, opacity: 0 }}
      animate={{ y: [-20, -120], opacity: [0, 1, 0], scale: [0.5, 1.2, 0.8] }}
      transition={{ duration: 3, repeat: Infinity, delay, ease: 'easeOut' }}
    >
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="#EC4899">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </motion.div>
  );
}

export function Star({ className = '', delay = 0, color = '#FBBF24' }: { className?: string; delay?: number; color?: string }) {
  return (
    <motion.div
      className={className}
      animate={{ scale: [1, 1.3, 1], rotate: [0, 360], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 3, repeat: Infinity, delay, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    </motion.div>
  );
}

export function TwinklingStar({ className = '', delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="white">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    </motion.div>
  );
}

export function Moon({ className = '', onClick }: { className?: string; onClick?: () => void }) {
  return (
    <motion.div
      className={`cursor-pointer ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="60%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#FCD34D" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="28" fill="url(#moonGlow)" />
        <circle cx="42" cy="42" r="5" fill="#FBBF24" opacity="0.4" />
        <circle cx="58" cy="55" r="3" fill="#FBBF24" opacity="0.4" />
        <circle cx="48" cy="60" r="2" fill="#FBBF24" opacity="0.4" />
      </svg>
    </motion.div>
  );
}

export function Ground({ color = '#86EFAC', className = '' }: { color?: string; className?: string }) {
  return (
    <div className={`absolute bottom-0 left-0 right-0 ${className}`} style={{ height: '30%' }}>
      <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="w-full h-full">
        <path d="M 0 15 Q 25 10 50 12 T 100 10 L 100 30 L 0 30 Z" fill={color} />
        <path d="M 0 18 Q 25 14 50 16 T 100 14 L 100 30 L 0 30 Z" fill={color} opacity="0.7" />
      </svg>
    </div>
  );
}

export function Mosque({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Main building */}
        <rect x="60" y="100" width="80" height="80" fill="#FCD34D" />
        <rect x="60" y="100" width="80" height="80" fill="url(#mosqueGrad)" />
        <defs>
          <linearGradient id="mosqueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        {/* Dome */}
        <path d="M 60 100 Q 100 40 140 100 Z" fill="#10B981" />
        <path d="M 70 100 Q 100 55 130 100 Z" fill="#059669" />
        {/* Crescent on top */}
        <line x1="100" y1="40" x2="100" y2="25" stroke="#059669" strokeWidth="2" />
        <path d="M 95 22 A 6 6 0 1 0 105 22 A 5 5 0 1 1 95 22" fill="#FBBF24" />
        {/* Door */}
        <path d="M 85 180 L 85 140 Q 100 120 115 140 L 115 180 Z" fill="#92400E" />
        <path d="M 88 180 L 88 142 Q 100 124 112 142 L 112 180 Z" fill="#78350F" />
        {/* Windows */}
        <circle cx="75" cy="135" r="6" fill="#1E40AF" opacity="0.7" />
        <circle cx="125" cy="135" r="6" fill="#1E40AF" opacity="0.7" />
        {/* Minarets */}
        <rect x="40" y="80" width="10" height="100" fill="#F59E0B" />
        <circle cx="45" cy="80" r="8" fill="#10B981" />
        <rect x="150" y="80" width="10" height="100" fill="#F59E0B" />
        <circle cx="155" cy="80" r="8" fill="#10B981" />
      </svg>
    </div>
  );
}

// Decorative non-character components moved here for cleaner imports

export function Flower({
  className = '',
  color = '#EC4899',
  delay = 0,
}: {
  className?: string;
  color?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ rotate: [0, 5, 0, -5, 0] }}
      transition={{ duration: 4, repeat: Infinity, delay, ease: 'easeInOut' }}
      style={{ transformOrigin: 'bottom center' }}
    >
      <svg viewBox="0 0 50 80" className="w-full h-full">
        <line x1="25" y1="80" x2="25" y2="35" stroke="#16A34A" strokeWidth="3" />
        <ellipse cx="15" cy="55" rx="8" ry="4" fill="#16A34A" transform="rotate(-30 15 55)" />
        <ellipse cx="35" cy="65" rx="8" ry="4" fill="#16A34A" transform="rotate(30 35 65)" />
        <circle cx="25" cy="20" r="8" fill={color} />
        <circle cx="15" cy="25" r="7" fill={color} opacity="0.85" />
        <circle cx="35" cy="25" r="7" fill={color} opacity="0.85" />
        <circle cx="20" cy="15" r="7" fill={color} opacity="0.85" />
        <circle cx="30" cy="15" r="7" fill={color} opacity="0.85" />
        <circle cx="25" cy="22" r="5" fill="#FCD34D" />
      </svg>
    </motion.div>
  );
}

export function Sparkle({
  className = '',
  color = '#FBBF24',
  delay = 0,
}: {
  className?: string;
  color?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ scale: [0, 1, 0], rotate: [0, 180, 360], opacity: [0, 1, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, delay, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" fill={color} />
      </svg>
    </motion.div>
  );
}

export function SoundWaves({ className = '', color = '#3B82F6' }: { className?: string; color?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <motion.path
          d="M 10 30 Q 20 15 30 30 Q 40 45 50 30 Q 60 15 70 30 Q 80 45 90 30"
          stroke={color}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M 10 40 Q 20 28 30 40 Q 40 52 50 40 Q 60 28 70 40 Q 80 52 90 40"
          stroke={color}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}

export function Book({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 100 80" className="w-full h-full">
        <rect x="10" y="15" width="80" height="55" rx="3" fill="#F59E0B" />
        <rect x="15" y="20" width="35" height="45" fill="#FFFBEB" />
        <rect x="50" y="20" width="35" height="45" fill="#FFFBEB" />
        <line x1="50" y1="20" x2="50" y2="65" stroke="#92400E" strokeWidth="2" />
        <line x1="20" y1="30" x2="45" y2="30" stroke="#D1D5DB" strokeWidth="1" />
        <line x1="20" y1="35" x2="45" y2="35" stroke="#D1D5DB" strokeWidth="1" />
        <line x1="20" y1="40" x2="40" y2="40" stroke="#D1D5DB" strokeWidth="1" />
        <line x1="55" y1="30" x2="80" y2="30" stroke="#D1D5DB" strokeWidth="1" />
        <line x1="55" y1="35" x2="80" y2="35" stroke="#D1D5DB" strokeWidth="1" />
        <line x1="55" y1="40" x2="75" y2="40" stroke="#D1D5DB" strokeWidth="1" />
      </svg>
    </div>
  );
}

export function FoodBasket({ className = '' }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 100 80" className="w-full h-full">
        <path d="M 20 35 L 25 75 L 75 75 L 80 35 Z" fill="#92400E" />
        <path d="M 20 35 L 25 75 L 75 75 L 80 35 Z" fill="url(#basketGrad2)" />
        <defs>
          <linearGradient id="basketGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A16207" />
            <stop offset="100%" stopColor="#713F12" />
          </linearGradient>
        </defs>
        <line x1="20" y1="35" x2="80" y2="35" stroke="#451A03" strokeWidth="2" />
        <line x1="30" y1="45" x2="70" y2="45" stroke="#713F12" strokeWidth="0.5" />
        <line x1="32" y1="55" x2="68" y2="55" stroke="#713F12" strokeWidth="0.5" />
        <line x1="34" y1="65" x2="66" y2="65" stroke="#713F12" strokeWidth="0.5" />
        <circle cx="35" cy="35" r="8" fill="#EF4444" />
        <circle cx="50" cy="32" r="9" fill="#F59E0B" />
        <circle cx="65" cy="35" r="8" fill="#22C55E" />
        <circle cx="42" cy="30" r="6" fill="#A855F7" />
        <circle cx="58" cy="30" r="6" fill="#3B82F6" />
      </svg>
    </div>
  );
}

export function Crown({ className = '', onClick }: { className?: string; onClick?: () => void }) {
  return (
    <motion.div
      className={`cursor-pointer ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 100 80" className="w-full h-full">
        <defs>
          <linearGradient id="crownGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        <path d="M 10 70 L 20 30 L 35 55 L 50 20 L 65 55 L 80 30 L 90 70 Z" fill="url(#crownGrad2)" stroke="#92400E" strokeWidth="2" />
        <rect x="10" y="65" width="80" height="8" fill="#D97706" />
        <circle cx="20" cy="30" r="4" fill="#EF4444" />
        <circle cx="50" cy="20" r="4" fill="#3B82F6" />
        <circle cx="80" cy="30" r="4" fill="#22C55E" />
        <circle cx="35" cy="55" r="3" fill="#EC4899" />
        <circle cx="65" cy="55" r="3" fill="#A855F7" />
      </svg>
    </motion.div>
  );
}
