import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views/trails-[id]';

import get from './get';

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
