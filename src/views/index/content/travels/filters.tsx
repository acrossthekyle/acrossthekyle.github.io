'use client';

import { ChevronDown } from 'lucide-react';
import { ChangeEvent } from 'react';

import tw from '@/styles';

type Props = {
  filterBy: string;
  onChange: (value: string) => void;
};

const FILTERS = [
  'all',
  'backpacking',
  'destination',
  'summits',
];

function uppercaseFirst(value: string) {
  return String(value).charAt(0).toUpperCase() + String(value).slice(1);
};

export default function Filters({ filterBy, onChange }: Props) {
  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value.toLowerCase());
  };

  return (
    <nav className={styles.filter}>
      <select
        className={styles.select}
        name="filter"
        onChange={handleSelect}
        tabIndex={-1}
        value={uppercaseFirst(filterBy)}
      >
        {FILTERS.map((filter) => (
          <option key={filter}>
            {uppercaseFirst(filter)}
          </option>
        ))}
      </select>
      <button
        aria-hidden="true"
        className={styles.toggle}
        onClick={() => { /* noop */ }}
        type="button"
      >
        <span className={styles.prefix}>Category:</span>
        {filterBy}
        <ChevronDown className={styles.icon} />
      </button>
    </nav>
  );
};

const styles = tw({
  heading: `
    text-tiny text-current/50
  `,
  filter: `
    group
    absolute top-6 right-6 z-2
    flex items-center justify-end gap-2
    mb-6

    lg:gap-1
    lg:top-6
  `,
  toggle: `
    flex items-center gap-2
    w-fit
    px-3 py-1
    border border-current/22.5
    rounded-full
    uppercase
    text-tiny
    uppercase
    tracking-wider
    bg-transparent

    motion-safe:duration-300

    group-hover:bg-(--foreground)/5

    sm:text-xtiny
  `,
  prefix: `
    font-normal
    text-current/50
  `,
  icon: `
    w-3.5 h-3.5
    stroke-1
  `,
  select: `
    absolute top-0 right-0
    w-full
    opacity-0
    cursor-pointer
  `,
});
