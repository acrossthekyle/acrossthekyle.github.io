import { Suspense } from 'react';

import Skeleton from '@/views/home/skeleton';
import View from '@/views/home';

export default function Page() {
  return (
    <Suspense fallback={<Skeleton />}>
      <View />
    </Suspense>
  );
}
