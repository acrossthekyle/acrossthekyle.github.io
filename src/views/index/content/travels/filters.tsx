'use client';

import { Ellipsis } from 'lucide-react';
import { ChangeEvent, useRef } from 'react';

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
  const selectRef = useRef<HTMLSelectElement>(null);

  const handleToggle = () => {
    if (selectRef.current) {
      try {
        selectRef.current.showPicker();
      } catch {
        selectRef.current.focus();
      }
    }
  };

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value.toLowerCase());
  };

  return (
    <nav className={styles.filter}>
      <select
        className={styles.select}
        name="filter"
        onChange={handleSelect}
        ref={selectRef}
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
        aria-label="toggle filter dropdown"
        className={styles.toggle}
        onClick={handleToggle}
        type="button"
      >
        <span className={styles.prefix}>Category:</span>
        {filterBy}
        <Ellipsis className={styles.icon} />
      </button>
    </nav>
  );
};

const styles = tw({
  heading: `
    text-tiny text-current/50
  `,
  filter: `
    absolute top-5 right-5 left-16 z-2
    flex items-center justify-end gap-2
    mb-6

    lg:gap-1
    lg:top-4.75
    xl:right-5.5
  `,
  toggle: `
    flex items-center gap-2
    w-fit
    px-2 py-1
    border border-current/22.5
    rounded-sm
    uppercase
    text-tiny
    uppercase
    tracking-wider

    motion-safe:duration-300

    hover:bg-(--foreground)/5

    sm:text-xtiny
  `,
  prefix: `
    font-normal
    text-current/50
  `,
  icon: `
    w-2.75 h-2.75
  `,
  select: `
    sr-only
    capitalize
  `,
});
