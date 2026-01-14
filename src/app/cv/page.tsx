import type { Metadata } from 'next';
import { Suspense } from 'react';

import { Fallback, View } from '@/views/cv';

import get from './get';

export const metadata: Metadata = {
  title: 'CV / Resume',
  description: `Creating things from scratch motivates me to do what I do. Making things with code thrills me to no end: digital experiences are my bread and butter. With attention to detail, and an ability to adapt, I produce everlasting things. I'm a self-taught web developer/software engineer/UI developer/coder with a strong background in JavaScript/TypeScript, and HTML/CSS. I have hands-on experience working on high-traffic, customer-facing products and prioritize building clean, maintainable codebases that enable continuous improvement and scalability.`,
};

export default function Page() {
  const data = get();

  return (
    <Suspense fallback={<Fallback />}>
      <View data={data} />
    </Suspense>
  );
}
