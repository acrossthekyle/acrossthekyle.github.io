'use client';

import { useModel } from './model';
import styles from './stylesheet';

export default function Maximize() {
  const { handleOnMaximize, zoomRef } = useModel();

  return (
    <button
      className={styles.landscape}
      onClick={handleOnMaximize}
      ref={zoomRef}
      title="Maximize"
      type="button"
    />
  );
}
