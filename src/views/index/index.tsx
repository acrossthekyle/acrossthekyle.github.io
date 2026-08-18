import tw from '@/styles';
import type { Collection } from '@/types';

import Carousel from './carousel';
import Content from './content';
import Header from './header';
import Reset from './reset';

type Props = {
  data: {
    collections: Collection[];
  };
};

export default function View({ data }: Props) {
  return (
    <article className={styles.container}>
      <Header />
      <Content collections={data.collections} />
      <Carousel />
      <Reset />
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
