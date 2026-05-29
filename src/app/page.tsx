import { Suspense } from 'react';

import { Ui } from '@/ui';
import View from '@/views/about';

export default function Page() {
  return (
    <Suspense fallback={<Ui.Loaders.Fallback />}>
      <View />
    </Suspense>
  );
}
