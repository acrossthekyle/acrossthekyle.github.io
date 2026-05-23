import type { Metadata } from 'next';
import { Suspense } from 'react';

import { Ui } from '@/ui';
import View from '@/views/about';

export const metadata: Metadata = {
  title: 'About',
  description: 'An inspired backpacker and travel enthusiast living a city-based life in Chicago.',
};

export default function Page() {
  return (
    <Suspense fallback={<Ui.Loaders.Fallback />}>
      <View />
    </Suspense>
  );
}
