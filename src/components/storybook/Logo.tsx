'use client';

import { motion } from 'framer-motion';

interface LogoProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

/**
 * Sahabat Kecil brand logo.
 * A boy (in shorts + t-shirt) and a girl (in skirt + t-shirt) shaking hands
 * on a playground with grass, flowers, and a sun. A small star sits above
 * for an Islamic touch. Sits in a rounded square with an emerald gradient.
 */
export function Logo({ size = 96, className = '', animated = false }: LogoProps) {
  return (
    <motion.div
      className={className}
      style={{ width: size, height: size }}
      whileHover={animated ? { scale: 1.05, rotate: 3 } : undefined}
      transition={{ type: 'spring', bounce: 0.4 }}
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient id="sk-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7DD3FC" />
            <stop offset="55%" stopColor="#BAE6FD" />
            <stop offset="100%" stopColor="#86EFAC" />
          </linearGradient>
          <linearGradient id="sk-boy-shirt" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="sk-girl-shirt" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F472B6" />
            <stop offset="100%" stopColor="#DB2777" />
          </linearGradient>
          <linearGradient id="sk-girl-skirt" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <radialGradient id="sk-sun" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="60%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </radialGradient>
        </defs>

        {/* Background sky → grass */}
        <rect width="200" height="200" rx="44" fill="url(#sk-bg)" />

        {/* Sun in upper right */}
        <circle cx="160" cy="38" r="13" fill="url(#sk-sun)" />
        <g stroke="#FBBF24" strokeWidth="2" strokeLinecap="round">
          <line x1="160" y1="18" x2="160" y2="22" />
          <line x1="160" y1="54" x2="160" y2="58" />
          <line x1="140" y1="38" x2="144" y2="38" />
          <line x1="176" y1="38" x2="180" y2="38" />
          <line x1="146" y1="24" x2="149" y2="27" />
          <line x1="171" y1="49" x2="174" y2="52" />
          <line x1="174" y1="24" x2="171" y2="27" />
          <line x1="149" y1="49" x2="146" y2="52" />
        </g>

        {/* Cloud in upper left */}
        <g fill="white" opacity="0.9">
          <ellipse cx="38" cy="38" rx="14" ry="8" />
          <ellipse cx="50" cy="34" rx="12" ry="9" />
          <ellipse cx="58" cy="40" rx="10" ry="7" />
        </g>

        {/* Grass ground */}
        <path d="M 0 152 Q 50 148 100 150 T 200 152 L 200 200 L 0 200 Z" fill="#65A30D" />
        <path d="M 0 158 Q 50 154 100 156 T 200 158 L 200 200 L 0 200 Z" fill="#4D7C0F" opacity="0.5" />

        {/* Small flowers on the ground */}
        <g>
          {/* Flower 1 - left */}
          <circle cx="22" cy="168" r="2.5" fill="#EC4899" />
          <circle cx="19" cy="166" r="2" fill="#EC4899" />
          <circle cx="25" cy="166" r="2" fill="#EC4899" />
          <circle cx="20" cy="171" r="2" fill="#EC4899" />
          <circle cx="24" cy="171" r="2" fill="#EC4899" />
          <circle cx="22" cy="168" r="1.2" fill="#FCD34D" />
          {/* Flower 2 - right */}
          <circle cx="178" cy="172" r="2.5" fill="#A855F7" />
          <circle cx="175" cy="170" r="2" fill="#A855F7" />
          <circle cx="181" cy="170" r="2" fill="#A855F7" />
          <circle cx="176" cy="175" r="2" fill="#A855F7" />
          <circle cx="180" cy="175" r="2" fill="#A855F7" />
          <circle cx="178" cy="172" r="1.2" fill="#FCD34D" />
        </g>

        {/* Small grass blades */}
        <g stroke="#4D7C0F" strokeWidth="1.5" strokeLinecap="round" fill="none">
          <path d="M 45 156 Q 46 150 47 156" />
          <path d="M 50 158 Q 51 152 52 158" />
          <path d="M 150 156 Q 151 150 152 156" />
          <path d="M 155 158 Q 156 152 157 158" />
        </g>

        {/* Star above (Islamic touch) */}
        <path
          d="M 100 22 L 103 31 L 112 31 L 105 37 L 107 46 L 100 41 L 93 46 L 95 37 L 88 31 L 97 31 Z"
          fill="#FCD34D"
          stroke="#F59E0B"
          strokeWidth="0.8"
        />

        {/* === BOY (left) === */}
        <g transform="translate(72, 75)">
          {/* Legs (shorts + bare lower legs) */}
          {/* Left leg */}
          <rect x="-13" y="48" width="10" height="14" rx="2" fill="#1D4ED8" />
          <rect x="-12" y="62" width="8" height="14" rx="3" fill="#FBBF24" />
          {/* Right leg */}
          <rect x="3" y="48" width="10" height="14" rx="2" fill="#1D4ED8" />
          <rect x="4" y="62" width="8" height="14" rx="3" fill="#FBBF24" />
          {/* Shoes */}
          <ellipse cx="-8" cy="78" rx="6" ry="3" fill="#1F2937" />
          <ellipse cx="8" cy="78" rx="6" ry="3" fill="#1F2937" />

          {/* Body (t-shirt) */}
          <path
            d="M -16 8 L -16 50 L 16 50 L 16 8 Q 0 4 -16 8 Z"
            fill="url(#sk-boy-shirt)"
            stroke="#1E3A8A"
            strokeWidth="0.8"
          />
          {/* T-shirt collar */}
          <path d="M -6 8 Q 0 14 6 8 L 4 6 L -4 6 Z" fill="#1E3A8A" />

          {/* Head */}
          <circle cx="0" cy="-6" r="13" fill="#FBBF24" />
          {/* Hair (short boyish hair) */}
          <path
            d="M -13 -6 Q -13 -22 0 -22 Q 13 -22 13 -6 Q 12 -16 8 -18 Q 4 -20 0 -19 Q -4 -20 -8 -18 Q -12 -16 -13 -6 Z"
            fill="#3F2B1D"
          />
          {/* Eyes (two dots) */}
          <circle cx="-4" cy="-6" r="1.3" fill="#1F2937" />
          <circle cx="4" cy="-6" r="1.3" fill="#1F2937" />
          {/* Smile */}
          <path
            d="M -4 0 Q 0 3 4 0"
            stroke="#92400E"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />

          {/* Left arm (down by side) */}
          <path
            d="M -16 12 Q -22 28 -22 42"
            stroke="#FBBF24"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
          {/* Right arm (reaching out to shake hands) */}
          <path
            d="M 16 14 Q 24 18 32 22"
            stroke="#FBBF24"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* === GIRL (right) === */}
        <g transform="translate(128, 80)">
          {/* Legs (bare, below skirt) */}
          <rect x="-9" y="56" width="7" height="14" rx="3" fill="#FBBF24" />
          <rect x="2" y="56" width="7" height="14" rx="3" fill="#FBBF24" />
          {/* Shoes */}
          <ellipse cx="-5" cy="72" rx="5" ry="2.5" fill="#BE185D" />
          <ellipse cx="6" cy="72" rx="5" ry="2.5" fill="#BE185D" />

          {/* Skirt (yellow A-line) */}
          <path
            d="M -14 28 L -18 60 L 18 60 L 14 28 Z"
            fill="url(#sk-girl-skirt)"
            stroke="#D97706"
            strokeWidth="0.8"
            strokeLinejoin="round"
          />
          {/* Skirt decoration (small dots) */}
          <circle cx="-6" cy="42" r="1" fill="#FBBF24" opacity="0.6" />
          <circle cx="6" cy="42" r="1" fill="#FBBF24" opacity="0.6" />
          <circle cx="0" cy="50" r="1" fill="#FBBF24" opacity="0.6" />
          <circle cx="-8" cy="52" r="1" fill="#FBBF24" opacity="0.6" />
          <circle cx="8" cy="52" r="1" fill="#FBBF24" opacity="0.6" />

          {/* Body (t-shirt) */}
          <path
            d="M -14 6 L -14 30 L 14 30 L 14 6 Q 0 2 -14 6 Z"
            fill="url(#sk-girl-shirt)"
            stroke="#9D174D"
            strokeWidth="0.8"
          />
          {/* T-shirt collar */}
          <path d="M -5 6 Q 0 12 5 6 L 3 4 L -3 4 Z" fill="#9D174D" />

          {/* Head */}
          <circle cx="0" cy="-8" r="12" fill="#FBBF24" />
          {/* Hair (longer, with two ponytails / pigtails) */}
          <path
            d="M -12 -8 Q -12 -22 0 -22 Q 12 -22 12 -8 Q 11 -16 6 -18 Q 0 -20 -6 -18 Q -11 -16 -12 -8 Z"
            fill="#7C2D12"
          />
          {/* Left ponytail */}
          <ellipse cx="-13" cy="-4" rx="3" ry="6" fill="#7C2D12" />
          {/* Right ponytail */}
          <ellipse cx="13" cy="-4" rx="3" ry="6" fill="#7C2D12" />
          {/* Hair ties (pink) */}
          <circle cx="-13" cy="-9" r="1.5" fill="#EC4899" />
          <circle cx="13" cy="-9" r="1.5" fill="#EC4899" />
          {/* Eyes (two dots) */}
          <circle cx="-4" cy="-8" r="1.3" fill="#1F2937" />
          <circle cx="4" cy="-8" r="1.3" fill="#1F2937" />
          {/* Smile */}
          <path
            d="M -4 -2 Q 0 1 4 -2"
            stroke="#92400E"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />

          {/* Right arm (down by side) */}
          <path
            d="M 14 10 Q 18 24 18 38"
            stroke="#FBBF24"
            strokeWidth="5.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Left arm (reaching out to shake hands) */}
          <path
            d="M -14 12 Q -22 16 -30 20"
            stroke="#FBBF24"
            strokeWidth="5.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Handshake — where the two hands meet */}
        <circle cx="100" cy="98" r="4" fill="#FBBF24" stroke="#92400E" strokeWidth="0.8" />
        {/* Small sparkle on handshake */}
        <path
          d="M 100 90 L 101 94 L 105 95 L 101 96 L 100 100 L 99 96 L 95 95 L 99 94 Z"
          fill="#FCD34D"
          opacity="0.8"
        />
      </svg>
    </motion.div>
  );
}

