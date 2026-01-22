'use client';

import Cta from '../cta';

import styles from './stylesheet';

type Props = {
  current: string;
  options: Array<{ value: string; count: number; }>;
  onClick: (value: string) => void;
};

export default function Type({ current, options, onClick }: Props) {
  return (
    <ul className={styles.container}>
      <li>
        <Cta
          count={20}
          current={current}
          expected="everything"
          label="Everything"
          onClick={onClick}
        />
      </li>
      {options.map(({ count, value }) => (
        <li key={value}>
          <Cta
            count={count}
            current={current}
            expected={value}
            label={`${value}s`}
            onClick={onClick}
          />
        </li>
      ))}
    </ul>
  );
}
