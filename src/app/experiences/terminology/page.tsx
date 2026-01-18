import type { Metadata } from 'next';
import { Suspense } from 'react';

import { Fallback, View } from '@/views/experiences/terminology';

export const metadata: Metadata = {
  title: 'Terminology → Experiences',
  description: 'Hiking terminology explaind.',
};

export default function Page() {
  return (
    <Suspense fallback={<Fallback />}>
      <View />
    </Suspense>
  );
}
