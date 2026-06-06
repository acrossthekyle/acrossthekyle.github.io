import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { Ui } from '@/ui';
import { padIndex } from '@/utils';
import View from '@/views/catalog-[id]-images-[src]';

import get from './get';

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

  if (data === null) {
    return {
      title: '404 Not Found',
      description: 'That image does not exist',
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
  }

  return {
    title: `Index ⌁ Images ⌁ IMG ${padIndex(data.index + 1)} / ${padIndex(data.total)}`,
    description: ``,
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
