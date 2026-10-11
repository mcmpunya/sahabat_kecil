'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import type { Language } from './stories';

interface UseNarrationResult {
  narrate: (text: string, lang: Language) => void;
  stop: () => void;
  isNarrating: boolean;
  isLoading: boolean;
  isBlocked: boolean;            // True if browser blocked autoplay
  retry: () => void;             // User-initiated retry to unlock audio
}

const LANG_CODE_MAP: Record<Language, string> = {
  en: 'en-US',
  ms: 'ms-MY',
  id: 'id-ID',
  ar: 'ar-SA',
};

const VOICE_PREFERENCE: Record<Language, string[]> = {
  en: ['en-US', 'en-GB', 'en-AU', 'en'],
  ms: ['ms-MY', 'ms'],
  id: ['id-ID', 'id', 'ms-MY'],
  ar: ['ar-SA', 'ar-EG', 'ar', 'ar-AE'],
};

function isWebSpeechAvailable(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

function pickNativeVoice(
  voices: SpeechSynthesisVoice[],
  lang: Language
): SpeechSynthesisVoice | null {
  const preferred = VOICE_PREFERENCE[lang] || [];

  for (const code of preferred) {
    const voice = voices.find(
      (v) =>
        v.lang.toLowerCase().startsWith(code.toLowerCase()) &&
        v.name.toLowerCase().includes('google')
    );
    if (voice) return voice;
  }

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
  const [isLoading, setIsLoading] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentRequestIdRef = useRef<number>(0);
  const lastRequestRef = useRef<{ text: string; lang: Language } | null>(null);
  const audioUnlockedRef = useRef(false);

  // Pre-warm an AudioContext on first user interaction to bypass autoplay policies.
  // Many browsers (Safari especially) require a user gesture before any audio can play.
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const unlockAudio = () => {
      if (audioUnlockedRef.current) return;
      try {
        // Create and immediately resume an AudioContext to unlock audio
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioContextClass) {
          const ctx = new AudioContextClass();
          if (ctx.state === 'suspended') {
            ctx.resume().catch(() => {});
          }
          // Create a silent buffer to truly unlock
          const buffer = ctx.createBuffer(1, 1, 22050);
          const source = ctx.createBufferSource();
          source.buffer = buffer;
          source.connect(ctx.destination);
          source.start(0);
        }
        // Also unlock HTMLAudioElement by playing a tiny silent data URI
        const silentAudio = new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAACAAABIADAwMDAwMDAwMDAwMDAwMDAwMDAwMDA///////////////////////////////////////////////////////////////////////////////////////////////AAAA');
        silentAudio.volume = 0;
        silentAudio.play().then(() => {
          silentAudio.pause();
          audioUnlockedRef.current = true;
        }).catch(() => {});
      } catch (e) {
        // ignore
      }
    };

    // Listen for first user interaction
    const events = ['touchstart', 'click', 'keydown'];
    events.forEach((evt) => {
      window.addEventListener(evt, unlockAudio, { once: false, passive: true });
    });

    return () => {
      events.forEach((evt) => {
        window.removeEventListener(evt, unlockAudio);
      });
    };
  }, []);

  // Load voices
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
    currentRequestIdRef.current++;
    if (isWebSpeechAvailable()) {
      window.speechSynthesis.cancel();
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    setIsNarrating(false);
    setIsLoading(false);
    setIsBlocked(false);
  }, []);

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
        setIsBlocked(false);
      };
      utterance.onend = () => setIsNarrating(false);
      utterance.onerror = () => setIsNarrating(false);

      window.speechSynthesis.speak(utterance);
    },
    []
  );

  const narrateWithAPI = useCallback(async (text: string, lang: Language, requestId: number) => {
    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, language: lang }),
      });

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

      // Try to play, handle autoplay rejection
      try {
        await audio.play();
        setIsBlocked(false);
      } catch (playError) {
        console.warn('Audio autoplay blocked by browser. User interaction required.', playError);
        setIsNarrating(false);
        setIsBlocked(true);
        // The retry() function will re-call .play() within a user gesture
      }
    } catch (error) {
      console.warn('z-ai TTS fallback failed:', error);
      if (requestId !== currentRequestIdRef.current) return;
      setIsLoading(false);
      setIsNarrating(false);
    }
  }, []);

  const narrate = useCallback(
    (text: string, lang: Language) => {
      stop();
      lastRequestRef.current = { text, lang };
      const requestId = ++currentRequestIdRef.current;

      if (isWebSpeechAvailable()) {
        if (voicesRef.current.length === 0) {
          voicesRef.current = window.speechSynthesis.getVoices();
        }

        const nativeVoice = pickNativeVoice(voicesRef.current, lang);
        if (nativeVoice) {
          narrateWithWebSpeech(text, lang, nativeVoice);
          return;
        }
      }

      setIsLoading(true);
      narrateWithAPI(text, lang, requestId);
    },
    [stop, narrateWithWebSpeech, narrateWithAPI]
  );

  // User-initiated retry — call this from a click handler to bypass autoplay block
  const retry = useCallback(() => {
    const last = lastRequestRef.current;
    if (!last) return;

    if (audioRef.current) {
      // We already have the audio loaded, just need to play within gesture
      setIsBlocked(false);
      setIsNarrating(true);
      audioRef.current.play().catch(() => {
        setIsBlocked(true);
        setIsNarrating(false);
      });
    } else {
      // Re-fetch and play
      narrate(last.text, last.lang);
    }
  }, [narrate]);

  // Cleanup
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

  return { narrate, stop, isNarrating, isLoading, isBlocked, retry };
}
