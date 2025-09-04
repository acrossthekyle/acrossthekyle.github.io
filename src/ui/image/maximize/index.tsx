'use client';

import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Maximize({ children }: Props) {
  const { handleOnMaximize, zoomRef } = useModel();

  return (
    <button
      className={styles.wrapper}
      onClick={handleOnMaximize}
      ref={zoomRef}
      type="button"
    >
      {children}
    </button>
  );
}
