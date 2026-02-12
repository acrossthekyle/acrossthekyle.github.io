'use client';

import { Search } from 'lucide-react';
import { ChangeEvent, FormEvent, KeyboardEvent } from 'react';

import styles from './stylesheet';

type Props = {
  onChange: (value: string) => void;
  query: string;
};

export default function Form({ onChange, query }: Props) {
  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onChange(query);
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange((event.target as HTMLInputElement).value.toLowerCase());
  };

  const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      onChange('');
    }
  };

  return (
    <form
      aria-label="search"
      className={styles.container}
      onSubmit={handleOnSubmit}
    >
      <label aria-label="search" className={styles.label} htmlFor="email">
        <Search className={styles.icon} />
      </label>
      <input
        autoFocus
        className={styles.input}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        id="email"
        name="query"
        required
        type="text"
        value={query}
      />
    </form>
  );
}
