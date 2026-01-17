import type { Metadata } from 'next';
import { Suspense } from 'react';

import { Fallback, View } from '@/views/writing';

import get from './get';

export const metadata: Metadata = {
  title: 'Writing',
  description: `TBD.`,
};

export default function Page() {
  const data = get();

  return (
    <Suspense fallback={<Fallback />}>
      <View data={data} />
    </Suspense>
  );
}
