import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views/colophon';

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <View />
    </Suspense>
  );
}
