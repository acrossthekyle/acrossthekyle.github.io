'use client';

import { Kanban } from 'lucide-react';

import { useDialog } from '@/hooks/useDialog';
import { useFilter } from '@/hooks/useFilter';

import styles from './stylesheet';

export default function Anchor() {
  const { onOpen } = useDialog();
  const { isFiltering } = useFilter();

  const handleOnClick = () => {
    onOpen({
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
        <Kanban className={`${styles.icon} ${styles.rotate}`} />
      </button>
    </section>
  );
}
