import { Suspense } from 'react';

import { Fallback, Blog } from '@/layouts/blog';

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
      <Blog data={data}>{children}</Blog>
    </Suspense>
  );
};
