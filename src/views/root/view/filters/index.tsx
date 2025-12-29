'use client';

import Dialog from './dialog';
import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  onChange: (filter?: string, sort?: string) => void;
};

export default function Filters({ onChange }: Props) {
  const {
    filterBy,
    handleOnChoose,
    handleOnClose,
    handleOnFilter,
    handleOnSort,
    isDialogActive,
    sortBy,
  } = useModel(onChange);

  return (
    <nav aria-label="timeline navigation" className={styles.filters}>
      <ul className={styles.list}>
        <li className={styles.item}>
          Currently viewing{' '}
          <button
            className={styles.cta}
            onClick={handleOnFilter}
            type="button"
          >
            {filterBy}
          </button>
          <Dialog
            filterBy={filterBy}
            isActive={isDialogActive}
            onChoose={handleOnChoose}
            onClose={handleOnClose}
          />
        </li>
        <li className={styles.item}>
          sorted by{' '}
          <button
            className={styles.cta}
            onClick={handleOnSort}
            type="button"
          >
            {sortBy}
          </button>.
        </li>
      </ul>
    </nav>
  );
}
