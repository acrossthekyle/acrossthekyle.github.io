import type { Metadata } from 'next';
import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views/words';

import get from './get';

export const metadata: Metadata = {
  title: 'Words',
  description: 'All about words, a sort of mini-blog where I share my thoughts and opinions on things.',
};

export default function Page() {
  const data = get();

  return (
    <Suspense fallback={<Loading />}>
      <View data={data} />
    </Suspense>
  );
}
