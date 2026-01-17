import type { Metadata } from 'next';
import { Suspense } from 'react';

import { Fallback, View } from '@/views/experiences';

import get from './get';

export const metadata: Metadata = {
  title: 'Wanderings',
  description: `I've spent the last ${new Date().getFullYear() - 2018} years exploring the world. The mountains are my church, and after hiking thousands of miles nothing inspires me more than leaving the crowded city behind and heading into nature carrying everything I need on my back. If I can walk dozens of miles every day for a weeks on end, I can do anything.`,
};

export default function Page() {
  const data = get();

  return (
    <Suspense fallback={<Fallback />}>
      <View data={data} />
    </Suspense>
  );
}
