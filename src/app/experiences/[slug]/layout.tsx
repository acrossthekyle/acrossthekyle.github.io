import { Suspense } from 'react';

import { Experience } from '@/layouts/experiences';
import Loading from '@/views/experience/loading';

import get from './get';

type Params = Promise<{
  slug: string;
}>;

type Props = {
  children: React.ReactNode;
  params: Params;
};

export default async function Layout({ children, params }: Props) {
  const { slug } = await params;

  const data = get(slug.toLowerCase());

  return (
    <Suspense fallback={<Loading />}>
      <Experience data={data}>{children}</Experience>
    </Suspense>
  );
};
