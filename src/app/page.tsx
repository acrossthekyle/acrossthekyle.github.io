import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views';

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <View />
    </Suspense>
  );
}
