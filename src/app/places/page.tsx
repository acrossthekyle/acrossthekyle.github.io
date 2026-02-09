import type { Metadata } from 'next';
import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views/places';

import get from './get';

export const metadata: Metadata = {
  title: 'Places',
  description: `From Nepal's Himalayas to windswept Patagonia, I've thru-hiked a lot of miles, explored numerous destinations, and seen some amazing things.`,
};

export default function Page() {
  const data = get();

  return (
    <Suspense fallback={<Loading />}>
      <View data={data} />
    </Suspense>
  );
}
