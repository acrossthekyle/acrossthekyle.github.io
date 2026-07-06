import type { Collection } from '@/types';

import Content from './content';
import Footer from './footer';
import Header from './header';
import { styles } from './stylesheet';

type Props = {
  data: {
    collections: Collection[];
  };
};

export default function View({ data }: Props) {
  return (
    <main>
      <article className={styles.container}>
        <Header />
        <Content data={data} />
        <Footer />
      </article>
    </main>
  );
}
