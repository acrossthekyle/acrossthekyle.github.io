import type { Metadata } from 'next';
import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views/books';

export const metadata: Metadata = {
  title: 'Books',
  description: `The printed words that I've read and loved over the years, in no particular order.`,
};

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <View />
    </Suspense>
  );
}
