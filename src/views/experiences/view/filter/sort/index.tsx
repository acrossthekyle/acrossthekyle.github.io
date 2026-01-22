'use client';

import Cta from '../cta';

import styles from './stylesheet';

type Props = {
  current: string;
  onClick: (value: string) => void;
};

export default function Sort({ current, onClick}: Props) {
  return (
    <ul className={styles.container}>
      <li>
        <Cta
          current={current}
          expected="title"
          onClick={onClick}
        />
      </li>
      <li>
        <Cta
          current={current}
          expected="date"
          onClick={onClick}
        />
      </li>
    </ul>
  );
}
