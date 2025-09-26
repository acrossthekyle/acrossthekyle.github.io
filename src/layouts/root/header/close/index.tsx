'use client';

import Link from 'next/link';

import { useModel } from './model';
import styles from './stylesheet';

export default function Header() {
  const {
    handleOnBack,
    isOnGrandChild,
    isOnParent,
    isOnRoot,
    uri,
  } = useModel();

  if (isOnGrandChild) {
    return (
      <button
        className={styles.close(isOnRoot, isOnParent)}
        onClick={handleOnBack}
        type="button"
      >
        BACK
      </button>
    );
  }

  return (
    <Link
      className={styles.close(isOnRoot, isOnParent)}
      href={uri}
    >
      BACK
    </Link>
  );
}
