import type { Metadata } from 'next';
import { Suspense } from 'react';

import { Fallback, View } from '@/views/terminology';

export const metadata: Metadata = {
  title: 'Terminology',
  description: 'Trails and travels explained.',
};

export default function Page() {
  return (
    <Suspense fallback={<Fallback />}>
      <View />
    </Suspense>
  );
}
