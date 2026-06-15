import type { Metadata } from 'next';
import { Suspense } from 'react';

import Ui from '@/ui';
import View from '@/views/wanderings';

import get from './get';

export const metadata: Metadata = {
  title: 'Travels',
  description: 'A collection of thru-hikes, summits, and experiences.',
};

export default async function Page() {
  const data = await get();

  return (
    <Suspense fallback={<Ui.Loaders.Fallback />}>
      <View data={data} />
    </Suspense>
  );
}
