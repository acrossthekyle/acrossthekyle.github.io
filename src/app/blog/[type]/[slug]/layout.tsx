import { Suspense } from 'react';

import { Fallback, View } from '@/views/post';

import get from './get';

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string; }>;
};

export default async function Layout({ children, params }: Props) {
  const { slug } = await params;

  const data = get(slug.toLowerCase());

  return (
    <Suspense fallback={<Fallback />}>
      <View data={data} />
      {children}
    </Suspense>
  );
};
