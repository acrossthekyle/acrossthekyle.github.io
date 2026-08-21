import { Header } from '@/layout';
import tw from '@/styles';
import type { Collection, Image } from '@/types';

import Content from './content';
import Heading from './heading';
import Map from './map';

type Props = {
  data: {
    collection: Collection;
    collections: Collection[];
    images: Image[];
  };
};

export default function View({ data }: Props) {
  return (
    <>
      <Header collections={data.collections} />
      <main>
        <article className={styles.container}>
          <Heading collection={data.collection} />
          <Content
            collection={data.collection}
            collections={data.collections}
            images={data.images}
          />
          <Map collection={data.collection} />
        </article>
      </main>
    </>
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
