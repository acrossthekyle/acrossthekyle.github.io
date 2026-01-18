'use client';

import { Search as Icon } from 'lucide-react';
import { ChangeEvent } from 'react';

import styles from './stylesheet';

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  searchBy: string;
};

export default function Search({ onChange, searchBy }: Props) {
  return (
    <form
      className={styles.container}
      onSubmit={event => event.preventDefault()}
    >
      <fieldset className={styles.search}>
        <Icon aria-hidden="true" className={styles.icon} />
        <input
          className={styles.input}
          onChange={onChange}
          placeholder="Search"
          type="text"
          value={searchBy}
        />
      </fieldset>
    </form>
  );
}
