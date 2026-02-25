import type { Metadata } from 'next';
import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views/books';

import get from './get';

export const metadata: Metadata = {
  title: 'Books',
  description: `The printed words that I've read over the years, in no particular order.`,
};

export default function Page() {
  const data = get();

  return (
    <Suspense fallback={<Loading />}>
      <View data={data} />
    </Suspense>
  );
}
