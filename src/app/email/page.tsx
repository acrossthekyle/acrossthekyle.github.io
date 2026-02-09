import type { Metadata } from 'next';
import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views/email';

export const metadata: Metadata = {
  title: 'Email',
  description: `Reach out and say hello if you're interested in working together, or have questions about the trails and travels that I've done. I'm always open to new opportunities.`,
};

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <View />
    </Suspense>
  );
}
