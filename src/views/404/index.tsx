import { Header } from '@/layout';
import tw from '@/styles';

import Content from './content';
import Figure from './figure';
import Heading from './heading';

export default function View() {
  return (
    <>
      <Header />
      <main>
        <article className={styles.container}>
          <Heading />
          <Content />
          <Figure />
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
