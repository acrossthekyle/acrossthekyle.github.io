'use client';

import type { Data } from '../types';

import Cta from './cta';
import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  data: Data[];
  onChange: (filter: string) => void;
};

export default function Filter({ data, onChange }: Props) {
  const {
    filterBy,
    handleOnTag,
    total,
    types,
  } = useModel(data, onChange);

  return (
    <ul
      aria-label="filter trails and travels"
      className={styles.container}
      role="region"
    >
      <li>
        <Cta
          count={total}
          current={filterBy}
          expected="everything"
          label="Everything"
          onClick={handleOnTag}
        />
      </li>
      {types.map(({ count, value }) => (
        <li key={value}>
          <Cta
            count={count}
            current={filterBy}
            expected={value}
            label={`${value}s`}
            onClick={handleOnTag}
          />
        </li>
      ))}
    </ul>
  );
}
