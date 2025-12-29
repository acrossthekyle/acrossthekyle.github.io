'use client';

import { ArrowLeft, X } from 'lucide-react';
import FocusLock from 'react-focus-lock';

import styles from './stylesheet';

type Props = {
  filterBy: string;
  isActive: boolean;
  onChoose: (value: string) => void;
  onClose: () => void;
};

export default function Dialog({
  filterBy,
  isActive,
  onChoose,
  onClose,
}: Props) {
  return (
    <div
      aria-label="filter wanderings"
      aria-modal="true"
      className={styles.dialog(isActive)}
      id="filtering"
      role="dialog"
      tabIndex={-1}
    >
      <FocusLock className={styles.lock} disabled={!isActive}>
        <header className={styles.header}>
          <h2 className={styles.heading}>Filter By</h2>
          <button
            aria-controls="filtering"
            aria-label="exit filters"
            onClick={onClose}
            type="button"
          >
            <X className={styles.icon} />
          </button>
        </header>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.cta} onClick={() => onChoose('everything')} type="button">
              everything
              <span className={styles.count}>20</span>
              {filterBy === 'everything' && <ArrowLeft className={styles.active} />}
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.cta} onClick={() => onChoose('2020s')} type="button">
              2020s
              <span className={styles.count}>11</span>
              {filterBy === '2020s' && <ArrowLeft className={styles.active} />}
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.cta} onClick={() => onChoose('2010s')} type="button">
              2010s
              <span className={styles.count}>10</span>
              {filterBy === '2010s' && <ArrowLeft className={styles.active} />}
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.cta} onClick={() => onChoose('destinations')} type="button">
              destinations
              <span className={styles.count}>9</span>
              {filterBy === 'destinations' && <ArrowLeft className={styles.active} />}
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.cta} onClick={() => onChoose('overnight hikes')} type="button">
              overnight hikes
              <span className={styles.count}>1</span>
              {filterBy === 'overnight hikes' && <ArrowLeft className={styles.active} />}
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.cta} onClick={() => onChoose('peak bagging')} type="button">
              peak bagging
              <span className={styles.count}>1</span>
              {filterBy === 'peak bagging' && <ArrowLeft className={styles.active} />}
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.cta} onClick={() => onChoose('section hikes')} type="button">
              section hikes
              <span className={styles.count}>1</span>
              {filterBy === 'section hikes' && <ArrowLeft className={styles.active} />}
            </button>
          </li>
          <li className={styles.item}>
            <button className={styles.cta} onClick={() => onChoose('thru-hikes')} type="button">
              thru-hikes
              <span className={styles.count}>8</span>
              {filterBy === 'thru-hikes' && <ArrowLeft className={styles.active} />}
            </button>
          </li>
        </ul>
      </FocusLock>
    </div>
  );
}
