'use client';

import { useModel } from './model';
import styles from './stylesheet';

export default function Maximize() {
  const { handleOnMaximize, zoomRef } = useModel();

  return (
    <>
      <div className={styles.dimensions} ref={zoomRef} />
      <button
        className={styles.maximize}
        onClick={handleOnMaximize}
        type="button"
      >
        Maximize
      </button>
    </>
  );
}
