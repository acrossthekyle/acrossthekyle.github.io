import type { Metadata } from 'next';
import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views/albums';

import get from './get';

export const metadata: Metadata = {
  title: '⁰² Albums',
};

export default async function Page() {
  const data = get();

  return (
    <Suspense fallback={<Loading />}>
      <View data={data} />
    </Suspense>
  );
}
