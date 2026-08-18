import tw from '@/styles';
import type { Collection } from '@/types';

import About from './about';
import Contact from './contact';
import Travels from './travels';

type Props = {
  collections: Collection[];
};

export default function Content({ collections }: Props) {
  return (
    <section aria-label="content" className={styles.container}>
      <About />
      <Travels collections={collections} />
      <Contact />
    </section>
  );
};

const styles = tw({
  container: `
    col-span-1 order-2

    sm:order-1
    lg:overflow-y-auto
  `,
});
