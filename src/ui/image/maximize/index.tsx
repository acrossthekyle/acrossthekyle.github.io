'use client';

import { MoveDiagonal2 } from 'lucide-react';

import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  caption?: string
};

export default function Maximize({ caption }: Props) {
  const { handleOnMaximize, handleOnWarn, zoomRef } = useModel(caption);

  return (
    <>
      <button
        className={styles.landscape}
        onClick={handleOnMaximize}
        ref={zoomRef}
        type="button"
      >
        <MoveDiagonal2 aria-hidden="true" className={styles.arrow} />
      </button>
      <button
        className={styles.portrait}
        onClick={handleOnWarn}
        type="button"
      />
    </>
  );
}
