'use client';

import type { Data } from '../types';
import Dialog from './dialog';
import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  data: Data[];
  onChange: (filter?: string, sort?: string, order?: string) => void;
};

export default function Filters({ data, onChange }: Props) {
  const {
    filterBy,
    handleOnClose,
    handleOnFilter,
    handleOnOpen,
    handleOnOrder,
    handleOnSort,
    isDialogActive,
    orderBy,
    sortBy,
  } = useModel(onChange);

  return (
    <>
      <nav aria-label="timeline search and filter navigation" className={styles.container}>
        <button
          className={styles.cta}
          onClick={handleOnOpen}
          type="button"
        >
          Currently viewing <span className={styles.underline}>{filterBy}</span>, sorted by <span className={styles.underline}>{sortBy}</span> in <span className={styles.underline}>{orderBy}</span> order.
        </button>
      </nav>
      <Dialog
        data={data}
        filterBy={filterBy}
        isActive={isDialogActive}
        onClose={handleOnClose}
        onFilterBy={handleOnFilter}
        onSortBy={handleOnSort}
        onOrderBy={handleOnOrder}
        orderBy={orderBy}
        sortBy={sortBy}
      />
    </>
  );
}
