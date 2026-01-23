import { Suspense } from 'react';

import { Fallback, View } from '@/views/root';

export default function Page() {
  return (
    <Suspense fallback={<Fallback />}>
      <View />
    </Suspense>
  );
}
