import type { Metadata } from 'next';
import { Suspense } from 'react';

import { Fallback, View } from '@/views/experiences/terminology';

export const metadata: Metadata = {
  title: 'Experiences Terminology',
  description: `TBD.`,
};

export default function Page() {
  return (
    <Suspense fallback={<Fallback />}>
      <View />
    </Suspense>
  );
}
