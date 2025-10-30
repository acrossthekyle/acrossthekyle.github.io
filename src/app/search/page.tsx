import type { Metadata } from 'next';
import { Suspense } from 'react';

import db from '@/db';
import { Fallback, View } from '@/views/search';

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search for treks, thru-hikes, and vacations',
};

export default function Page() {
  const data = db.map(({ date, location, slug, title, type }) => ({
    date: date.date,
    location,
    slug,
    title,
    type,
  }));

  return (
    <Suspense fallback={<Fallback />}>
      <View data={data} />
    </Suspense>
  );
}
