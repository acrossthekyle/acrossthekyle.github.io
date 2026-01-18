'use client';

import { X } from 'lucide-react';

import type { Data } from '../types';

import { useModel } from './model';
import Radio from './radio';
import Search from './search';
import styles from './stylesheet';

type Props = {
  data: Data[];
  onChange: (
    search: string,
    filter: string,
    sort: string,
    order: string,
  ) => void;
};

export default function Filter({ data, onChange }: Props) {
  const {
    dialogRef,
    filterBy,
    handleOnDialogCancel,
    handleOnDialogClose,
    handleOnDialogOpen,
    handleOnDialogSubmit,
    handleOnFilter,
    handleOnOrder,
    handleOnSearch,
    handleOnSort,
    isDialogActive,
    orderBy,
    searchBy,
    sortBy,
    types,
  } = useModel(data, onChange);

  return (
    <section aria-label="search and filter" className={styles.container}>
      <Search onChange={handleOnSearch} searchBy={searchBy} />
      <button
        aria-controls="options"
        aria-label="toggle filter and sort dialog"
        className={styles.options}
        onClick={handleOnDialogOpen}
        type="button"
      >
        Filter
      </button>
      <dialog
        className={`${styles.dialog} ${isDialogActive ? 'is-active' : ''}`.trim()}
        id="options"
        ref={dialogRef}
        onCancel={handleOnDialogCancel}
      >
        <header className={styles.header}>
          <h2>
            <strong>Filters</strong>
            <small>Focus on a category, or change the order.</small>
          </h2>
          <button
            aria-label="exit options"
            autoFocus
            className={styles.close}
            onClick={handleOnDialogClose}
            type="button"
          >
            <X />
          </button>
        </header>
        <form
          className={styles.form}
          method="dialog"
          onSubmit={handleOnDialogSubmit}
        >
          <section aria-label="filter by category">
            <h3 className={styles.heading}>Category</h3>
            <Radio
              count={20}
              current={filterBy}
              expected="everything"
              onChange={handleOnFilter}
              text="Everything"
            />
            {types.map(({ count, value }) => (
              <Radio
                count={count}
                current={filterBy}
                expected={value}
                key={value}
                onChange={handleOnFilter}
                text={value}
              />
            ))}
          </section>
          <section aria-label="sort by date or title">
            <h3 className={styles.heading}>Sort by</h3>
            <Radio
              current={sortBy}
              expected="date"
              onChange={handleOnSort}
              text="Date"
            />
            <Radio
              current={sortBy}
              expected="title"
              onChange={handleOnSort}
              text="Title"
            />
          </section>
          <section aria-label="sort direction">
            <h3 className={styles.heading}>Order from</h3>
            <Radio
              current={orderBy}
              expected="descending"
              onChange={handleOnOrder}
              text={sortBy === 'date' ? 'Newest to Oldest' : 'Z - A'}
            />
            <Radio
              current={orderBy}
              expected="ascending"
              onChange={handleOnOrder}
              text={sortBy === 'date' ? 'Oldest to Newest' : 'A - Z'}
            />
          </section>
        </form>
        <footer className={styles.footer}>
          <kbd className={styles.kbd}>Esc</kbd>
        </footer>
      </dialog>
    </section>
  );
}
