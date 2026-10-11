export type Language = 'en' | 'ms';

export interface BilingualText {
  en: string;
  ms: string;
}

export interface StoryPage {
  id: number;
  text: BilingualText;
  narration: BilingualText;
  emoji: string;
  illustrationKey: string;
  interactiveHint: BilingualText;
}

export interface Story {
  id: string;
  title: BilingualText;
  subtitle: BilingualText;
  sahabatName: string;
  arabicName: string;
  meaning: BilingualText;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  emoji: string;
  lessonTitle: BilingualText;
  lessonText: BilingualText;
  pages: StoryPage[];
}

// UI strings (bilingual)
export const ui = {
  appName: { en: 'Stories of the Prophet\'s Companions', ms: 'Kisah Sahabat Nabi' },
  appTagline: {
    en: 'Storybook for Little Muslims',
    ms: 'Buku Cerita untuk Kanak-kanak Muslim',
  },
  subtitleLine: {
    en: 'Stories of the Prophet\'s Companions',
    ms: 'Kisah Para Sahabat Nabi',
  },
  tapToBegin: { en: 'Tap a story to begin your adventure!', ms: 'Tekan cerita untuk memulakan pengembaraan!' },
  readStory: { en: 'Read Story', ms: 'Baca Cerita' },
  pages: { en: 'pages', ms: 'muka surat' },
  back: { en: 'Back', ms: 'Kembali' },
  backToStories: { en: 'Back to stories', ms: 'Kembali ke cerita' },
  page: { en: 'Page', ms: 'Halaman' },
  of: { en: 'of', ms: 'daripada' },
  toggleNarration: { en: 'Toggle narration', ms: 'Togol narasi' },
  replayNarration: { en: 'Replay narration', ms: 'Main semula narasi' },
  narrationOn: { en: 'Narration ON', ms: 'Narasi DIHIDUPKAN' },
  narrationOff: { en: 'Narration OFF', ms: 'Narasi DIMATIKAN' },
  reading: { en: 'Reading', ms: 'Membaca' },
  previous: { en: 'Previous', ms: 'Sebelum' },
  next: { en: 'Next', ms: 'Seterusnya' },
  lesson: { en: 'Lesson', ms: 'Pengajaran' },
  goToPage: { en: 'Go to page', ms: 'Pergi ke halaman' },
  readAgain: { en: 'Read Again', ms: 'Baca Semula' },
  chooseAnotherStory: { en: 'Choose Another Story', ms: 'Pilih Cerita Lain' },
  theSahabah: { en: 'The Sahabah', ms: 'Sahabat Nabi' },
  footerLine: {
    en: 'Each story has a beautiful lesson for little hearts',
    ms: 'Setiap cerita mempunyai pengajaran yang indah untuk hati kecil',
  },
  languageLabel: { en: 'English', ms: 'Bahasa Melayu' },
  switchLanguage: { en: 'Switch language', ms: 'Tukar bahasa' },
};

