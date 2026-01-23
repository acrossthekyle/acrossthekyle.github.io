'use client';

import type { Data } from '../types';

import { useModel } from './model';

import Cta from './cta';
import styles from './stylesheet';

type Props = {
  data: Data[];
  onChange: (filter: string) => void;
};

export default function Filter({ data, onChange }: Props) {
  const {
    filterBy,
    handleOnFilter,
    total,
    types,
  } = useModel(data, onChange);

  return (
    <section aria-label="filter">
      <ul className={styles.container}>
        <li>
          <Cta
            count={total}
            current={filterBy}
            expected="everything"
            label="Everything"
            onClick={handleOnFilter}
          />
        </li>
        {types.map(({ count, value }) => (
          <li key={value}>
            <Cta
              count={count}
              current={filterBy}
              expected={value}
              label={`${value}s`}
              onClick={handleOnFilter}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
