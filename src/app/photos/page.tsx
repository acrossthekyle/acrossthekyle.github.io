import type { Metadata } from 'next';
import { Suspense } from 'react';

import { Fallback, View } from '@/views/photos';

export const metadata: Metadata = {
  title: 'Photos',
  description: 'I use my phone to capture moments from everyday life and the vibrant city around me. Sharing these images here lets me showcase the world I encounter.',
};

export default function Page() {
  return (
    <Suspense fallback={<Fallback />}>
      <View />
    </Suspense>
  );
}
