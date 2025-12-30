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
    handleOnClose,
    handleOnFilter,
    handleOnOpen,
    handleOnOrder,
    handleOnSort,
    handleOnSwitchTheme,
    isDialogActive,
  } = useModel(onChange);

  return (
    <nav aria-label="timeline search and filter navigation" className={styles.container}>
      <button
        className={styles.cta}
        onClick={handleOnSwitchTheme}
        type="button"
      >
        Switch Theme
      </button>
      <button
        className={styles.cta}
        onClick={handleOnOpen}
        type="button"
      >
        Filter
      </button>
      <Dialog
        data={data}
        isActive={isDialogActive}
        onClose={handleOnClose}
        onFilterBy={handleOnFilter}
        onSortBy={handleOnSort}
        onOrderBy={handleOnOrder}
      />
    </nav>
  );
}
