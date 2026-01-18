import type { Metadata } from 'next';
import { Suspense } from 'react';

import { Fallback, View } from '@/views/now';

export const metadata: Metadata = {
  title: 'Now',
  description: 'As per the recommendation of the internet, here is my very own now page.',
};

export default function Page() {
  return (
    <Suspense fallback={<Fallback />}>
      <View />
    </Suspense>
  );
}
