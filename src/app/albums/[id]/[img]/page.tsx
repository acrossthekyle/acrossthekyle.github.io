import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views/albums-[id]-[img]';

import get from './get';

type Params = Promise<{
  id: string;
  img: string;
}>;

type GenerateMetadata = {
  params: Params;
};

export async function generateMetadata({ params }: GenerateMetadata): Promise<Metadata> {
  const { img } = await params;

  return {
    title: `Album / ${img.toUpperCase()}`,
  };
};

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
