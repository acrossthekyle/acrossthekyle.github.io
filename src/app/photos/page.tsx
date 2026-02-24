import type { Metadata } from 'next';
import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views/photos';

import get from './get';

export const metadata: Metadata = {
  title: 'Photos',
  description: 'I use my phone to capture moments from everyday life and the vibrant city around me. Sharing these images here lets me showcase the world I encounter.',
};

export default function Page() {
  const data = get();

  return (
    <Suspense fallback={<Loading />}>
      <View data={data} />
    </Suspense>
  );
}
