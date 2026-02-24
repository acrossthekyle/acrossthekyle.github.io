import type { Metadata } from 'next';
import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views/gear-wiki';

export const metadata: Metadata = {
  title: 'Wiki → Packs',
  description: '',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { ref } = await searchParams;

  return (
    <Suspense fallback={<Loading />}>
      <View data={{ slug: ref as string }} />
    </Suspense>
  );
}
