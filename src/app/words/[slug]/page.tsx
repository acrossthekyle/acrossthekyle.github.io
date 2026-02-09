import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views/words-[slug]';

import get from './get';

type Params = Promise<{
  slug: string;
}>;

type GenerateMetadata = {
  params: Params;
};

export async function generateMetadata({ params }: GenerateMetadata): Promise<Metadata> {
  const { slug } = await params;

  const data = get(slug.toLowerCase());

  if (data === null) {
    return {
      title: '404 Not Found',
      description: '',
    };
  }

  return {
    title: `${data.title} → Words`,
    description: data.content,
  };
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  const data = get(slug.toLowerCase());

  if (data === null) {
    return notFound();
  }

  return (
    <Suspense fallback={<Loading />}>
      <View data={data} />
    </Suspense>
  );
}
