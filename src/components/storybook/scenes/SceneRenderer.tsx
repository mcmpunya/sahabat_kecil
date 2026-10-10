'use client';

import { BilalIntro, BilalVoice, BilalLearning, BilalBrave, BilalAdzan } from './BilalScenes';
import { AbuBakarIntro, AbuBakarTruth, AbuBakarBelieve, AbuBakarGiving, AbuBakarLeader } from './AbuBakarScenes';
import { KhadijahIntro, KhadijahFamily, KhadijahHug, KhadijahBelieve, KhadijahLove } from './KhadijahScenes';
import { UmarIntro, UmarChange, UmarLeader, UmarNight, UmarGood } from './UmarScenes';

interface SceneRendererProps {
  storyId: string;
  illustrationKey: string;
  triggered: boolean;
  onTrigger: () => void;
}

export function SceneRenderer({ storyId, illustrationKey, triggered, onTrigger }: SceneRendererProps) {
  const props = { triggered, onTrigger };

  if (storyId === 'bilal') {
    switch (illustrationKey) {
      case 'bilal-intro': return <BilalIntro {...props} />;
      case 'bilal-voice': return <BilalVoice {...props} />;
      case 'bilal-learning': return <BilalLearning {...props} />;
      case 'bilal-brave': return <BilalBrave {...props} />;
      case 'bilal-adzan': return <BilalAdzan {...props} />;
    }
  }

  if (storyId === 'abubakar') {
    switch (illustrationKey) {
      case 'abubakar-intro': return <AbuBakarIntro {...props} />;
      case 'abubakar-truth': return <AbuBakarTruth {...props} />;
      case 'abubakar-believe': return <AbuBakarBelieve {...props} />;
      case 'abubakar-giving': return <AbuBakarGiving {...props} />;
      case 'abubakar-leader': return <AbuBakarLeader {...props} />;
    }
  }

  if (storyId === 'khadijah') {
    switch (illustrationKey) {
      case 'khadijah-intro': return <KhadijahIntro {...props} />;
      case 'khadijah-family': return <KhadijahFamily {...props} />;
      case 'khadijah-hug': return <KhadijahHug {...props} />;
      case 'khadijah-believe': return <KhadijahBelieve {...props} />;
      case 'khadijah-love': return <KhadijahLove {...props} />;
    }
  }

  if (storyId === 'umar') {
    switch (illustrationKey) {
      case 'umar-intro': return <UmarIntro {...props} />;
      case 'umar-change': return <UmarChange {...props} />;
      case 'umar-leader': return <UmarLeader {...props} />;
      case 'umar-night': return <UmarNight {...props} />;
      case 'umar-good': return <UmarGood {...props} />;
    }
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <p className="text-gray-500">Scene not found</p>
    </div>
  );
}
