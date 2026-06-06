'use client';

import { useMenu } from '@/hooks/useMenu';

import styles from './stylesheet';

export default function Header() {
  const { onMenu } = useMenu();

  return (
    <header className={styles.container}>
      <button className={styles.anchor} onClick={onMenu} type="button">
        <span className={styles.top} />
        <span className={styles.bottom} />
      </button>
    </header>
  );
}
