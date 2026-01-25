import type { Metadata } from 'next';
import { Suspense } from 'react';

import { Fallback, View } from '@/views/wiki';

export const metadata: Metadata = {
  title: 'Wiki',
  description: 'Helpful information about hiking terminology, and other things.',
};

export default function Page() {
  return (
    <Suspense fallback={<Fallback />}>
      <View />
    </Suspense>
  );
}
