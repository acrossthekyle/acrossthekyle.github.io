import type { Collection, Image } from '@/types';

import Carousel from './carousel';
import Header from './header';

type Props = {
  data: {
    collection: Collection;
    images: Image[];
    index: number;
  };
};

export default function View({ data }: Props) {
  return (
    <article>
      <Header collection={data.collection} index={data.index} />
      <Carousel collection={data.collection} images={data.images} />
    </article>
  );
}
