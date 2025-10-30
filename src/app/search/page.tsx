import type { Metadata } from 'next';
import { Suspense } from 'react';

import { Fallback, View } from '@/views/search';

export const metadata: Metadata = {
  title: 'Search',
  description: '',
};

export default function Page() {
  return (
    <Suspense fallback={<Fallback />}>
      <View />
    </Suspense>
  );
}
