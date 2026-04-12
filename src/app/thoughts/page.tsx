import type { Metadata } from 'next';
import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views/thoughts';

import get from './get';

export const metadata: Metadata = {
  title: '⁰³ Thoughts',
};

export default function Page() {
  const data = get();

  return (
    <Suspense fallback={<Loading />}>
      <View data={data} />
    </Suspense>
  );
}
