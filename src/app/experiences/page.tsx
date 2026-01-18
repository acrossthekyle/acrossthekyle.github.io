import type { Metadata } from 'next';
import { Suspense } from 'react';

import { Fallback, View } from '@/views/experiences';

import get from './get';

export const metadata: Metadata = {
  title: 'Experiences',
  description: `I love leaving the crowded city behind and heading into nature with everything I need on my back, letting the trail remind me how little it actually takes to feel whole. I've thru-hiked a lot of miles, and one thing's always been true: if I can see it, I can make it.`,
};

export default function Page() {
  const data = get();

  return (
    <Suspense fallback={<Fallback />}>
      <View data={data} />
    </Suspense>
  );
}
