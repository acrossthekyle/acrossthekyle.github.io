'use client';

import { ArrowLeft, X } from 'lucide-react';
import FocusLock from 'react-focus-lock';

import { useWanderings } from '@/hooks/useWanderings';

import styles from './stylesheet';

export default function Filter() {
  const {
    choose,
    close,
    filterBy,
    isFilterByActive,
  } = useWanderings();

  return (
    <>
      <div className={styles.backdrop(isFilterByActive)} />
      <div
        aria-label="filter wanderings"
        aria-modal="true"
        className={styles.dialog(isFilterByActive)}
        id="filtering"
        role="dialog"
        tabIndex={-1}
      >
        <FocusLock className={styles.lock} disabled={!isFilterByActive}>
          <button
            aria-controls="filtering"
            aria-label="exit filters"
            className={styles.close}
            onClick={close}
            type="button"
          >
            <X className={styles.icon} />
          </button>
          <h2 className={styles.heading}>Filter By</h2>
          <ul>
            <li className={styles.item}>
              <button className={styles.cta} onClick={() => choose('everything')} type="button">
                everything
                <span className={styles.count}>20</span>
                {filterBy === 'everything' && <ArrowLeft className={styles.active} />}
              </button>
            </li>
            <li className={styles.item}>
              <button className={styles.cta} onClick={() => choose('2020s')} type="button">
                2020s
                <span className={styles.count}>11</span>
                {filterBy === '2020s' && <ArrowLeft className={styles.active} />}
              </button>
            </li>
            <li className={styles.item}>
              <button className={styles.cta} onClick={() => choose('2010s')} type="button">
                2010s
                <span className={styles.count}>10</span>
                {filterBy === '2010s' && <ArrowLeft className={styles.active} />}
              </button>
            </li>
            <li className={styles.item}>
              <button className={styles.cta} onClick={() => choose('destinations')} type="button">
                destinations
                <span className={styles.count}>9</span>
                {filterBy === 'destinations' && <ArrowLeft className={styles.active} />}
              </button>
            </li>
            <li className={styles.item}>
              <button className={styles.cta} onClick={() => choose('overnight hikes')} type="button">
                overnight hikes
                <span className={styles.count}>1</span>
                {filterBy === 'overnight hikes' && <ArrowLeft className={styles.active} />}
              </button>
            </li>
            <li className={styles.item}>
              <button className={styles.cta} onClick={() => choose('peak bagging')} type="button">
                peak bagging
                <span className={styles.count}>1</span>
                {filterBy === 'peak bagging' && <ArrowLeft className={styles.active} />}
              </button>
            </li>
            <li className={styles.item}>
              <button className={styles.cta} onClick={() => choose('section hikes')} type="button">
                section hikes
                <span className={styles.count}>1</span>
                {filterBy === 'section hikes' && <ArrowLeft className={styles.active} />}
              </button>
            </li>
            <li className={styles.item}>
              <button className={styles.cta} onClick={() => choose('thru-hikes')} type="button">
                thru-hikes
                <span className={styles.count}>8</span>
                {filterBy === 'thru-hikes' && <ArrowLeft className={styles.active} />}
              </button>
            </li>
          </ul>
        </FocusLock>
      </div>
    </>
  );
}
