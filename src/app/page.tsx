import { Suspense } from 'react';

import { Ui } from '@/ui';
import View from '@/views/about';

import get from './get';

export default async function Page() {
  const recent = await get();

  return (
    <Suspense fallback={<Ui.Loaders.Fallback />}>
      <View data={{ recent }} />
    </Suspense>
  );
}
