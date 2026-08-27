import { Header } from '@/layout';
import tw from '@/styles';
import type { Data, Image, Landmark, Timeline, Trail } from '@/types';

import Content from './content';
import Heading from './heading';
import Map from './map';

type Props = {
  data: {
    images: Image[];
    landmarks?: Landmark[];
    timeline?: Timeline[];
    trail?: Trail[];
    travel: Data;
  };
};

export default function View({ data }: Props) {
  return (
    <>
      <Header />
      <main>
        <article className={styles.container}>
          <Heading travel={data.travel} />
          <Content
            images={data.images}
            timeline={data.timeline}
            travel={data.travel}
          />
          <Map
            landmarks={data.landmarks}
            trail={data.trail}
            travel={data.travel}
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
