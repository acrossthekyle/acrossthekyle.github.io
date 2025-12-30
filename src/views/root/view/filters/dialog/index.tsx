import { X } from 'lucide-react';
import FocusLock from 'react-focus-lock';

import type { Data } from '../../types';
import styles from './stylesheet';

type Props = {
  data: Data[];
  filterBy: string;
  isActive: boolean;
  onClose: () => void;
  onFilterBy: (value: string) => void;
  onOrderBy: (value: string) => void;
  onSortBy: (value: string) => void;
  orderBy: string;
  sortBy: string;
};

export default function Dialog({
  data,
  filterBy,
  isActive,
  onClose,
  onFilterBy,
  onOrderBy,
  onSortBy,
  orderBy,
  sortBy,
}: Props) {
  const reduced = data.reduce((initialObject: { [key: string]: number }, { type }) => {
    initialObject[type] = (initialObject[type] || 0) + 1;

    return initialObject;
  }, {});

  const types = Object.entries(reduced).map(([ value, count ]) => {
    return {
      value,
      count,
    };
  });

  return (
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
        <div className={styles.header}>
          <h2 className={styles.heading}>Filter By</h2>
          <button
            aria-controls="filtering"
            aria-label="exit filters"
            onClick={onClose}
            type="button"
          >
            <X className={styles.icon} />
          </button>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <label className={styles.label}>
                <input
                  type="radio"
                  checked={filterBy === 'everything'}
                  onChange={() => onFilterBy('everything')}
                  className={styles.radio}
                />
                <span className={styles.dot} />
                <span className={styles.text}>
                  Everything
                  <span className={styles.count}>{data.length}</span>
                </span>
            </label>
          </li>
          {types.map(({ count, value }) => (
            <li className={styles.item} key={value}>
              <label className={styles.label}>
                <input
                  type="radio"
                  checked={filterBy === value}
                  onChange={() => onFilterBy(value)}
                  className={styles.radio}
                />
                <span className={styles.dot} />
                <span className={styles.text}>
                  {value}{count > 1 ? 's' : ''}
                  <span className={styles.count}>{count}</span>
                </span>
              </label>
            </li>
          ))}
        </ul>
        <div className={styles.header}>
          <h2 className={styles.heading}>Sort By</h2>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <label className={styles.label}>
              <input
                type="radio"
                checked={sortBy === 'date'}
                onChange={() => onSortBy('date')}
                className={styles.radio}
              />
              <span className={styles.dot} />
              <span className={styles.text}>
                Date
              </span>
            </label>
          </li>
          <li className={styles.item}>
            <label className={styles.label}>
              <input
                type="radio"
                checked={sortBy === 'title'}
                onChange={() => onSortBy('title')}
                className={styles.radio}
              />
              <span className={styles.dot} />
              <span className={styles.text}>
                Title
              </span>
            </label>
          </li>
        </ul>
        <div className={styles.header}>
          <h2 className={styles.heading}>Direction</h2>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <label className={styles.label}>
              <input
                type="radio"
                checked={orderBy === 'descending'}
                onChange={() => onOrderBy('descending')}
                className={styles.radio}
              />
              <span className={styles.dot} />
              <span className={styles.text}>
                Descending
              </span>
            </label>
          </li>
          <li className={styles.item}>
            <label className={styles.label}>
              <input
                type="radio"
                checked={orderBy === 'ascending'}
                onChange={() => onOrderBy('ascending')}
                className={styles.radio}
              />
              <span className={styles.dot} />
              <span className={styles.text}>
                Ascending
              </span>
            </label>
          </li>
        </ul>
      </FocusLock>
    </dialog>
  );
}
