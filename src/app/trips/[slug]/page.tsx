import { headers } from 'next/headers';

import View from '@/views/trip';

export default async function Page({ params }: { params: { slug: string; }}) {
  const { slug } = await params;

  const header = await headers();
  const referer = header.get('referer');

  return (
    <View isInitial={!(referer || '').includes('/trips/')} slug={slug} />
  );
}
