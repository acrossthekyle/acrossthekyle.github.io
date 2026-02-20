import type { Metadata } from 'next';
import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views/gear';

import get from './get';

export const metadata: Metadata = {
  title: 'Packs',
  description: `Everything I've brought with me on my backpacking trips.`,
};

export default function Page() {
  const data = get();

  return (
    <Suspense fallback={<Loading />}>
      <View data={data} />
    </Suspense>
  );
}
