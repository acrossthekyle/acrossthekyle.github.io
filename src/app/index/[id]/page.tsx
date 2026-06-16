import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import Ui from '@/ui';
import { createDescription } from '@/utils';
import View from '@/views/index/[id]';

import get from './get';

type Params = Promise<{
  id: string;
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
  const { id } = await params;

  const data = await get(id.toLowerCase());

  if (data === null) {
    return {
      title: '404 Not Found',
      description: 'That does not exist',
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
    title: `Images ⌁ ${data.collection.title.join(' ')} ⌁ Index`,
    description: `${createDescription(data.collection)}. ${data.collection.notes.join(' ')}`,
  };
};

export default async function Page({ params }: Props) {
  const { id } = await params;

  const data = await get(id.toLowerCase());

  if (data === null) {
    return notFound();
  }

  return (
    <Suspense fallback={<Ui.Loaders.Fallback />}>
      <View data={data} />
    </Suspense>
  );
}
