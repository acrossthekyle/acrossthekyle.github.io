import type { Metadata } from 'next';
import { Suspense } from 'react';

import { Fallback, View } from '@/views/[slug]/[stage]/gpx';

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
    title: `Gpx → ${data.title.join(' ')} → ${data.parent.join(' ')}`,
    description: `Gpx Route / Elevation for ${data.title.join(' ')}`,
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
    return <Fallback />;
  }

  return (
    <Suspense fallback={<Fallback />}>
      <View data={data} />
    </Suspense>
  );
}