export const stories: Story[] = [
  {
    id: 'bilal',
    title: { en: 'Bilal the Brave', ms: 'Bilal yang Berani' },
    subtitle: { en: 'The First Voice of Adzan', ms: 'Suara Pertama Azan' },
    sahabatName: 'Bilal bin Rabah',
    arabicName: 'بلال بن رباح',
    meaning: { en: 'The First Muadzin', ms: 'Muadzin Pertama' },
    color: 'amber',
    gradientFrom: '#FEF3C7',
    gradientTo: '#FCD34D',
    accentColor: '#D97706',
    emoji: 'star',
    lessonTitle: {
      en: 'Be Brave and Trust Allah',
      ms: 'Berani dan Percaya kepada Allah',
    },
    lessonText: {
      en: 'Bilal was brave. Even when things were hard, he never stopped loving Allah. We can be brave too, just like Bilal!',
      ms: 'Bilal seorang yang berani. Walaupun sukar, dia tidak pernah berhenti mencintai Allah. Kita juga boleh berani, seperti Bilal!',
    },
    pages: [
      {
        id: 1,
        text: {
          en: 'Long ago, there was a kind man named Bilal. He loved Allah very much!',
          ms: 'Dahulu kala, ada seorang lelaki baik bernama Bilal. Dia sangat mencintai Allah!',
        },
        narration: {
          en: 'Long ago, there was a kind man named Bilal. He loved Allah very much.',
          ms: 'Dahulu kala, ada seorang lelaki baik bernama Bilal. Dia sangat mencintai Allah.',
        },
        emoji: 'man',
        illustrationKey: 'bilal-intro',
        interactiveHint: {
          en: 'Tap the sun to make it shine!',
          ms: 'Tekan matahari untuk bersinar!',
        },
      },
      {
        id: 2,
        text: {
          en: 'Bilal had a beautiful voice. When he spoke, people listened carefully.',
          ms: 'Bilal mempunyai suara yang merdu. Apabila dia bercakap, orang mendengar dengan teliti.',
        },
        narration: {
          en: 'Bilal had a beautiful voice. When he spoke, people listened carefully.',
          ms: 'Bilal mempunyai suara yang merdu. Apabila dia bercakap, orang mendengar dengan teliti.',
        },
        emoji: 'sound',
        illustrationKey: 'bilal-voice',
        interactiveHint: {
          en: 'Tap Bilal to hear his voice!',
          ms: 'Tekan Bilal untuk mendengar suaranya!',
        },
      },
      {
        id: 3,
        text: {
          en: 'Prophet Muhammad taught Bilal about Islam. Bilal was so happy!',
          ms: 'Nabi Muhammad mengajar Bilal tentang Islam. Bilal sangat gembira!',
        },
        narration: {
          en: 'Prophet Muhammad taught Bilal about Islam. Bilal was so happy.',
          ms: 'Nabi Muhammad mengajar Bilal tentang Islam. Bilal sangat gembira.',
        },
        emoji: 'heart',
        illustrationKey: 'bilal-learning',
        interactiveHint: {
          en: 'Tap the hearts to spread love!',
          ms: 'Tekan hati untuk menyebarkan kasih sayang!',
        },
      },
      {
        id: 4,
        text: {
          en: 'Some people were mean to Bilal. But Bilal was brave and kept praying to Allah.',
          ms: 'Sesetengah orang jahat kepada Bilal. Tetapi Bilal tetap berani dan terus berdoa kepada Allah.',
        },
        narration: {
          en: 'Some people were mean to Bilal. But Bilal was brave and kept praying to Allah.',
          ms: 'Sesetengah orang jahat kepada Bilal. Tetapi Bilal tetap berani dan terus berdoa kepada Allah.',
        },
        emoji: 'strong',
        illustrationKey: 'bilal-brave',
        interactiveHint: {
          en: 'Tap Bilal to give him strength!',
          ms: 'Tekan Bilal untuk memberinya kekuatan!',
        },
      },
      {
        id: 5,
        text: {
          en: 'Bilal became the first muadzin! He called people to prayer with his sweet voice. Allahu Akbar!',
          ms: 'Bilal menjadi muadzin pertama! Dia menyeru orang ramai untuk solat dengan suara merdunya. Allahu Akbar!',
        },
        narration: {
          en: 'Bilal became the first muadzin. He called people to prayer with his sweet voice. Allahu Akbar.',
          ms: 'Bilal menjadi muadzin pertama. Dia menyeru orang ramai untuk solat dengan suara merdunya. Allahu Akbar.',
        },
        emoji: 'star',
        illustrationKey: 'bilal-adzan',
        interactiveHint: {
          en: 'Tap the stars to celebrate!',
          ms: 'Tekan bintang untuk meraikan!',
        },
      },
    ],
  },
  {
    id: 'abubakar',
    title: { en: 'Abu Bakar the Truthful', ms: 'Abu Bakar yang Jujur' },
    subtitle: { en: 'The Best Friend of the Prophet', ms: 'Sahabat Baik Nabi' },
    sahabatName: 'Abu Bakar As-Siddiq',
    arabicName: 'أبو بكر الصديق',
    meaning: { en: 'The Truthful One', ms: 'Yang Benar dan Jujur' },
    color: 'emerald',
    gradientFrom: '#D1FAE5',
    gradientTo: '#6EE7B7',
    accentColor: '#059669',
    emoji: 'check',
    lessonTitle: {
      en: 'Always Tell the Truth',
      ms: 'Sentiasa Berkata Benar',
    },
    lessonText: {
      en: 'Abu Bakar always told the truth, even when it was hard. When we tell the truth, people trust us, just like they trusted Abu Bakar!',
      ms: 'Abu Bakar sentiasa berkata benar, walaupun ia sukar. Apabila kita berkata benar, orang mempercayai kita, seperti mereka mempercayai Abu Bakar!',
    },
    pages: [
      {
        id: 1,
        text: {
          en: 'Abu Bakar was the best friend of Prophet Muhammad. They were always together!',
          ms: 'Abu Bakar ialah sahabat baik Nabi Muhammad. Mereka sentiasa bersama!',
        },
        narration: {
          en: 'Abu Bakar was the best friend of Prophet Muhammad. They were always together.',
          ms: 'Abu Bakar ialah sahabat baik Nabi Muhammad. Mereka sentiasa bersama.',
        },
        emoji: 'friends',
        illustrationKey: 'abubakar-intro',
        interactiveHint: {
          en: 'Tap them to wave hello!',
          ms: 'Tekan mereka untuk melambai!',
        },
      },
      {
        id: 2,
        text: {
          en: 'Abu Bakar always told the truth. People called him "As-Siddiq" which means the truthful one.',
          ms: 'Abu Bakar sentiasa berkata benar. Orang memanggilnya "As-Siddiq" yang bermaksud yang benar.',
        },
        narration: {
          en: 'Abu Bakar always told the truth. People called him As-Siddiq, which means the truthful one.',
          ms: 'Abu Bakar sentiasa berkata benar. Orang memanggilnya As-Siddiq, yang bermaksud yang benar.',
        },
        emoji: 'check',
        illustrationKey: 'abubakar-truth',
        interactiveHint: {
          en: 'Tap the star to make it sparkle!',
          ms: 'Tekan bintang untuk berkelip!',
        },
      },
      {
        id: 3,
        text: {
          en: 'When Prophet Muhammad told people about Islam, Abu Bakar believed him right away!',
          ms: 'Apabila Nabi Muhammad memberitahu orang tentang Islam, Abu Bakar terus percaya!',
        },
        narration: {
          en: 'When Prophet Muhammad told people about Islam, Abu Bakar believed him right away.',
          ms: 'Apabila Nabi Muhammad memberitahu orang tentang Islam, Abu Bakar terus percaya.',
        },
        emoji: 'heart',
        illustrationKey: 'abubakar-believe',
        interactiveHint: {
          en: 'Tap the light to make it glow!',
          ms: 'Tekan cahaya untuk bersinar!',
        },
      },
      {
        id: 4,
        text: {
          en: 'Abu Bakar helped poor people and gave food to his friends. He was very kind!',
          ms: 'Abu Bakar menolong orang miskin dan memberi makanan kepada sahabatnya. Dia sangat baik hati!',
        },
        narration: {
          en: 'Abu Bakar helped poor people and gave food to his friends. He was very kind.',
          ms: 'Abu Bakar menolong orang miskin dan memberi makanan kepada sahabatnya. Dia sangat baik hati.',
        },
        emoji: 'giving',
        illustrationKey: 'abubakar-giving',
        interactiveHint: {
          en: 'Tap the food to share it!',
          ms: 'Tekan makanan untuk berkongsi!',
        },
      },
      {
        id: 5,
        text: {
          en: 'Abu Bakar was a good leader. He showed us that being truthful makes us strong!',
          ms: 'Abu Bakar seorang pemimpin yang baik. Dia menunjukkan bahawa berkata benar menjadikan kita kuat!',
        },
        narration: {
          en: 'Abu Bakar was a good leader. He showed us that being truthful makes us strong.',
          ms: 'Abu Bakar seorang pemimpin yang baik. Dia menunjukkan bahawa berkata benar menjadikan kita kuat.',
        },
        emoji: 'crown',
        illustrationKey: 'abubakar-leader',
        interactiveHint: {
          en: 'Tap the crown to celebrate!',
          ms: 'Tekan mahkota untuk meraikan!',
        },
      },
    ],
  },
  {
    id: 'khadijah',
    title: { en: 'Khadijah the Loving', ms: 'Khadijah yang Penuh Kasih' },
    subtitle: { en: 'The First to Believe', ms: 'Yang Pertama Beriman' },
    sahabatName: 'Khadijah binti Khuwailid',
    arabicName: 'خديجة بنت خويلد',
    meaning: { en: 'Mother of the Believers', ms: 'Ibu Orang-orang Beriman' },
    color: 'rose',
    gradientFrom: '#FFE4E6',
    gradientTo: '#FDA4AF',
    accentColor: '#E11D48',
    emoji: 'heart',
    lessonTitle: {
      en: 'Love and Support Your Family',
      ms: 'Sayangi dan Sokongi Keluarga Anda',
    },
    lessonText: {
      en: 'Khadijah loved and supported Prophet Muhammad. When we love and help our family, we make them happy, just like Khadijah did!',
      ms: 'Khadijah menyayangi dan menyokong Nabi Muhammad. Apabila kita menyayangi dan menolong keluarga, kita menjadikan mereka gembira, seperti yang Khadijah lakukan!',
    },
    pages: [
      {
        id: 1,
        text: {
          en: 'Khadijah was a kind and smart woman. She was loved by everyone.',
          ms: 'Khadijah seorang wanita yang baik dan bijak. Dia disayangi semua orang.',
        },
        narration: {
          en: 'Khadijah was a kind and smart woman. She was loved by everyone.',
          ms: 'Khadijah seorang wanita yang baik dan bijak. Dia disayangi semua orang.',
        },
        emoji: 'woman',
        illustrationKey: 'khadijah-intro',
        interactiveHint: {
          en: 'Tap the flowers to make them bloom!',
          ms: 'Tekan bunga untuk mekarnya!',
        },
      },
      {
        id: 2,
        text: {
          en: 'Khadijah married Prophet Muhammad. They were a happy family.',
          ms: 'Khadijah berkahwin dengan Nabi Muhammad. Mereka keluarga yang bahagia.',
        },
        narration: {
          en: 'Khadijah married Prophet Muhammad. They were a happy family.',
          ms: 'Khadijah berkahwin dengan Nabi Muhammad. Mereka keluarga yang bahagia.',
        },
        emoji: 'family',
        illustrationKey: 'khadijah-family',
        interactiveHint: {
          en: 'Tap the house to see it glow!',
          ms: 'Tekan rumah untuk bersinar!',
        },
      },
      {
        id: 3,
        text: {
          en: 'When Prophet Muhammad was worried, Khadijah hugged him and said nice words.',
          ms: 'Apabila Nabi Muhammad berasa risau, Khadijah memeluknya dan berkata kata-kata yang baik.',
        },
        narration: {
          en: 'When Prophet Muhammad was worried, Khadijah hugged him and said nice words.',
          ms: 'Apabila Nabi Muhammad berasa risau, Khadijah memeluknya dan berkata kata-kata yang baik.',
        },
        emoji: 'hug',
        illustrationKey: 'khadijah-hug',
        interactiveHint: {
          en: 'Tap the hearts to send love!',
          ms: 'Tekan hati untuk menghantar kasih sayang!',
        },
      },
      {
        id: 4,
        text: {
          en: 'Khadijah was the first person to believe in Islam. She had a strong heart!',
          ms: 'Khadijah ialah orang pertama yang beriman dengan Islam. Dia mempunyai hati yang kuat!',
        },
        narration: {
          en: 'Khadijah was the first person to believe in Islam. She had a strong heart.',
          ms: 'Khadijah ialah orang pertama yang beriman dengan Islam. Dia mempunyai hati yang kuat.',
        },
        emoji: 'star',
        illustrationKey: 'khadijah-believe',
        interactiveHint: {
          en: 'Tap the star to make it shine!',
          ms: 'Tekan bintang untuk bersinar!',
        },
      },
      {
        id: 5,
        text: {
          en: 'Khadijah showed us that love and kindness make our family strong. Alhamdulillah!',
          ms: 'Khadijah menunjukkan bahawa kasih sayang dan kebaikan menjadikan keluarga kita kuat. Alhamdulillah!',
        },
        narration: {
          en: 'Khadijah showed us that love and kindness make our family strong. Alhamdulillah.',
          ms: 'Khadijah menunjukkan bahawa kasih sayang dan kebaikan menjadikan keluarga kita kuat. Alhamdulillah.',
        },
        emoji: 'heart',
        illustrationKey: 'khadijah-love',
        interactiveHint: {
          en: 'Tap the hearts to spread love!',
          ms: 'Tekan hati untuk menyebarkan kasih sayang!',
        },
      },
    ],
  },
  {
    id: 'umar',
    title: { en: 'Umar the Just', ms: 'Umar yang Adil' },
    subtitle: { en: 'The Fair Leader', ms: 'Pemimpin yang Adil' },
    sahabatName: 'Umar bin Khattab',
    arabicName: 'عمر بن الخطاب',
    meaning: { en: 'The Just Leader', ms: 'Pemimpin yang Adil' },
    color: 'sky',
    gradientFrom: '#E0F2FE',
    gradientTo: '#7DD3FC',
    accentColor: '#0284C7',
    emoji: 'crown',
    lessonTitle: {
      en: 'Be Fair and Kind to Everyone',
      ms: 'Bersikap Adil dan Baik kepada Semua',
    },
    lessonText: {
      en: 'Umar treated everyone the same, rich or poor. When we are fair and kind, we make the world better, just like Umar!',
      ms: 'Umar melayan semua orang sama, kaya atau miskin. Apabila kita adil dan baik, kita menjadikan dunia lebih baik, seperti Umar!',
    },
    pages: [
      {
        id: 1,
        text: {
          en: 'Umar was a strong and brave man. He walked tall like a lion!',
          ms: 'Umar seorang lelaki yang kuat dan berani. Dia berjalan tegak seperti singa!',
        },
        narration: {
          en: 'Umar was a strong and brave man. He walked tall like a lion.',
          ms: 'Umar seorang lelaki yang kuat dan berani. Dia berjalan tegak seperti singa.',
        },
        emoji: 'strong',
        illustrationKey: 'umar-intro',
        interactiveHint: {
          en: 'Tap Umar to make him strong!',
          ms: 'Tekan Umar untuk menjadikannya kuat!',
        },
      },
      {
        id: 2,
        text: {
          en: 'One day, Umar learned about Islam. His heart became soft and kind.',
          ms: 'Pada suatu hari, Umar belajar tentang Islam. Hatinya menjadi lembut dan baik.',
        },
        narration: {
          en: 'One day, Umar learned about Islam. His heart became soft and kind.',
          ms: 'Pada suatu hari, Umar belajar tentang Islam. Hatinya menjadi lembut dan baik.',
        },
        emoji: 'heart',
        illustrationKey: 'umar-change',
        interactiveHint: {
          en: 'Tap the heart to fill it!',
          ms: 'Tekan hati untuk memenuhinya!',
        },
      },
      {
        id: 3,
        text: {
          en: 'Umar became a leader. He treated everyone fairly, rich or poor.',
          ms: 'Umar menjadi pemimpin. Dia melayan semua orang dengan adil, kaya atau miskin.',
        },
        narration: {
          en: 'Umar became a leader. He treated everyone fairly, rich or poor.',
          ms: 'Umar menjadi pemimpin. Dia melayan semua orang dengan adil, kaya atau miskin.',
        },
        emoji: 'crown',
        illustrationKey: 'umar-leader',
        interactiveHint: {
          en: 'Tap the crown to make him king!',
          ms: 'Tekan mahkota untuk menjadikannya raja!',
        },
      },
      {
        id: 4,
        text: {
          en: 'At night, Umar walked in the streets to check if people had enough food.',
          ms: 'Pada waktu malam, Umar berjalan di jalanan untuk memastikan orang ramai mempunyai makanan yang mencukupi.',
        },
        narration: {
          en: 'At night, Umar walked in the streets to check if people had enough food.',
          ms: 'Pada waktu malam, Umar berjalan di jalanan untuk memastikan orang ramai mempunyai makanan yang mencukupi.',
        },
        emoji: 'moon',
        illustrationKey: 'umar-night',
        interactiveHint: {
          en: 'Tap the moon to light the night!',
          ms: 'Tekan bulan untuk menerangi malam!',
        },
      },
      {
        id: 5,
        text: {
          en: 'Umar showed us that being fair and caring makes us a good Muslim. MasyaAllah!',
          ms: 'Umar menunjukkan bahawa bersikap adil dan prihatin menjadikan kita Muslim yang baik. MasyaAllah!',
        },
        narration: {
          en: 'Umar showed us that being fair and caring makes us a good Muslim. MasyaAllah.',
          ms: 'Umar menunjukkan bahawa bersikap adil dan prihatin menjadikan kita Muslim yang baik. MasyaAllah.',
        },
        emoji: 'star',
        illustrationKey: 'umar-good',
        interactiveHint: {
          en: 'Tap the stars to celebrate!',
          ms: 'Tekan bintang untuk meraikan!',
        },
      },
    ],
  },
];

export const getStoryById = (id: string): Story | undefined => {
  return stories.find((s) => s.id === id);
};
