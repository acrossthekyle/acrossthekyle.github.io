import type { Metadata } from 'next';
import { Suspense } from 'react';

import Ui from '@/ui';
import View from '@/views/travels';

import { get } from './get';

export const metadata: Metadata = {
  title: `Travels`,
  description: ``,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default async function Page() {
  const collections = await get();

  return (
    <Suspense fallback={<Ui.Loaders.Fallback />}>
      <View data={{ collections }} />
    </Suspense>
  );
}
