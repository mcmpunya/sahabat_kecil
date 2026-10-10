export interface StoryPage {
  id: number;
  text: string;
  narration: string;
  emoji: string;
  illustrationKey: string;
  interactiveHint?: string;
}

export interface Story {
  id: string;
  title: string;
  subtitle: string;
  sahabatName: string;
  arabicName: string;
  meaning: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  emoji: string;
  lessonTitle: string;
  lessonText: string;
  pages: StoryPage[];
}

export const stories: Story[] = [
  {
    id: 'bilal',
    title: 'Bilal the Brave',
    subtitle: 'The First Voice of Adzan',
    sahabatName: 'Bilal bin Rabah',
    arabicName: 'بلال بن رباح',
    meaning: 'The First Muadzin',
    color: 'amber',
    gradientFrom: '#FEF3C7',
    gradientTo: '#FCD34D',
    accentColor: '#D97706',
    emoji: 'star',
    lessonTitle: 'Be Brave and Trust Allah',
    lessonText: 'Bilal was brave. Even when things were hard, he never stopped loving Allah. We can be brave too, just like Bilal!',
    pages: [
      {
        id: 1,
        text: 'Long ago, there was a kind man named Bilal. He loved Allah very much!',
        narration: 'Long ago, there was a kind man named Bilal. He loved Allah very much.',
        emoji: 'man',
        illustrationKey: 'bilal-intro',
        interactiveHint: 'Tap the sun to make it shine!',
      },
      {
        id: 2,
        text: 'Bilal had a beautiful voice. When he spoke, people listened carefully.',
        narration: 'Bilal had a beautiful voice. When he spoke, people listened carefully.',
        emoji: 'sound',
        illustrationKey: 'bilal-voice',
        interactiveHint: 'Tap Bilal to hear his voice!',
      },
      {
        id: 3,
        text: 'Prophet Muhammad taught Bilal about Islam. Bilal was so happy!',
        narration: 'Prophet Muhammad taught Bilal about Islam. Bilal was so happy.',
        emoji: 'heart',
        illustrationKey: 'bilal-learning',
        interactiveHint: 'Tap the hearts to spread love!',
      },
      {
        id: 4,
        text: 'Some people were mean to Bilal. But Bilal was brave and kept praying to Allah.',
        narration: 'Some people were mean to Bilal. But Bilal was brave and kept praying to Allah.',
        emoji: 'strong',
        illustrationKey: 'bilal-brave',
        interactiveHint: 'Tap Bilal to give him strength!',
      },
      {
        id: 5,
        text: 'Bilal became the first muadzin! He called people to prayer with his sweet voice. Allahu Akbar!',
        narration: 'Bilal became the first muadzin. He called people to prayer with his sweet voice. Allahu Akbar.',
        emoji: 'star',
        illustrationKey: 'bilal-adzan',
        interactiveHint: 'Tap the stars to celebrate!',
      },
    ],
  },
  {
    id: 'abubakar',
    title: 'Abu Bakar the Truthful',
    subtitle: 'The Best Friend of the Prophet',
    sahabatName: 'Abu Bakar As-Siddiq',
    arabicName: 'أبو بكر الصديق',
    meaning: 'The Truthful One',
    color: 'emerald',
    gradientFrom: '#D1FAE5',
    gradientTo: '#6EE7B7',
    accentColor: '#059669',
    emoji: 'check',
    lessonTitle: 'Always Tell the Truth',
    lessonText: 'Abu Bakar always told the truth, even when it was hard. When we tell the truth, people trust us, just like they trusted Abu Bakar!',
    pages: [
      {
        id: 1,
        text: 'Abu Bakar was the best friend of Prophet Muhammad. They were always together!',
        narration: 'Abu Bakar was the best friend of Prophet Muhammad. They were always together.',
        emoji: 'friends',
        illustrationKey: 'abubakar-intro',
        interactiveHint: 'Tap them to wave hello!',
      },
      {
        id: 2,
        text: 'Abu Bakar always told the truth. People called him "As-Siddiq" which means the truthful one.',
        narration: 'Abu Bakar always told the truth. People called him As-Siddiq, which means the truthful one.',
        emoji: 'check',
        illustrationKey: 'abubakar-truth',
        interactiveHint: 'Tap the star to make it sparkle!',
      },
      {
        id: 3,
        text: 'When Prophet Muhammad told people about Islam, Abu Bakar believed him right away!',
        narration: 'When Prophet Muhammad told people about Islam, Abu Bakar believed him right away.',
        emoji: 'heart',
        illustrationKey: 'abubakar-believe',
        interactiveHint: 'Tap the light to make it glow!',
      },
      {
        id: 4,
        text: 'Abu Bakar helped poor people and gave food to his friends. He was very kind!',
        narration: 'Abu Bakar helped poor people and gave food to his friends. He was very kind.',
        emoji: 'giving',
        illustrationKey: 'abubakar-giving',
        interactiveHint: 'Tap the food to share it!',
      },
      {
        id: 5,
        text: 'Abu Bakar was a good leader. He showed us that being truthful makes us strong!',
        narration: 'Abu Bakar was a good leader. He showed us that being truthful makes us strong.',
        emoji: 'crown',
        illustrationKey: 'abubakar-leader',
        interactiveHint: 'Tap the crown to celebrate!',
      },
    ],
  },
  {
    id: 'khadijah',
    title: 'Khadijah the Loving',
    subtitle: 'The First to Believe',
    sahabatName: 'Khadijah binti Khuwailid',
    arabicName: 'خديجة بنت خويلد',
    meaning: 'Mother of the Believers',
    color: 'rose',
    gradientFrom: '#FFE4E6',
    gradientTo: '#FDA4AF',
    accentColor: '#E11D48',
    emoji: 'heart',
    lessonTitle: 'Love and Support Your Family',
    lessonText: 'Khadijah loved and supported Prophet Muhammad. When we love and help our family, we make them happy, just like Khadijah did!',
    pages: [
      {
        id: 1,
        text: 'Khadijah was a kind and smart woman. She was loved by everyone.',
        narration: 'Khadijah was a kind and smart woman. She was loved by everyone.',
        emoji: 'woman',
        illustrationKey: 'khadijah-intro',
        interactiveHint: 'Tap the flowers to make them bloom!',
      },
      {
        id: 2,
        text: 'Khadijah married Prophet Muhammad. They were a happy family.',
        narration: 'Khadijah married Prophet Muhammad. They were a happy family.',
        emoji: 'family',
        illustrationKey: 'khadijah-family',
        interactiveHint: 'Tap the house to see it glow!',
      },
      {
        id: 3,
        text: 'When Prophet Muhammad was worried, Khadijah hugged him and said nice words.',
        narration: 'When Prophet Muhammad was worried, Khadijah hugged him and said nice words.',
        emoji: 'hug',
        illustrationKey: 'khadijah-hug',
        interactiveHint: 'Tap the hearts to send love!',
      },
      {
        id: 4,
        text: 'Khadijah was the first person to believe in Islam. She had a strong heart!',
        narration: 'Khadijah was the first person to believe in Islam. She had a strong heart.',
        emoji: 'star',
        illustrationKey: 'khadijah-believe',
        interactiveHint: 'Tap the star to make it shine!',
      },
      {
        id: 5,
        text: 'Khadijah showed us that love and kindness make our family strong. Alhamdulillah!',
        narration: 'Khadijah showed us that love and kindness make our family strong. Alhamdulillah.',
        emoji: 'heart',
        illustrationKey: 'khadijah-love',
        interactiveHint: 'Tap the hearts to spread love!',
      },
    ],
  },
  {
    id: 'umar',
    title: 'Umar the Just',
    subtitle: 'The Fair Leader',
    sahabatName: 'Umar bin Khattab',
    arabicName: 'عمر بن الخطاب',
    meaning: 'The Just Leader',
    color: 'sky',
    gradientFrom: '#E0F2FE',
    gradientTo: '#7DD3FC',
    accentColor: '#0284C7',
    emoji: 'crown',
    lessonTitle: 'Be Fair and Kind to Everyone',
    lessonText: 'Umar treated everyone the same, rich or poor. When we are fair and kind, we make the world better, just like Umar!',
    pages: [
      {
        id: 1,
        text: 'Umar was a strong and brave man. He walked tall like a lion!',
        narration: 'Umar was a strong and brave man. He walked tall like a lion.',
        emoji: 'strong',
        illustrationKey: 'umar-intro',
        interactiveHint: 'Tap Umar to make him strong!',
      },
      {
        id: 2,
        text: 'One day, Umar learned about Islam. His heart became soft and kind.',
        narration: 'One day, Umar learned about Islam. His heart became soft and kind.',
        emoji: 'heart',
        illustrationKey: 'umar-change',
        interactiveHint: 'Tap the heart to fill it!',
      },
      {
        id: 3,
        text: 'Umar became a leader. He treated everyone fairly, rich or poor.',
        narration: 'Umar became a leader. He treated everyone fairly, rich or poor.',
        emoji: 'crown',
        illustrationKey: 'umar-leader',
        interactiveHint: 'Tap the crown to make him king!',
      },
      {
        id: 4,
        text: 'At night, Umar walked in the streets to check if people had enough food.',
        narration: 'At night, Umar walked in the streets to check if people had enough food.',
        emoji: 'moon',
        illustrationKey: 'umar-night',
        interactiveHint: 'Tap the moon to light the night!',
      },
      {
        id: 5,
        text: 'Umar showed us that being fair and caring makes us a good Muslim. MasyaAllah!',
        narration: 'Umar showed us that being fair and caring makes us a good Muslim. MasyaAllah.',
        emoji: 'star',
        illustrationKey: 'umar-good',
        interactiveHint: 'Tap the stars to celebrate!',
      },
    ],
  },
];

export const getStoryById = (id: string): Story | undefined => {
  return stories.find((s) => s.id === id);
};
