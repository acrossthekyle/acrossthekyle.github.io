'use client';

import { useFilter } from '@/hooks/useFilter';

import styles from './stylesheet';
import Theme from './theme';
import Units from './units';

export default function Footer() {
  const { isFiltering } = useFilter();

  return (
    <footer className={styles.container}>
      <section
        aria-label="theme controls"
        className={styles.controls(!isFiltering)}
      >
        <Theme />
      </section>
      <section
        aria-label="units controls"
        className={styles.controls(!isFiltering)}
      >
        <Units />
      </section>
    </footer>
  );
}
