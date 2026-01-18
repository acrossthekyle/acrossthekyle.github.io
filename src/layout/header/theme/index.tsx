'use client';

import { useModel } from './model';
import styles from './stylesheet';

export default function Theme() {
  const { handleOnSwitchTheme } = useModel();

  return (
    <button
      className={styles.toggle}
      onClick={handleOnSwitchTheme}
      title="Toggle theme"
      type="button"
    >
      <span aria-hidden="true" className={styles.dot} />
    </button>
  );
}
