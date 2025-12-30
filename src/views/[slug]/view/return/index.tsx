'use client';

import { ArrowLeft } from 'lucide-react';

import { useModel } from './model';
import styles from './stylesheet';

export default function Return() {
  const { handleOnReturn } = useModel();

  return (
    <nav aria-label="return home navigation" className={styles.container}>
      <button
        className={styles.cta}
        onClick={handleOnReturn}
        type="button"
      >
        <ArrowLeft className={styles.icon} /> Home
      </button>
    </nav>
  );
}
