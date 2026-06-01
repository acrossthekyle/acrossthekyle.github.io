import { PropsWithChildren, Suspense } from 'react';

import { Article } from '@/layout';
import { Map } from '@/partials';

import get from './get';
export default async function Layout({ children }: PropsWithChildren) {
  const collections = await get();

  return (
    <Suspense fallback={null}>
      <Article.Container>
        {children}
        <Article.Figure>
          <Map collections={collections} />
        </Article.Figure>
      </Article.Container>
    </Suspense>
  );
}
