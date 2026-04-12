import type { Metadata } from 'next';
import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views/trails';

import get from './get';

export const metadata: Metadata = {
  title: '⁽ ⁰¹ ⁾ Trails - Hikes and summits',
};

export default async function Page() {
  const data = get();

  return (
    <Suspense fallback={<Loading />}>
      <View data={data} />
    </Suspense>
  );
}
