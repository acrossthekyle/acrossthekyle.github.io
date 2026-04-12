import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views/albums-[id]';

import get from './get';

export const metadata: Metadata = {
  title: 'Album',
};

type Params = Promise<{
  id: string;
}>;

export default async function Page({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;

  const data = await get(id);

  if (data === null) {
    return notFound();
  }

  return (
    <Suspense fallback={<Loading />}>
      <View data={data} />
    </Suspense>
  );
}
