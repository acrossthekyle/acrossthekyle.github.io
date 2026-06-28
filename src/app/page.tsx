import { Suspense } from 'react';

import Ui from '@/ui';
import View from '@/views/index';

export default async function Page() {
  return (
    <Suspense fallback={<Ui.Loaders.Fallback />}>
      <View />
    </Suspense>
  );
}
