'use client';

import { Undo2 } from 'lucide-react';

import { useModel } from './model';
import styles from './stylesheet';

type Props = {
  canSkipTo?: boolean;
  fallback: string;
};

export default function Back({ canSkipTo, fallback }: Props) {
  const { handleOnBack } = useModel(fallback);

  return (
    <button
      aria-label="back to previous page"
      className={styles.container}
      id={canSkipTo ? 'skip-to' : undefined}
      onClick={handleOnBack}
      type="button"
    >
      <Undo2 className={styles.icon} />
    </button>
  );
}
