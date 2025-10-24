'use client';

import Link from 'next/link';

import { useModel } from './model';
import styles from './stylesheet';

export default function Header() {
  const { handleOnBack, isOnChild, isOnRoot } = useModel();

  if (isOnChild) {
    return (
      <button
        className={styles.close(isOnRoot)}
        onClick={handleOnBack}
        type="button"
      >
        BACK
      </button>
    );
  }

  return (
    <Link className={styles.close(isOnRoot)} href="/">
      BACK
    </Link>
  );
}
