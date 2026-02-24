import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views/gpx-[slug]';

import get from './get';

type Params = Promise<{
  index: string;
  slug: string;
}>;

type GenerateMetadata = {
  params: Params;
};

export async function generateMetadata({ params }: GenerateMetadata): Promise<Metadata> {
  const { index, slug } = await params;

  const data = get(slug.toLowerCase(), index);

  if (data === null) {
    return {
      title: '404 Not Found',
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
  }

  return {
    title: `${data.title} → ${data.place} → GPX`,
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
};

export default async function Page({
  params,
}: {
  params: Params;
}) {
  const { index, slug } = await params;

  const data = get(slug.toLowerCase(), index);

  if (data === null) {
    return notFound();
  }

  return (
    <Suspense fallback={<Loading />}>
      <View data={data} />
    </Suspense>
  );
}
