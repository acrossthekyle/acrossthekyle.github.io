import { X } from 'lucide-react';
import FocusLock from 'react-focus-lock';

import type { Data } from '../../types';
import styles from './stylesheet';

type Props = {
  data: Data[];
  isActive: boolean;
  onClose: () => void;
  onFilterBy: (value: string) => void;
  onOrderBy: (value: string) => void;
  onSortBy: (value: string) => void;
};

export default function Dialog({
  data,
  isActive,
  onClose,
  onFilterBy,
  onOrderBy,
  onSortBy,
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
            <button
              className={styles.cta}
              onClick={() => onFilterBy('everything')}
              type="button"
            >
              everything
              <span className={styles.count}>{data.length}</span>
            </button>
          </li>
          {types.map(({ count, value }) => (
            <li className={styles.item} key={value}>
              <button
                className={styles.cta}
                onClick={() => onFilterBy(value)}
                type="button"
              >
                {value}{count > 1 ? 's' : ''}
                <span className={styles.count}>{count}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.header}>
          <h2 className={styles.heading}>Sort By</h2>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button
              className={styles.cta}
              onClick={() => onSortBy('date')}
              type="button"
            >
              date
            </button>
          </li>
          <li className={styles.item}>
            <button
              className={styles.cta}
              onClick={() => onSortBy('title')}
              type="button"
            >
              title
            </button>
          </li>
        </ul>
        <div className={styles.header}>
          <h2 className={styles.heading}>Direction</h2>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button
              className={styles.cta}
              onClick={() => onOrderBy('descending')}
              type="button"
            >
              descending
            </button>
          </li>
          <li className={styles.item}>
            <button
              className={styles.cta}
              onClick={() => onOrderBy('ascending')}
              type="button"
            >
              ascending
            </button>
          </li>
        </ul>
      </FocusLock>
    </dialog>
  );
}
