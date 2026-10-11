'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import type { Language } from './stories';

interface UseNarrationResult {
  narrate: (text: string, lang: Language) => Promise<void>;
  stop: () => void;
  isNarrating: boolean;
  isLoading: boolean;
}

const LANG_CODE_MAP: Record<Language, string> = {
  en: 'en-US',
  ms: 'ms-MY',
  id: 'id-ID',
  ar: 'ar-SA',
};

export function useNarration(): UseNarrationResult {
  const [isNarrating, setIsNarrating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentRequestRef = useRef<number>(0);

  const cleanup = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }, []);

  const fallbackWebSpeech = useCallback((text: string, lang: Language) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsNarrating(false);
      setIsLoading(false);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.85;
    utterance.pitch = 1.1;
    utterance.volume = 1;
    utterance.lang = LANG_CODE_MAP[lang];

    const voices = window.speechSynthesis.getVoices();
    const langPrefix = LANG_CODE_MAP[lang].slice(0, 2);
    const preferredVoice =
      voices.find((v) => v.lang.toLowerCase().startsWith(langPrefix) && v.name.includes('Google')) ||
      voices.find((v) => v.lang.toLowerCase().startsWith(langPrefix));
    if (preferredVoice) utterance.voice = preferredVoice;

    utterance.onstart = () => {
      setIsNarrating(true);
      setIsLoading(false);
    };
    utterance.onend = () => setIsNarrating(false);
    utterance.onerror = () => setIsNarrating(false);

    window.speechSynthesis.speak(utterance);
  }, []);

  const narrate = useCallback(
    async (text: string, lang: Language) => {
      // Stop any current playback
      cleanup();
      setIsNarrating(false);

      const requestId = ++currentRequestRef.current;
      setIsLoading(true);

      try {
        const response = await fetch('/api/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text, language: lang }),
        });

        // If a newer request has started, abort this one
        if (requestId !== currentRequestRef.current) {
          return;
        }

        if (!response.ok) {
          throw new Error(`TTS API failed: ${response.status}`);
        }

        const blob = await response.blob();

        if (requestId !== currentRequestRef.current) {
          return;
        }

        const audioUrl = URL.createObjectURL(blob);
        const audio = new Audio(audioUrl);
        audioRef.current = audio;

        audio.onended = () => {
          URL.revokeObjectURL(audioUrl);
          audioRef.current = null;
          setIsNarrating(false);
        };
        audio.onerror = () => {
          URL.revokeObjectURL(audioUrl);
          audioRef.current = null;
          // Fall back to Web Speech API
          fallbackWebSpeech(text, lang);
        };

        setIsLoading(false);
        setIsNarrating(true);
        await audio.play();
      } catch (error) {
        console.warn('z-ai TTS failed, falling back to Web Speech API:', error);
        if (requestId !== currentRequestRef.current) return;
        setIsLoading(false);
        fallbackWebSpeech(text, lang);
      }
    },
    [cleanup, fallbackWebSpeech]
  );

  const stop = useCallback(() => {
    currentRequestRef.current++;
    cleanup();
    setIsNarrating(false);
    setIsLoading(false);
  }, [cleanup]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return { narrate, stop, isNarrating, isLoading };
}
