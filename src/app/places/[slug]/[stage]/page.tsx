import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import { Fallback, View } from '@/views/places/[slug]/[stage]';

import get from './get';

type Params = Promise<{
  slug: string;
  stage: string;
}>;

type GenerateMetadata = {
  params: Params;
};

export async function generateMetadata({ params }: GenerateMetadata): Promise<Metadata> {
  const { slug, stage } = await params;

  const data = get(slug.toLowerCase(), stage);

  if (data === null) {
    return {
      title: '404 Not Found',
      description: '',
    };
  }

  return {
    title: `${data.label} ${data.index} → ${data.parent} → Places`,
    description: data.content,
  };
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; stage: string; }>
}) {
  const { slug, stage } = await params;

  const data = get(slug.toLowerCase(), stage);

  if (data === null) {
    return notFound();
  }

  return (
    <Suspense fallback={<Fallback />}>
      <View data={data} />
    </Suspense>
  );
}
