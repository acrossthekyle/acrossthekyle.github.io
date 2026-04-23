import type { Album, FilterBy } from '@/types';

import Anchor from './anchor';
import Controls from './controls';
import Filter from './filter';
import styles from './stylesheet';

type Props = {
  data: Album[];
  filterBy: FilterBy;
  isFiltering: boolean;
};

export default function Header({ data, filterBy, isFiltering }: Props) {
  return (
    <header className={styles.container}>
      <Anchor isFiltering={isFiltering} />
      <Filter data={data} filterBy={filterBy} isFiltering={isFiltering} />
      <Controls data={data} isFiltering={isFiltering} />
    </header>
  );
}
