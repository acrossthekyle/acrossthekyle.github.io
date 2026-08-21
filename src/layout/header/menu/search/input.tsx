'use client';

import { TextSearch } from 'lucide-react';
import { RefObject } from 'react';

import tw from '@/styles';

type Props = {
  isActive: boolean;
  onChange: (value: string) => void;
  query: string;
  ref: RefObject<HTMLInputElement | null>;
};

export default function Input({ isActive, onChange, query, ref }: Props) {
  const handleFocus = () => {
    setTimeout(() => window.scrollTo(0, 0), 100);
  };

  return (
    <div className={styles.form}>
      <label className="sr-only" htmlFor="search">
        Search travels
      </label>
      <input
        aria-controls="search-results"
        aria-expanded={isActive}
        autoComplete="off"
        className={styles.input}
        id="search"
        onChange={event => onChange(event.target.value)}
        onFocus={handleFocus}
        placeholder=". . ."
        ref={ref}
        type="search"
        value={query}
      />
      <TextSearch aria-hidden="true" className={styles.icon} />
    </div>
  );
};

const styles = tw({
  form: `
    relative
    flex items-center
    px-6 pt-6
    mt-4
    border-t border-current/12.5
  `,
  input: `
    relative
    w-full
    px-4 pl-8 py-2
    text-base
    uppercase
    border border-current/22.5
    rounded-xs

    placeholder:text-xs

    sm:text-tiny
    sm:placeholder:text-tiny
  `,
  icon: `
    absolute left-8
    w-4 h-4
    pointer-events-none
  `,
});
