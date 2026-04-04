import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views/gallery-[id]-[img]';

import get from './get';

type Params = Promise<{
  id: string;
  img: string;
}>;

export default async function Page({
  params,
}: {
  params: Params;
}) {
  const { id, img } = await params;

  const data = await get(id, img);

  if (data === null) {
    return notFound();
  }

  return (
    <Suspense fallback={<Loading />}>
      <View data={data} />
    </Suspense>
  );
}
