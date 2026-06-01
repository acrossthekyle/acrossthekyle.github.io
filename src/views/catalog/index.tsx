import { Article } from '@/layout';
import type { Collection } from '@/types';

import Header from './header';
import List from './list';

type Props = {
  data: {
    collections: Collection[];
  };
};

export default function View({ data }: Props) {
  return (
    <>
      <Article.Header>
        <Header />
      </Article.Header>
      <Article.Content>
        <List collections={data.collections} />
      </Article.Content>
    </>
  );
}
