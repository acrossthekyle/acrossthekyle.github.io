import type { Metadata } from 'next';
import { Suspense } from 'react';

import { Fallback, View } from '@/views/colophon';

export const metadata: Metadata = {
  title: 'Colophon',
  description: 'Helpful information about what went into the philosophy for my website.',
};

export default function Page() {
  return (
    <Suspense fallback={<Fallback />}>
      <View />
    </Suspense>
  );
}
