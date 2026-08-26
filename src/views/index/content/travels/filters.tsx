'use client';

import { ListFilter, X } from 'lucide-react';
import { ChangeEvent, useRef, useState } from 'react';

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

export default function Filters({ filterBy, onChange }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const selectRef = useRef<HTMLSelectElement>(null);

  const handleToggle = () => {
    if (window.innerWidth < 1024 && selectRef.current) {
      try {
        selectRef.current.showPicker();
      } catch {
        selectRef.current.focus();
      }
      return;
    }

    setIsExpanded(previous => !previous);
  };

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <nav className={styles.filters}>
      {!isExpanded && (
        <span className={styles.current}>
          <span className={styles.prefix}>Viewing:</span> {filterBy}
        </span>
      )}
      {FILTERS.map((filter) => {
        const canRender = isExpanded ? true : false;

        if (!canRender) {
          return null;
        }

        return (
          <button
            className={`${styles.filter} ${styles.cta}`}
            key={filter}
            onClick={() => onChange(filter)}
            type="button"
          >
            {filter}
          </button>
        );
      })}
      <select
        className={styles.select}
        name="filter"
        onChange={handleSelect}
        ref={selectRef}
        tabIndex={-1}
        value={filterBy}
      >
        {FILTERS.map((filter) => (
          <option key={filter}>
            {filter}
          </option>
        ))}
      </select>
      <button
        className={`${styles.toggle} ${styles.cta}`}
        onClick={handleToggle}
        type="button"
      >
        {isExpanded ? (
          <X className={styles.icon} />
        ) : (
          <ListFilter className={styles.icon} />
        )}
      </button>
    </nav>
  );
};

const styles = tw({
  heading: `
    text-tiny text-current/50
  `,
  filters: `
    absolute top-5 right-5 left-16
    flex items-center justify-end gap-2
    mb-6

    lg:gap-1
    lg:top-4.75
    xl:right-5.5
  `,
  cta: `
    items-center gap-2
    w-fit
    p-1
    border border-current/22.5
    rounded-sm
    uppercase
    text-xtiny
    uppercase
    tracking-wider

    motion-safe:duration-300

    hover:bg-(--foreground)/5
  `,
  filter: `
    hidden

    lg:flex
  `,
  current: `
    flex items-center gap-2
    w-fit
    p-1
    uppercase
    text-tiny
    uppercase
    tracking-wider
  `,
  prefix: `
    font-normal
    text-current/50
  `,
  toggle: `
    flex
  `,
  icon: `
    w-3 h-3
  `,
  select: `
    sr-only
    capitalize

    lg:hidden
  `,
});
