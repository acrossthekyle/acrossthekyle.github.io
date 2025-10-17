import type { Metadata } from 'next';
import { Suspense } from 'react';

import { introduction } from '@/constants';
import { Fallback, View } from '@/views/contact';

export const metadata: Metadata = {
  title: 'Contact',
  description: `${introduction} Reach out if you want to know more.`,
};

export default function Page() {
  return (
    <Suspense fallback={<Fallback />}>
      <View />
    </Suspense>
  );
}
