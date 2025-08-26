'use client';

import { useModel } from './model';
import styles from './stylesheet';

export default function Header() {
  const {
    handleOnBack,
    isOnParent,
    isOnRoot,
  } = useModel();

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
