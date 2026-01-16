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
        Options
      </button>
      <dialog
        aria-labelledby="options-title"
        className={`${styles.dialog} ${isDialogActive ? 'is-active' : ''}`.trim()}
        id="options"
        ref={dialogRef}
        onCancel={handleOnDialogCancel}
      >
        <h2 id="options-title">Options</h2>
        <form
          className={styles.form}
          method="dialog"
          onSubmit={handleOnDialogSubmit}
        >
          <section aria-label="filter by category">
            <h2 className={styles.heading}>View</h2>
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
            <h2 className={styles.heading}>By</h2>
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
            <h2 className={styles.heading}>From</h2>
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
          <button
            aria-label="exit options"
            autoFocus
            className={styles.close}
            type="submit"
          >
            <X />
          </button>
        </form>
        <footer className={styles.footer}>
          <kbd className={styles.kbd}>Esc</kbd> Close
        </footer>
      </dialog>
    </section>
  );
}
