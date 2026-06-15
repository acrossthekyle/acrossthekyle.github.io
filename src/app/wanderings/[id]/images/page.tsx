import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import Ui from '@/ui';
import { padIndex } from '@/utils';
import View from '@/views/wanderings-[id]-images';

import get from './get';

type Params = Promise<{
  id: string;
  src: string;
}>;

type SearchParams = Promise<{
  ref: string;
}>;

type Props = {
  params: Params;
  searchParams: SearchParams;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { id } = await params;
  const { ref } = await searchParams;

  const data = await get(id.toLowerCase(), ref.toLowerCase());

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
    title: `Image ${padIndex(data.index + 1)} / ${padIndex(data.total)} ⌁ ${data.collection.title.join(' ')} ⌁ Travels`,
    description: ``,
  };
};

export default async function Page({ params, searchParams }: Props) {
  const { id } = await params;
  const { ref } = await searchParams;

  const data = await get(id.toLowerCase(), ref.toLowerCase());

  if (data === null) {
    return notFound();
  }

  return (
    <Suspense fallback={<Ui.Loaders.Fallback />}>
      <View data={data} />
    </Suspense>
  );
}
