import type { Metadata } from 'next';
import { Suspense } from 'react';

import { introduction } from '@/constants';
import { Fallback, View } from '@/views/about';

export const metadata: Metadata = {
  title: 'About',
  description: introduction,
};

export default function Page() {
  return (
    <Suspense fallback={<Fallback />}>
      <View />
    </Suspense>
  );
}
