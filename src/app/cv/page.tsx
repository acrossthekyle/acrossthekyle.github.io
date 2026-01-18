import type { Metadata } from 'next';
import { Suspense } from 'react';

import { Fallback, View } from '@/views/cv';

import get from './get';

export const metadata: Metadata = {
  title: 'Resume',
  description: `I'm a self-taught web developer/software engineer and making things with code thrills me to no end. With a strong background in JavaScript/TypeScript, and HTML/CSS, I have hands-on experience working with high-traffic, customer-facing products built with an attention to detail.`,
};

export default function Page() {
  const data = get();

  return (
    <Suspense fallback={<Fallback />}>
      <View data={data} />
    </Suspense>
  );
}
