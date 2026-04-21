import type { Album } from '@/types';

import Anchor from './anchor';
import Controls from './controls';
import Filter from './filter';
import styles from './stylesheet';

type Props = {
  data: Album[];
  filterBy?: string;
};

export default function Header({ data, filterBy }: Props) {
  const isFiltering = !!filterBy;
  const album = data.find(({ id }) => id === filterBy);

  const hasFilter = album && isFiltering;

  return (
    <header className={styles.container(hasFilter)}>
      <Anchor />
      {hasFilter && <Filter album={album} />}
      <Controls data={data} />
    </header>
  );
}
