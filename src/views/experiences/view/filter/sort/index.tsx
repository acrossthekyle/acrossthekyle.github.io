'use client';

import Cta from '../cta';

import styles from './stylesheet';

type Props = {
  current: string;
  onClick: (value: string) => void;
  orderBy: string;
};

export default function Sort({ current, onClick, orderBy}: Props) {
  return (
    <ul className={styles.container}>
      <li>
        <Cta
          count={orderBy === 'descending' ? 'Z to A' : 'A to Z'}
          current={current}
          expected="title"
          label="Alphabetically"
          onClick={onClick}
        />
      </li>
      <li>
        <Cta
          count={orderBy === 'descending' ? 'Newest to oldest' : 'Oldest to newest'}
          current={current}
          expected="date"
          label="Date"
          onClick={onClick}
        />
      </li>
    </ul>
  );
}
