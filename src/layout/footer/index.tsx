import type { Album } from '@/types';

import Filter from './filter';
import styles from './stylesheet';
import Theme from './theme';

type Props = {
  data: Album[];
};

export default function Footer({ data }: Props) {
  return (
    <footer className={styles.container}>
      <Filter data={data} />
      <Theme />
    </footer>
  );
}
