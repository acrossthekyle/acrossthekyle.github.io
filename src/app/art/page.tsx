import type { Metadata } from 'next';
import { Suspense } from 'react';

import { Fallback, View } from '@/views/art';

export const metadata: Metadata = {
  title: 'Art',
  description: '',
};

export default function Page() {
  return (
    <Suspense fallback={<Fallback />}>
      <View />
    </Suspense>
  );
}
