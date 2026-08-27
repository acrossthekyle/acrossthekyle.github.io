import { Header } from '@/layout';
import tw from '@/styles';
import type { Travel } from '@/types';

import Carousel from './carousel';
import Content from './content';
import Heading from './heading';

type Props = {
  data: {
    travels: Travel[];
  };
};

export default function View({ data }: Props) {
  return (
    <>
      <Header />
      <main>
        <article className={styles.container}>
          <Heading travels={data.travels} />
          <Content travels={data.travels} />
          <Carousel />
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
