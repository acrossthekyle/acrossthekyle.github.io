import type { Album } from '@/types';

import Anchor from './anchor';
import Controls from './controls';
import Filter from './filter';
import styles from './stylesheet';

type Props = {
  data: Album[];
};

export default function Header({ data }: Props) {
  return (
    <header className={styles.container}>
      <Anchor />
      <Filter data={data} />
      <Controls data={data} />
    </header>
  );
}
