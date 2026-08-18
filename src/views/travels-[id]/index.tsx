import tw from '@/styles';
import type { Collection, Image } from '@/types';

import Content from './content';
import Header from './header';
import Map from './map';

type Props = {
  data: {
    collection: Collection;
    images: Image[];
    next: Collection;
    previous: Collection;
  };
};

export default function View({ data }: Props) {
  return (
    <article className={styles.container}>
      <Header
        collection={data.collection}
        next={data.next}
        previous={data.previous}
      />
      <Content collection={data.collection.id} images={data.images} />
      <Map collection={data.collection} />
    </article>
  );
};

const styles = tw({
  container: `
    grid grid-cols-1
    w-full

    sm:w-1/2
    lg:w-full
    lg:h-svh
    lg:grid-cols-3
  `,
});
