import { Suspense } from 'react';

import { Fallback, View } from '@/views/root';

import get from './get';

export default function Page() {
  const data = get();

  return (
    <Suspense fallback={<Fallback />}>
      <View data={data} />
    </Suspense>
  );
}
