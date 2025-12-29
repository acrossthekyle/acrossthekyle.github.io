'use client';

import Dialog from './dialog';
import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  onChange: (filter?: string, sort?: string) => void;
  total: number;
};

export default function Filters({ onChange, total }: Props) {
  const {
    filterBy,
    handleOnChoose,
    handleOnClose,
    handleOnFilter,
    handleOnOrder,
    handleOnSort,
    isDialogActive,
    orderBy,
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
            isActive={isDialogActive}
            onChoose={handleOnChoose}
            onClose={handleOnClose}
          />
        </li>
        {total > 1 && (
          <li className={styles.item}>
            sorted by{' '}
            <button
              className={styles.cta}
              onClick={handleOnSort}
              type="button"
            >
              {sortBy}
            </button>, in{' '}
            <button
              className={styles.cta}
              onClick={handleOnOrder}
              type="button"
            >
              {orderBy}
            </button> order.
          </li>
        )}
      </ul>
    </nav>
  );
}
