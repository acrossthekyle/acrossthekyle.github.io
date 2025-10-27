import { Suspense } from 'react';

import { Fallback, View } from '@/views/blog';

import db from '@/db';

type Props = {
  children: React.ReactNode;
  params: Promise<{ type: string; }>;
}

export default async function Layout({ children, params }: Props) {
  const { type } = await params;

  const data = db
    .filter(item => item.type === type.toLowerCase())
    .map(({ slug, title, type }) => ({
      slug,
      title,
      type,
    }));

  return (
    <Suspense fallback={<Fallback />}>
      <View data={data} />
      {children}
    </Suspense>
  );
};
