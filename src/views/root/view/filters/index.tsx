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
    handleOnSwitchTheme,
    isDialogActive,
    orderBy,
    sortBy,
    theme,
  } = useModel(onChange);

  return (
    <nav aria-label="timeline search and filter navigation" className={styles.container}>
      <button
        className={styles.cta}
        onClick={handleOnSwitchTheme}
        type="button"
      >
        Switch to {theme === 'dark' ? 'light' : 'dark'} Mode
      </button>
      <button
        className={styles.cta}
        onClick={handleOnOpen}
        type="button"
      >
        Filter List
      </button>
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
    </nav>
  );
}
