'use client';

import Cta from '../cta';

import styles from './stylesheet';

type Props = {
  current: string;
  onClick: (value: string) => void;
  sortBy: string;
};

export default function Order({ current, onClick, sortBy }: Props) {
  return (
    <ul className={styles.container}>
      <li>
        <Cta
          count={sortBy === 'date' ? 'Oldest to newest' : 'A to Z'}
          current={current}
          expected="ascending"
          label="Ascending"
          onClick={onClick}
        />
      </li>
      <li>
        <Cta
          count={sortBy === 'date' ? 'Newest to oldest' : 'Z to A'}
          current={current}
          expected="descending"
          label="Descending"
          onClick={onClick}
        />
      </li>
    </ul>
  );
}
