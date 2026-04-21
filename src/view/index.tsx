import { Layout } from '@/layout';
import type { Album } from '@/types';

import Albums from './albums';
import Dialog from './dialog';
import Library from './library';
import styles from './stylesheet';

type Props = {
  data: Album[];
  filterBy?: string;
};

export default function View({ data, filterBy }: Props) {
  return (
    <Layout data={data} filterBy={filterBy}>
      <Albums data={data} />
      <Library data={data} filterBy={filterBy} />
      <Dialog className={styles.dialog} />
    </Layout>
  );
}
