'use client';

import type { Stage } from '@/types';

import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  stage: Stage;
};

export default function Maximize({ children, stage }: Props) {
  const { handleOnMaximize, zoomRef } = useModel(stage);

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
