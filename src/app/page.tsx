import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views/root';

import get from './get';

export default async function Page() {
  const { albums, resume, trails } = await get();

  return (
    <Suspense fallback={<Loading />}>
      <View data={{ albums, resume, trails: trails.all }} />
    </Suspense>
  );
}
