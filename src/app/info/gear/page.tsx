import { Suspense } from 'react';

import Loading from '@/ui/loading';
import View from '@/views/info-gear';

import get from './get';

type Params = {
  searchParams: { [key: string]: string | undefined };
};

export default async function Page({ searchParams }: Params) {
  const { ref } = await searchParams;

  const data = get();

  return (
    <Suspense fallback={<Loading />}>
      <View data={data} index={ref || '0'} />
    </Suspense>
  );
}
