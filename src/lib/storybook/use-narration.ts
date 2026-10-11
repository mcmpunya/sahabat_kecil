'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import type { Language } from './stories';

interface UseNarrationResult {
  narrate: (text: string, lang: Language) => void;
  stop: () => void;
  isNarrating: boolean;
  isSupported: boolean;
  hasNativeVoice: boolean;
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
  ar: ['ar-SA', 'ar-EG', 'ar', 'ar-AE', 'ar-MA'],
};

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

  return null;
}

export function useNarration(): UseNarrationResult {
  const [isNarrating, setIsNarrating] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const supported = isWebSpeechAvailable();

  // Load voices and update when voices change (some browsers load async)
  useEffect(() => {
    if (!supported) return;

    const loadVoices = () => {
      const v = window.speechSynthesis.getVoices();
      setVoices(v);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, [supported]);

  const stop = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    currentUtteranceRef.current = null;
    setIsNarrating(false);
  }, [supported]);

  const narrate = useCallback(
    (text: string, lang: Language) => {
      if (!supported) return;

      // Stop any current playback
      window.speechSynthesis.cancel();

      // Make sure voices are loaded
      const availableVoices = voices.length > 0
        ? voices
        : window.speechSynthesis.getVoices();

      const nativeVoice = pickNativeVoice(availableVoices, lang);

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = lang === 'ar' ? 0.8 : 0.85;
      utterance.pitch = 1.1;
      utterance.volume = 1;
      utterance.lang = LANG_CODE_MAP[lang];

      if (nativeVoice) {
        utterance.voice = nativeVoice;
      } else if (availableVoices.length > 0) {
        // No native voice for this language — use the first available voice
        // as a last resort. The pronunciation won't be perfect, but at least
        // the child can hear something and follow along with the text.
        // For Arabic specifically, this may sound like gibberish, so we slow it down more.
        utterance.voice = availableVoices[0];
        utterance.rate = lang === 'ar' ? 0.6 : 0.8;
      }

      utterance.onstart = () => setIsNarrating(true);
      utterance.onend = () => {
        setIsNarrating(false);
        currentUtteranceRef.current = null;
      };
      utterance.onerror = (e) => {
        console.warn('Speech synthesis error:', e);
        setIsNarrating(false);
        currentUtteranceRef.current = null;
      };

      currentUtteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [supported, voices]
  );

  // Cleanup on unmount
  useEffect(() => {
    if (!supported) return;
    return () => {
      window.speechSynthesis.cancel();
    };
  }, [supported]);

  // Check if a native voice exists for the current language
  const hasNativeVoice = supported && pickNativeVoice(voices, 'ar') !== null;

  return {
    narrate,
    stop,
    isNarrating,
    isSupported: supported,
    hasNativeVoice,
  };
}
