import type { Metadata } from 'next';
import { Suspense } from 'react';

import { Fallback, View } from '@/views/places';

import get from './get';

export const metadata: Metadata = {
  title: 'Trails and Travels',
  description: `From Nepal's Himalayas to windswept Patagonia, I've hiked a lot of miles and witnessed some amazing things. Wandering is life, and the thrill keeps me coming back for more.`,
};

export default function Page() {
  const data = get();

  return (
    <Suspense fallback={<Fallback />}>
      <View data={data} />
    </Suspense>
  );
}
