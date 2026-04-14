import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views/info';

import get from './get';

export default async function Page() {
  const data = await get();

  return (
    <Suspense fallback={<Loading />}>
      <View data={data} />
    </Suspense>
  );
}
