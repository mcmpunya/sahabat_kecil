'use client';

import { motion } from 'framer-motion';

interface LogoProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

/**
 * Sahabat Kecil brand logo.
 * Two cute kid figures (one in green robe, one in cream robe) holding hands,
 * standing on an open book. A small star sits above (Islamic touch).
 * The whole logo sits in a rounded square with an emerald gradient.
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
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#0D9488" />
          </linearGradient>
          <linearGradient id="sk-book" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="100%" stopColor="#FCD34D" />
          </linearGradient>
          <linearGradient id="sk-robe1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E5E7EB" />
          </linearGradient>
          <linearGradient id="sk-robe2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="100%" stopColor="#FDE68A" />
          </linearGradient>
        </defs>

        {/* Background rounded square */}
        <rect width="200" height="200" rx="44" fill="url(#sk-bg)" />

        {/* Decorative sparkles */}
        <circle cx="30" cy="35" r="2" fill="#FCD34D" opacity="0.8" />
        <circle cx="170" cy="40" r="2.5" fill="#FCD34D" opacity="0.8" />
        <circle cx="40" cy="80" r="1.5" fill="#FEF3C7" opacity="0.6" />
        <circle cx="165" cy="90" r="1.5" fill="#FEF3C7" opacity="0.6" />

        {/* Star above (Islamic touch) */}
        <path
          d="M 100 28 L 103 37 L 112 37 L 105 43 L 107 52 L 100 47 L 93 52 L 95 43 L 88 37 L 97 37 Z"
          fill="#FCD34D"
          stroke="#F59E0B"
          strokeWidth="0.8"
        />

        {/* Open book at the bottom (like a stage/platform) */}
        <g>
          {/* Left page */}
          <path
            d="M 30 155 L 100 138 L 100 158 L 30 168 Z"
            fill="url(#sk-book)"
            stroke="#92400E"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          {/* Right page */}
          <path
            d="M 100 138 L 170 155 L 170 168 L 100 158 Z"
            fill="url(#sk-book)"
            stroke="#92400E"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          {/* Spine */}
          <line
            x1="100"
            y1="138"
            x2="100"
            y2="158"
            stroke="#92400E"
            strokeWidth="1.5"
          />
          {/* Page lines */}
          <line x1="45" y1="153" x2="92" y2="143" stroke="#D1D5DB" strokeWidth="0.8" opacity="0.6" />
          <line x1="45" y1="158" x2="92" y2="148" stroke="#D1D5DB" strokeWidth="0.8" opacity="0.6" />
          <line x1="108" y1="143" x2="155" y2="153" stroke="#D1D5DB" strokeWidth="0.8" opacity="0.6" />
          <line x1="108" y1="148" x2="155" y2="158" stroke="#D1D5DB" strokeWidth="0.8" opacity="0.6" />
        </g>

        {/* Left kid (taller) - white robe */}
        <g transform="translate(72, 70)">
          {/* Body/robe (triangle-ish) */}
          <path
            d="M -13 0 L -16 60 L 16 60 L 13 0 Z"
            fill="url(#sk-robe1)"
            stroke="#9CA3AF"
            strokeWidth="0.8"
          />
          {/* Collar */}
          <path d="M -10 0 L 0 6 L 10 0 Z" fill="#D1D5DB" />
          {/* Head */}
          <circle cx="0" cy="-10" r="11" fill="#FBBF24" />
          {/* Hair */}
          <path
            d="M -11 -10 Q -11 -22 0 -22 Q 11 -22 11 -10 Q 8 -18 0 -18 Q -8 -18 -11 -10 Z"
            fill="#3F2B1D"
          />
          {/* Smile (tiny) */}
          <path
            d="M -3 -7 Q 0 -5 3 -7"
            stroke="#92400E"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Left arm (down by side) */}
          <path
            d="M -13 10 Q -17 25 -16 40"
            stroke="#FBBF24"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Right arm (reaching out to hold hands) */}
          <path
            d="M 13 12 Q 20 15 27 18"
            stroke="#FBBF24"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Right kid (shorter) - cream robe */}
        <g transform="translate(128, 78)">
          {/* Body/robe */}
          <path
            d="M -12 0 L -15 52 L 15 52 L 12 0 Z"
            fill="url(#sk-robe2)"
            stroke="#D97706"
            strokeWidth="0.8"
          />
          {/* Collar */}
          <path d="M -9 0 L 0 5 L 9 0 Z" fill="#FCD34D" />
          {/* Head */}
          <circle cx="0" cy="-9" r="10" fill="#FBBF24" />
          {/* Hair (with hijab-style covering for variety) */}
          <path
            d="M -10 -9 Q -10 -20 0 -20 Q 10 -20 10 -9 L 8 -7 Q 5 -15 0 -15 Q -5 -15 -8 -7 Z"
            fill="#3F2B1D"
          />
          {/* Smile (tiny) */}
          <path
            d="M -3 -6 Q 0 -4 3 -6"
            stroke="#92400E"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Right arm (down by side) */}
          <path
            d="M 12 8 Q 16 22 15 36"
            stroke="#FBBF24"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Left arm (reaching out to hold hands) */}
          <path
            d="M -12 10 Q -19 13 -26 16"
            stroke="#FBBF24"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Holding hands connection (small circle where hands meet) */}
        <circle cx="99" cy="88" r="3.5" fill="#FBBF24" stroke="#92400E" strokeWidth="0.6" />
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
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#0D9488" />
          </linearGradient>
          <linearGradient id="sk-mark-book" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FEF3C7" />
            <stop offset="100%" stopColor="#FCD34D" />
          </linearGradient>
        </defs>
        <rect width="200" height="200" rx="44" fill="url(#sk-mark-bg)" />
        <circle cx="30" cy="35" r="2" fill="#FCD34D" opacity="0.8" />
        <circle cx="170" cy="40" r="2.5" fill="#FCD34D" opacity="0.8" />
        <path
          d="M 100 28 L 103 37 L 112 37 L 105 43 L 107 52 L 100 47 L 93 52 L 95 43 L 88 37 L 97 37 Z"
          fill="#FCD34D"
          stroke="#F59E0B"
          strokeWidth="0.8"
        />
        <g>
          <path d="M 30 155 L 100 138 L 100 158 L 30 168 Z" fill="url(#sk-mark-book)" stroke="#92400E" strokeWidth="1.2" strokeLinejoin="round" />
          <path d="M 100 138 L 170 155 L 170 168 L 100 158 Z" fill="url(#sk-mark-book)" stroke="#92400E" strokeWidth="1.2" strokeLinejoin="round" />
          <line x1="100" y1="138" x2="100" y2="158" stroke="#92400E" strokeWidth="1.5" />
        </g>
        <g transform="translate(72, 70)">
          <path d="M -13 0 L -16 60 L 16 60 L 13 0 Z" fill="#FFFFFF" stroke="#9CA3AF" strokeWidth="0.8" />
          <circle cx="0" cy="-10" r="11" fill="#FBBF24" />
          <path d="M -11 -10 Q -11 -22 0 -22 Q 11 -22 11 -10 Q 8 -18 0 -18 Q -8 -18 -11 -10 Z" fill="#3F2B1D" />
          <path d="M -13 10 Q -17 25 -16 40" stroke="#FBBF24" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M 13 12 Q 20 15 27 18" stroke="#FBBF24" strokeWidth="5" fill="none" strokeLinecap="round" />
        </g>
        <g transform="translate(128, 78)">
          <path d="M -12 0 L -15 52 L 15 52 L 12 0 Z" fill="#FEF3C7" stroke="#D97706" strokeWidth="0.8" />
          <circle cx="0" cy="-9" r="10" fill="#FBBF24" />
          <path d="M -10 -9 Q -10 -20 0 -20 Q 10 -20 10 -9 L 8 -7 Q 5 -15 0 -15 Q -5 -15 -8 -7 Z" fill="#3F2B1D" />
          <path d="M 12 8 Q 16 22 15 36" stroke="#FBBF24" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M -12 10 Q -19 13 -26 16" stroke="#FBBF24" strokeWidth="5" fill="none" strokeLinecap="round" />
        </g>
        <circle cx="99" cy="88" r="3.5" fill="#FBBF24" stroke="#92400E" strokeWidth="0.6" />
      </svg>
    </div>
  );
}
