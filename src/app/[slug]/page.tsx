import { Suspense } from 'react';

import { Fallback, View } from '@/views/[slug]';

import get from './get';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;

  const data = get(slug.toLowerCase());

  return (
    <Suspense fallback={<Fallback />}>
      <View data={data} />
    </Suspense>
  );
}
