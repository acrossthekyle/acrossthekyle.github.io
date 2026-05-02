'use client';

import { Ellipsis } from 'lucide-react';

import { useDialog } from '@/hooks/useDialog';
import { useFilter } from '@/hooks/useFilter';

import styles from './stylesheet';

export default function Anchor() {
  const { onDialog } = useDialog();
  const { isFiltering } = useFilter();

  const handleOnClick = () => {
    onDialog({
      template: 'info',
    });
  };

  return (
    <section className={styles.anchor(!isFiltering)}>
      <button
        aria-label="info about kyle"
        className={`${styles.button(true)} ${styles.only}`}
        onClick={handleOnClick}
        type="button"
      >
        <Ellipsis className={styles.icon} />
      </button>
    </section>
  );
}
