import { Article } from '@/layout';
import type { Collection, Image } from '@/types';

import Header from './header';
import Images from './images';

type Props = {
  data: {
    collection: Collection;
    images: Array<Image[]>;
  };
};

export default function View({ data }: Props) {
  return (
    <>
      <Article.Header>
        <Header collection={data.collection} />
      </Article.Header>
      <Article.Content>
        <Images images={data.images} total={data.collection.count} />
      </Article.Content>
    </>
  );
}
