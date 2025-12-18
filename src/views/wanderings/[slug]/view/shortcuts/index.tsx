'use client';

import { useModel } from './model';
import styles from './stylesheet';

export default function Shortcuts() {
  useModel();

  return (
    <div aria-hidden="true" className={styles.anchor} id="anchor" />
  );
}
