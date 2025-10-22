import { Suspense } from 'react';

import { Fallback, View } from '@/views/blog';

import db from '@/db';

type Props = {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const data = db.map(({ slug, title }) => ({
    slug,
    title,
  }));

  return (
    <Suspense fallback={<Fallback />}>
      <View data={data} />
      {children}
    </Suspense>
  );
};
