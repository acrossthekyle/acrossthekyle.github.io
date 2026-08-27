import { Suspense } from 'react';

import Ui from '@/ui';
import View from '@/views/404';

export default async function NotFound() {
  return (
    <Suspense fallback={<Ui.Loaders.Fallback />}>
      <View />
    </Suspense>
  );
}
