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
    handleOnSelect,
    handleOnTag,
    total,
    types,
  } = useModel(data, onChange);

  return (
    <>
      <ul
        aria-label="filter trails and travels"
        aria-orientation="horizontal"
        className={styles.list}
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
      <select
        aria-label="filter trails and travels"
        className={styles.select}
        name="filter"
        onChange={handleOnSelect}
        value={filterBy}
      >
        <option value="everything">EVERYTHING ({total})</option>
        {types.map(({ count, value }) => (
          <option key={value} value={value}>{value.toUpperCase()}S ({count})</option>
        ))}
      </select>
    </>
  );
}
