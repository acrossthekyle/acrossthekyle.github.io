import { Suspense } from 'react';

import Ui from '@/ui';
import View from '@/views/index';

import { get } from './get';

export default async function Page() {
  const data = await get();

  return (
    <Suspense fallback={<Ui.Loaders.Spinner />}>
      <View data={data} />
    </Suspense>
  );
}
