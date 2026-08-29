'use client';

import tw from '@/styles';

import { FILTERS } from './constants';
import { useModel } from './model';
import { uppercaseFirst } from './utils';

type Props = {
  filterBy: string;
  onChange: (value: string) => void;
};

export default function Select({ filterBy, onChange }: Props) {
  const { handleOnSelect } = useModel(onChange);

  return (
    <select
      className={styles.select}
      name="filter"
      onChange={handleOnSelect}
      tabIndex={-1}
      value={uppercaseFirst(filterBy)}
    >
      {FILTERS.map((filter) => (
        <option key={filter}>
          {uppercaseFirst(filter)}
        </option>
      ))}
    </select>
  );
};

const styles = tw({
  select: `
    absolute top-0 right-0
    w-full
    opacity-0
    cursor-pointer
  `,
});
