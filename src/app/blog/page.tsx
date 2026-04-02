import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views/blog';

import get from './get';

export default function Page() {
  const data = get();

  return (
    <Suspense fallback={<Loading />}>
      <View data={data} />
    </Suspense>
  );
}
