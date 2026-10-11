'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import type { Language } from './stories';

interface UseNarrationResult {
  narrate: (text: string, lang: Language) => void;
  stop: () => void;
  isNarrating: boolean;
  isLoading: boolean;
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
  ms: ['ms-MY', 'ms'],
  id: ['id-ID', 'id', 'ms-MY'],  // Indonesian, fall back to Malay
  ar: ['ar-SA', 'ar-EG', 'ar', 'ar-AE'],
};

// Check if Web Speech API is available
function isWebSpeechAvailable(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

// Pick the best available native voice on the device for the target language.
// Returns null if no native voice exists for that language.
function pickNativeVoice(
  voices: SpeechSynthesisVoice[],
  lang: Language
): SpeechSynthesisVoice | null {
  const preferred = VOICE_PREFERENCE[lang] || [];

  // Try Google voices first (often higher quality on Chrome)
  for (const code of preferred) {
    const voice = voices.find(
      (v) =>
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

  // No native voice for this language — return null so we can fall back to API
  return null;
}

export function useNarration(): UseNarrationResult {
  const [isNarrating, setIsNarrating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentRequestIdRef = useRef<number>(0);

  // Load voices and update when voices change (some browsers load async)
  useEffect(() => {
    if (!isWebSpeechAvailable()) return;

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
    currentRequestIdRef.current++;  // Invalidate any in-flight request
    if (isWebSpeechAvailable()) {
      window.speechSynthesis.cancel();
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setIsNarrating(false);
    setIsLoading(false);
  }, []);

  // Web Speech API narration (used when a native voice is available)
  const narrateWithWebSpeech = useCallback(
    (text: string, lang: Language, voice: SpeechSynthesisVoice) => {
      if (!isWebSpeechAvailable()) return;

      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = lang === 'ar' ? 0.8 : 0.85;
      utterance.pitch = 1.1;
      utterance.volume = 1;
      utterance.lang = LANG_CODE_MAP[lang];
      utterance.voice = voice;

      utterance.onstart = () => {
        setIsLoading(false);
        setIsNarrating(true);
      };
      utterance.onend = () => {
        setIsNarrating(false);
      };
      utterance.onerror = () => {
        setIsNarrating(false);
      };

      window.speechSynthesis.speak(utterance);
    },
    []
  );

  // z-ai TTS API narration (fallback when no native voice is available)
  const narrateWithAPI = useCallback(async (text: string, lang: Language, requestId: number) => {
    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, language: lang }),
      });

      // If a newer request has started, abort this one
      if (requestId !== currentRequestIdRef.current) return;

      if (!response.ok) {
        throw new Error(`TTS API failed: ${response.status}`);
      }

      const blob = await response.blob();

      if (requestId !== currentRequestIdRef.current) return;

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
        setIsNarrating(false);
      };

      setIsLoading(false);
      setIsNarrating(true);
      await audio.play();
    } catch (error) {
      console.warn('z-ai TTS fallback failed:', error);
      if (requestId !== currentRequestIdRef.current) return;
      setIsLoading(false);
      setIsNarrating(false);
      // No further fallback — narration silently fails
    }
  }, []);

  const narrate = useCallback(
    (text: string, lang: Language) => {
      // Stop any current playback
      stop();

      const requestId = ++currentRequestIdRef.current;

      // Try Web Speech API first if a native voice is available
      if (isWebSpeechAvailable()) {
        // Make sure voices are loaded
        if (voicesRef.current.length === 0) {
          voicesRef.current = window.speechSynthesis.getVoices();
        }

        const nativeVoice = pickNativeVoice(voicesRef.current, lang);
        if (nativeVoice) {
          // Use native voice — best quality
          narrateWithWebSpeech(text, lang, nativeVoice);
          return;
        }
      }

      // No native voice for this language — fall back to z-ai TTS API
      setIsLoading(true);
      narrateWithAPI(text, lang, requestId);
    },
    [stop, narrateWithWebSpeech, narrateWithAPI]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (isWebSpeechAvailable()) {
        window.speechSynthesis.cancel();
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return { narrate, stop, isNarrating, isLoading };
}
