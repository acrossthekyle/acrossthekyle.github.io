import { Suspense } from 'react';

import { Ui } from '@/ui';
import View from '@/view';

import get from './get';

export default async function Page() {
  const { collections, images } = await get();

  return (
    <Suspense fallback={<Ui.Loaders.Fallback />}>
      <View collections={collections} images={images} />
    </Suspense>
  );
}
