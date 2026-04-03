import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views/trails';

import get from './get';

export default async function Page() {
  const data = get();

  return (
    <Suspense fallback={<Loading />}>
      <View data={data} />
    </Suspense>
  );
}
