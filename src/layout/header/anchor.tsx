'use client';

import { Equal } from 'lucide-react';

import { useDialog } from '@/hooks/useDialog';

import styles from './stylesheet';

type Props ={
  isFiltering: boolean;
};

export default function Anchor({ isFiltering }: Props) {
  const { onOpen } = useDialog();

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
        <Equal className={styles.icon} /> Info
      </button>
    </section>
  );
}
