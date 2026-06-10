import type { Metadata } from 'next';
import { Suspense } from 'react';

import { Ui } from '@/ui';
import View from '@/views/catalog';

import get from './get';

export const metadata: Metadata = {
  title: 'Wanderings',
  description: 'A collection of thru-hikes, summits, and experiences since 2016',
};

export default async function Page() {
  const collections = await get();

  return (
    <Suspense fallback={<Ui.Loaders.Fallback />}>
      <View data={{ collections }} />
    </Suspense>
  );
}
