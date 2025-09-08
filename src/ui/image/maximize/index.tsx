'use client';

import { useModel } from './model';
import styles from './stylesheet';

export default function Maximize() {
  const { handleOnMaximize, handleOnWarn, zoomRef } = useModel();

  return (
    <>
      <button
        className={styles.landscape}
        onClick={handleOnMaximize}
        ref={zoomRef}
        type="button"
      />
      <button
        className={styles.portrait}
        onClick={handleOnWarn}
        type="button"
      />
    </>
  );
}
