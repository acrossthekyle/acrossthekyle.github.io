import { notFound } from 'next/navigation';
import { PropsWithChildren, Suspense } from 'react';

import { Article } from '@/layout';
import { Images } from '@/partials';

import get from './get';

type Params = Promise<{
  id: string;
}>;

type Props = {
  params: Params;
};

export default async function Layout({
  children,
  params,
}: PropsWithChildren<Props>) {
  const { id } = await params;

  const images = await get(id);

  if (images === null) {
    return notFound();
  }

  return (
    <Suspense fallback={null}>
      <Article.Container stack>
        {children}
        <Images images={images} />
      </Article.Container>
    </Suspense>
  );
}
