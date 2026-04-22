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
  const isFiltering = !!filterBy.id || !!filterBy.category;
  const album = data.find(({ category, id }) => {
    if (!!filterBy.category) {
      return category === filterBy.category;
    }

    if (!!filterBy.id) {
      return id === filterBy.id;
    }

    return false;
  });

  const hasFilter = true; // album && isFiltering;
  const label = '384 images'; // hasFilter ? (!!filterBy.category ? album.category : album.title) : '';

  return (
    <header className={styles.container(hasFilter)}>
      <Anchor />
      {hasFilter && <Filter label={label} />}
      <Controls data={data} />
    </header>
  );
}
