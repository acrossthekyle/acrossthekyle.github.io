import type { Album, FilterBy } from '@/types';

import Anchor from './anchor';
import Controls from './controls';
import Filter from './filter';
import styles from './stylesheet';

type Props = {
  data: Album[];
  filterBy?: FilterBy;
};

export default function Header({ data, filterBy }: Props) {
  return (
    <header className={styles.container}>
      <Anchor />
      <Filter data={data} filterBy={filterBy} />
      <Controls data={data} />
    </header>
  );
}