/**
 * Compact version for the top bar — just the icon mark without text.
 */
export function LogoMark({ size = 32, className = '' }: { size?: number; className?: string }) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <linearGradient id="sk-mark-bg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7DD3FC" />
            <stop offset="55%" stopColor="#BAE6FD" />
            <stop offset="100%" stopColor="#86EFAC" />
          </linearGradient>
          <linearGradient id="sk-mark-boy" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="sk-mark-girl" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F472B6" />
            <stop offset="100%" stopColor="#DB2777" />
          </linearGradient>
          <linearGradient id="sk-mark-skirt" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>
        <rect width="200" height="200" rx="44" fill="url(#sk-mark-bg)" />
        <circle cx="160" cy="38" r="11" fill="#FCD34D" />
        <g fill="white" opacity="0.9">
          <ellipse cx="38" cy="38" rx="14" ry="8" />
          <ellipse cx="50" cy="34" rx="12" ry="9" />
          <ellipse cx="58" cy="40" rx="10" ry="7" />
        </g>
        <path d="M 0 152 Q 50 148 100 150 T 200 152 L 200 200 L 0 200 Z" fill="#65A30D" />
        <path d="M 0 158 Q 50 154 100 156 T 200 158 L 200 200 L 0 200 Z" fill="#4D7C0F" opacity="0.5" />
        <path
          d="M 100 22 L 103 31 L 112 31 L 105 37 L 107 46 L 100 41 L 93 46 L 95 37 L 88 31 L 97 31 Z"
          fill="#FCD34D"
          stroke="#F59E0B"
          strokeWidth="0.8"
        />
        <g transform="translate(72, 75)">
          <rect x="-13" y="48" width="10" height="14" rx="2" fill="#1D4ED8" />
          <rect x="-12" y="62" width="8" height="14" rx="3" fill="#FBBF24" />
          <rect x="3" y="48" width="10" height="14" rx="2" fill="#1D4ED8" />
          <rect x="4" y="62" width="8" height="14" rx="3" fill="#FBBF24" />
          <ellipse cx="-8" cy="78" rx="6" ry="3" fill="#1F2937" />
          <ellipse cx="8" cy="78" rx="6" ry="3" fill="#1F2937" />
          <path d="M -16 8 L -16 50 L 16 50 L 16 8 Q 0 4 -16 8 Z" fill="url(#sk-mark-boy)" stroke="#1E3A8A" strokeWidth="0.8" />
          <path d="M -6 8 Q 0 14 6 8 L 4 6 L -4 6 Z" fill="#1E3A8A" />
          <circle cx="0" cy="-6" r="13" fill="#FBBF24" />
          <path d="M -13 -6 Q -13 -22 0 -22 Q 13 -22 13 -6 Q 12 -16 8 -18 Q 4 -20 0 -19 Q -4 -20 -8 -18 Q -12 -16 -13 -6 Z" fill="#3F2B1D" />
          <circle cx="-4" cy="-6" r="1.3" fill="#1F2937" />
          <circle cx="4" cy="-6" r="1.3" fill="#1F2937" />
          <path d="M -4 0 Q 0 3 4 0" stroke="#92400E" strokeWidth="1" fill="none" strokeLinecap="round" />
          <path d="M -16 12 Q -22 28 -22 42" stroke="#FBBF24" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M 16 14 Q 24 18 32 22" stroke="#FBBF24" strokeWidth="6" fill="none" strokeLinecap="round" />
        </g>
        <g transform="translate(128, 80)">
          <rect x="-9" y="56" width="7" height="14" rx="3" fill="#FBBF24" />
          <rect x="2" y="56" width="7" height="14" rx="3" fill="#FBBF24" />
          <ellipse cx="-5" cy="72" rx="5" ry="2.5" fill="#BE185D" />
          <ellipse cx="6" cy="72" rx="5" ry="2.5" fill="#BE185D" />
          <path d="M -14 28 L -18 60 L 18 60 L 14 28 Z" fill="url(#sk-mark-skirt)" stroke="#D97706" strokeWidth="0.8" strokeLinejoin="round" />
          <path d="M -14 6 L -14 30 L 14 30 L 14 6 Q 0 2 -14 6 Z" fill="url(#sk-mark-girl)" stroke="#9D174D" strokeWidth="0.8" />
          <path d="M -5 6 Q 0 12 5 6 L 3 4 L -3 4 Z" fill="#9D174D" />
          <circle cx="0" cy="-8" r="12" fill="#FBBF24" />
          <path d="M -12 -8 Q -12 -22 0 -22 Q 12 -22 12 -8 Q 11 -16 6 -18 Q 0 -20 -6 -18 Q -11 -16 -12 -8 Z" fill="#7C2D12" />
          <ellipse cx="-13" cy="-4" rx="3" ry="6" fill="#7C2D12" />
          <ellipse cx="13" cy="-4" rx="3" ry="6" fill="#7C2D12" />
          <circle cx="-13" cy="-9" r="1.5" fill="#EC4899" />
          <circle cx="13" cy="-9" r="1.5" fill="#EC4899" />
          <circle cx="-4" cy="-8" r="1.3" fill="#1F2937" />
          <circle cx="4" cy="-8" r="1.3" fill="#1F2937" />
          <path d="M -4 -2 Q 0 1 4 -2" stroke="#92400E" strokeWidth="1" fill="none" strokeLinecap="round" />
          <path d="M 14 10 Q 18 24 18 38" stroke="#FBBF24" strokeWidth="5.5" fill="none" strokeLinecap="round" />
          <path d="M -14 12 Q -22 16 -30 20" stroke="#FBBF24" strokeWidth="5.5" fill="none" strokeLinecap="round" />
        </g>
        <circle cx="100" cy="98" r="4" fill="#FBBF24" stroke="#92400E" strokeWidth="0.8" />
        <path d="M 100 90 L 101 94 L 105 95 L 101 96 L 100 100 L 99 96 L 95 95 L 99 94 Z" fill="#FCD34D" opacity="0.8" />
      </svg>
    </div>
  );
}
