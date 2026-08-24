import { Suspense } from 'react';

import Ui from '@/ui';
import View from '@/views/404';

import { get } from './get';

export default async function NotFound() {
  const data = await get();

  return (
    <Suspense fallback={<Ui.Loaders.Fallback />}>
      <View data={data} />
    </Suspense>
  );
}
