'use client';

import { X } from 'lucide-react';
import FocusLock from 'react-focus-lock';

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

export default function Dialog({ data, onChange }: Props) {
  const {
    filterBy,
    handleOnFilter,
    handleOnOrder,
    handleOnSearch,
    handleOnSort,
    handleOnToggle,
    isActive,
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
        className={styles.toggle}
        onClick={handleOnToggle}
        type="button"
      >
        Options
      </button>
      <dialog
        aria-label="search and filter"
        aria-modal="true"
        className={styles.dialog(isActive)}
        id="filtering"
        open={isActive}
        role="dialog"
        tabIndex={-1}
      >
        <FocusLock className={styles.lock} disabled={!isActive}>
          <button
            aria-controls="filtering"
            aria-label="exit filters"
            onClick={handleOnToggle}
            type="button"
          >
            <X />
          </button>
          <h2 className={styles.heading}>Filter By</h2>
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
          <h2 className={styles.heading}>Sort By</h2>
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
          <h2 className={styles.heading}>Direction</h2>
          <Radio
            current={orderBy}
            expected="descending"
            onChange={handleOnOrder}
            text="Descending"
          />
          <Radio
            current={orderBy}
            expected="ascending"
            onChange={handleOnOrder}
            text="Ascending"
          />
        </FocusLock>
      </dialog>
    </section>
  );
}
