import type { Metadata } from 'next';
import { Suspense } from 'react';

import { Ui } from '@/ui';
import View from '@/views/root';

import get from './get';

export const metadata: Metadata = {
  description: 'An inspired backpacker and travel enthusiast living a city-based life in Chicago.',
};

export default async function Page() {
  const collections = await get();

  return (
    <Suspense fallback={<Ui.Loaders.Fallback />}>
      <View data={{ collections }} />
    </Suspense>
  );
}
