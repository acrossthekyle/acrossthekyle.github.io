import { Suspense } from 'react';

import { Fallback, View } from '@/views/wanderings';

import db from '@/db';

type Props = {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const data = db.map(({ date, location, slug, title, type }) => ({
    date,
    location,
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
