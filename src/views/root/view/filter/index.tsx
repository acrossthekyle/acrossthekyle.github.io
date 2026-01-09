'use client';

import { X } from 'lucide-react';
import FocusLock from 'react-focus-lock';

import { Title } from '@/ui/typography';

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
    filterBy,
    handleOnCloseDialog,
    handleOnFilter,
    handleOnOpenDialog,
    handleOnOrder,
    handleOnSearch,
    handleOnSort,
    orderBy,
    searchBy,
    sortBy,
    types,
  } = useModel(data, onChange);

  return (
    <section aria-label="search and filter" className={styles.container}>
      <Search onChange={handleOnSearch} placeholder={filterBy} searchBy={searchBy} />
      <button
        aria-controls="filtering"
        aria-label="toggle filter and sort dialog"
        className={styles.options}
        onClick={handleOnOpenDialog}
        type="button"
      >
        Options
      </button>
      <dialog
        aria-label="search and filter"
        className={styles.dialog}
        id="filtering"
      >
        <FocusLock className={styles.lock}>
          <button
            aria-controls="filtering"
            aria-label="exit options"
            autoFocus
            className={styles.close}
            onClick={handleOnCloseDialog}
            type="button"
          >
            <X />
          </button>
          <section aria-label="filter by category">
            <Title className={styles.heading} shrink>View</Title>
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
            <Title className={styles.heading} shrink>By</Title>
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
            <Title className={styles.heading} shrink>From</Title>
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
          <footer className={styles.footer}>
            <kbd className={styles.kbd}>Esc</kbd> Close
          </footer>
        </FocusLock>
      </dialog>
    </section>
  );
}
