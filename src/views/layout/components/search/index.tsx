'use client';

import { Search as Icon } from 'lucide-react';

import { useModel } from './model';
import styles from './stylesheet';

export default function Search() {
  const {
    handleOnChange,
    query,
  } = useModel();

  return (
    <div className={styles.search}>
      <input
        autoComplete="off"
        className={styles.input}
        onChange={handleOnChange}
        placeholder="Search trips"
        name="search"
        type="text"
        value={query}
      />
      <span className={styles.submit}>
        <Icon className={styles.icon} />
      </span>
    </div>
  );
}
