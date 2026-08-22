import { Header } from '@/layout';
import tw from '@/styles';
import type { Collection, Image, Landmark, Timeline } from '@/types';

import Content from './content';
import Heading from './heading';
import Map from './map';

type Props = {
  data: {
    collection: Collection;
    collections: Collection[];
    images: Image[];
    landmarks?: Landmark[];
    timeline?: Timeline[];
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
            images={data.images}
            timeline={data.timeline}
          />
          <Map
            collection={data.collection}
            landmarks={data.landmarks}
          />
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
