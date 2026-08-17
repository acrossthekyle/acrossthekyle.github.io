import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import Ui from '@/ui';
import View from '@/views/travels-[id]-img-[src]';

import { get } from './get';

type Params = Promise<{
  id: string;
  src: string;
}>;

type GenerateMetadata = {
  params: Params;
};

type Props = {
  params: Params;
};

export async function generateMetadata({
  params,
}: GenerateMetadata): Promise<Metadata> {
  const { id, src } = await params;

  const data = await get(id.toLowerCase(), src.toLowerCase());

  const robots = {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  };

  if (data === null) {
    return {
      title: '404 Not Found',
      description: 'That does not exist',
      robots,
    };
  }

  return {
    title: `${data.image.title} ⌁ Image ⌁ ${data.collection.title.join(' ')} ⌁ Travels`,
    description: ``,
    robots,
  };
};

export default async function Page({ params }: Props) {
  const { id, src } = await params;

  const data = await get(id.toLowerCase(), src.toLowerCase());

  if (data === null) {
    return notFound();
  }

  return (
    <Suspense fallback={<Ui.Loaders.Fallback />}>
      <View data={data} />
    </Suspense>
  );
}
