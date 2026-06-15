import { Layout } from '@/layout';
import type { Collection } from '@/types';

import Components from './components';
import Header from './header';
import List from './list';
import { styles } from './stylesheet';

type Props = {
  data: {
    collections: Collection[];
  };
};

export default function View({ data }: Props) {
  return (
    <>
      <Layout.Header />
      <Layout.Main>
        <Components.Wrapper>
          <h1 className={styles.title}>
            A selected index of backpacking and travelling experiences
          </h1>
          <p className={styles.paragraph}>
            <span className={styles.link}>Chrono</span>
            <span className={styles.link}>Alpha</span>
            <span className={styles.link}>Rando</span>
          </p>
          <div className={styles.grid}>
            <List collections={data.collections} />
          </div>
        </Components.Wrapper>
      </Layout.Main>
    </>
  );
}
