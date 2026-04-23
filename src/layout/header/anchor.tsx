'use client';

import { SpellCheck2 } from 'lucide-react';

import { useDialog } from '@/hooks/useDialog';

import styles from './stylesheet';

export default function Anchor() {
  const { onOpen } = useDialog();

  const handleOnClick = () => {
    onOpen({
      template: 'info',
    });
  };

  return (
    <section className={styles.anchor}>
      <button
        className={`${styles.button(true)} ${styles.only}`}
        onClick={handleOnClick}
        type="button"
      >
        <SpellCheck2 className={styles.icon} /> Backstory
      </button>
    </section>
  );
}
