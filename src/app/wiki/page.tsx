import type { Metadata } from 'next';
import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views/wiki';

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export const metadata: Metadata = {
  title: 'Wiki',
  description: 'Helpful information about hiking terminology, and other things.',
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const type = (await searchParams).type;

  return (
    <Suspense fallback={<Loading />}>
      <View type={type as string} />
    </Suspense>
  );
}
