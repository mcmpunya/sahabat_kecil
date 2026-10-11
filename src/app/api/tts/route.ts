import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

// In-memory cache to avoid regenerating the same audio
const audioCache = new Map<string, Buffer>();

// Pick a TTS voice style based on language
function getVoiceForLanguage(lang: string): string {
  switch (lang) {
    case 'en':
      // jam = English gentleman style (best for English text)
      return 'jam';
    case 'ms':
    case 'id':
      // tongtong = warm and friendly; works reasonably with Latin-script text
      return 'tongtong';
    case 'ar':
      // kazi = clear and standard
      return 'kazi';
    default:
      return 'tongtong';
  }
}

function getSpeedForLanguage(lang: string): number {
  // Slightly slower for kids
  switch (lang) {
    case 'ar':
      return 0.8; // slower for clarity
    case 'ms':
    case 'id':
      return 0.85;
    default:
      return 0.9;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { text, language = 'en' } = body as { text: string; language?: string };

    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    if (text.length > 1024) {
      return NextResponse.json(
        { error: 'Text too long (max 1024 chars)' },
        { status: 400 }
      );
    }

    const cacheKey = `${language}:${text}`;
    const cached = audioCache.get(cacheKey);
    if (cached) {
      return new NextResponse(cached, {
        status: 200,
        headers: {
          'Content-Type': 'audio/wav',
          'Content-Length': cached.length.toString(),
          'Cache-Control': 'public, max-age=86400',
        },
      });
    }

    const zai = await ZAI.create();
    const voice = getVoiceForLanguage(language);
    const speed = getSpeedForLanguage(language);

    const response = await zai.audio.tts.create({
      input: text.trim(),
      voice: voice,
      speed: speed,
      response_format: 'wav',
      stream: false,
    });

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(new Uint8Array(arrayBuffer));

    // Cache for future requests (limit cache size to avoid memory issues)
    if (audioCache.size > 50) {
      // Remove oldest entry
      const firstKey = audioCache.keys().next().value;
      if (firstKey) audioCache.delete(firstKey);
    }
    audioCache.set(cacheKey, buffer);

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/wav',
        'Content-Length': buffer.length.toString(),
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (error) {
    console.error('TTS API Error:', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'TTS generation failed',
      },
      { status: 500 }
    );
  }
}
