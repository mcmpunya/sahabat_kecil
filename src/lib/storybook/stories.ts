export type Language = 'en' | 'ms' | 'id' | 'ar';

export interface LocalizedText {
  en: string;
  ms: string;
  id: string;
  ar: string;
}

export interface StoryPage {
  id: number;
  text: LocalizedText;
  narration: LocalizedText;
  emoji: string;
  illustrationKey: string;
  interactiveHint: LocalizedText;
}

export interface Story {
  id: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  sahabatName: string;
  arabicName: string;
  meaning: LocalizedText;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  emoji: string;
  lessonTitle: LocalizedText;
  lessonText: LocalizedText;
  pages: StoryPage[];
}

// UI strings (4 languages)
export const ui = {
  appName: {
    en: 'Sahabat Kecil',
    ms: 'Sahabat Kecil',
    id: 'Sahabat Kecil',
    ar: 'أصحاب صغار',
  },
  appTagline: {
    en: 'Little Friends, Big Hearts',
    ms: 'Sahabat Kecil, Hati Besar',
    id: 'Sahabat Kecil, Hati Besar',
    ar: 'أصحاب صغار، قلوب كبيرة',
  },
  subtitleLine: {
    en: 'Stories of the Prophet\'s Companions',
    ms: 'Kisah Sahabat Nabi',
    id: 'Kisah Sahabat Nabi',
    ar: 'قصص أصحاب النبي',
  },
  appDescription: {
    en: 'A Beautiful Storybook for Little Muslims',
    ms: 'Buku Cerita Indah untuk Kanak-kanak Muslim',
    id: 'Buku Cerita Indah untuk Anak-anak Muslim',
    ar: 'كتاب قصص جميل للأطفال المسلمين الصغار',
  },
  tapToBegin: {
    en: 'Tap a story to begin your adventure!',
    ms: 'Tekan cerita untuk memulakan pengembaraan!',
    id: 'Tekan cerita untuk memulai petualangan!',
    ar: 'اضغط على قصة لبدء مغامرتك!',
  },
  readStory: {
    en: 'Read Story',
    ms: 'Baca Cerita',
    id: 'Baca Cerita',
    ar: 'اقرأ القصة',
  },
  pages: {
    en: 'pages',
    ms: 'muka surat',
    id: 'halaman',
    ar: 'صفحات',
  },
  back: {
    en: 'Back',
    ms: 'Kembali',
    id: 'Kembali',
    ar: 'رجوع',
  },
  backToStories: {
    en: 'Back to stories',
    ms: 'Kembali ke cerita',
    id: 'Kembali ke cerita',
    ar: 'العودة إلى القصص',
  },
  page: {
    en: 'Page',
    ms: 'Halaman',
    id: 'Halaman',
    ar: 'صفحة',
  },
  of: {
    en: 'of',
    ms: 'daripada',
    id: 'dari',
    ar: 'من',
  },
  toggleNarration: {
    en: 'Toggle narration',
    ms: 'Togol narasi',
    id: 'Aktifkan narasi',
    ar: 'تشغيل الصوت',
  },
  replayNarration: {
    en: 'Replay narration',
    ms: 'Main semula narasi',
    id: 'Putar ulang narasi',
    ar: 'إعادة التشغيل',
  },
  narrationOn: {
    en: 'Narration ON',
    ms: 'Narasi DiHidupkan',
    id: 'Narasi AKTIF',
    ar: 'الصوت يعمل',
  },
  narrationOff: {
    en: 'Narration OFF',
    ms: 'Narasi Dimatikan',
    id: 'Narasi MATI',
    ar: 'الصوت متوقف',
  },
  reading: {
    en: 'Reading',
    ms: 'Membaca',
    id: 'Membaca',
    ar: 'يقرأ',
  },
  previous: {
    en: 'Previous',
    ms: 'Sebelum',
    id: 'Sebelum',
    ar: 'السابق',
  },
  next: {
    en: 'Next',
    ms: 'Seterusnya',
    id: 'Selanjutnya',
    ar: 'التالي',
  },
  lesson: {
    en: 'Lesson',
    ms: 'Pengajaran',
    id: 'Pelajaran',
    ar: 'الدرس',
  },
  goToPage: {
    en: 'Go to page',
    ms: 'Pergi ke halaman',
    id: 'Ke halaman',
    ar: 'اذهب إلى صفحة',
  },
  readAgain: {
    en: 'Read Again',
    ms: 'Baca Semula',
    id: 'Baca Lagi',
    ar: 'اقرأ مرة أخرى',
  },
  chooseAnotherStory: {
    en: 'Choose Another Story',
    ms: 'Pilih Cerita Lain',
    id: 'Pilih Cerita Lain',
    ar: 'اختر قصة أخرى',
  },
  theSahabah: {
    en: 'The Sahabah',
    ms: 'Sahabat Nabi',
    id: 'Sahabat Nabi',
    ar: 'الصحابي',
  },
  footerLine: {
    en: 'Each story has a beautiful lesson for little hearts',
    ms: 'Setiap cerita mempunyai pengajaran yang indah untuk hati kecil',
    id: 'Setiap cerita memiliki pelajaran yang indah untuk hati kecil',
    ar: 'كل قصة فيها درس جميل للقلوب الصغيرة',
  },
  switchLanguage: {
    en: 'Switch language',
    ms: 'Tukar bahasa',
    id: 'Ganti bahasa',
    ar: 'تغيير اللغة',
  },
};

// Language metadata for the picker
export const languages: { code: Language; label: string; nativeLabel: string; flag: string; rtl?: boolean }[] = [
  { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇬🇧' },
  { code: 'ms', label: 'Malay', nativeLabel: 'Bahasa Melayu', flag: '🇲🇾' },
  { code: 'id', label: 'Indonesian', nativeLabel: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'ar', label: 'Arabic', nativeLabel: 'العربية', flag: '🇸🇦', rtl: true },
];

export const isRTL = (lang: Language) => lang === 'ar';

// Re-export stories and getStoryById from stories-data
export { stories, getStoryById } from './stories-data';
