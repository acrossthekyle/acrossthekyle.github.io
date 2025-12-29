'use client';

import { ArrowLeft } from 'lucide-react';

import { useModel } from './model';
import styles from './stylesheet';

export default function Return() {
  const { canRender, handleOnReturn } = useModel();

  if (!canRender) {
    return null;
  }

  return (
    <nav aria-label="return home navigation" className={styles.container}>
      <button
        className={styles.return}
        onClick={handleOnReturn}
        type="button"
      >
        <ArrowLeft className={styles.icon} /> Home
      </button>
    </nav>
  );
}
