'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import type { Language } from './stories';

interface UseNarrationResult {
  narrate: (text: string, lang: Language) => void;
  stop: () => void;
  isNarrating: boolean;
}

const LANG_CODE_MAP: Record<Language, string> = {
  en: 'en-US',
  ms: 'ms-MY',  // Malay (Malaysia)
  id: 'id-ID',  // Indonesian
  ar: 'ar-SA',  // Arabic (Saudi Arabia)
};

// Languages we prefer for each target, in priority order
const VOICE_PREFERENCE: Record<Language, string[]> = {
  en: ['en-US', 'en-GB', 'en-AU', 'en'],
  ms: ['ms-MY', 'ms'],           // Malay (Malaysia)
  id: ['id-ID', 'id', 'ms-MY'], // Indonesian, fall back to Malay if not available
  ar: ['ar-SA', 'ar-EG', 'ar', 'ar-AE'],
};

// Pick the best available voice on the device for the target language
function pickVoice(voices: SpeechSynthesisVoice[], lang: Language): SpeechSynthesisVoice | null {
  const preferred = VOICE_PREFERENCE[lang] || [];
  // Try Google voices first (often higher quality on Chrome)
  for (const code of preferred) {
    const voice = voices.find((v) =>
      v.lang.toLowerCase().startsWith(code.toLowerCase()) &&
      v.name.toLowerCase().includes('google')
    );
    if (voice) return voice;
  }
  // Then any voice for that language
  for (const code of preferred) {
    const voice = voices.find((v) =>
      v.lang.toLowerCase().startsWith(code.toLowerCase())
    );
    if (voice) return voice;
  }
  // Fallback to any English voice
  const fallback = voices.find((v) => v.lang.toLowerCase().startsWith('en'));
  return fallback || null;
}

export function useNarration(): UseNarrationResult {
  const [isNarrating, setIsNarrating] = useState(false);
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

  // Load voices and update when voices change (some browsers load async)
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    const loadVoices = () => {
      voicesRef.current = window.speechSynthesis.getVoices();
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const stop = useCallback(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    currentUtteranceRef.current = null;
    setIsNarrating(false);
  }, []);

  const narrate = useCallback(
    (text: string, lang: Language) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

      // Stop any current playback
      window.speechSynthesis.cancel();

      // Make sure voices are loaded
      if (voicesRef.current.length === 0) {
        voicesRef.current = window.speechSynthesis.getVoices();
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = lang === 'ar' ? 0.8 : 0.85;
      utterance.pitch = 1.1;
      utterance.volume = 1;
      utterance.lang = LANG_CODE_MAP[lang];

      const voice = pickVoice(voicesRef.current, lang);
      if (voice) {
        utterance.voice = voice;
      }

      utterance.onstart = () => setIsNarrating(true);
      utterance.onend = () => {
        setIsNarrating(false);
        currentUtteranceRef.current = null;
      };
      utterance.onerror = () => {
        setIsNarrating(false);
        currentUtteranceRef.current = null;
      };

      currentUtteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    []
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return { narrate, stop, isNarrating };
}
