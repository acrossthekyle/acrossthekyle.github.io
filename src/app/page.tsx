import { Suspense } from 'react';

import Ui from '@/ui';
import View from '@/view';

import get from './get';

export default async function Page() {
  const collections = await get();

  return (
    <Suspense fallback={<Ui.Loaders.Fallback />}>
      <View data={{ collections }} />
    </Suspense>
  );
}
