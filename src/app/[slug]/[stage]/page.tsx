import { Suspense } from 'react';

import { Fallback, View } from '@/views/[slug]/[stage]';

import get from './get';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; stage: string; }>
}) {
  const { slug, stage } = await params;

  const data = get(slug.toLowerCase(), stage);

  return (
    <Suspense fallback={<Fallback />}>
      <View data={data} />
    </Suspense>
  );
}
