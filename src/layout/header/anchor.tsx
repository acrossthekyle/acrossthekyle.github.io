'use client';

import { SpellCheck2 } from 'lucide-react';

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
        className={`${styles.button(true)} ${styles.only}`}
        onClick={handleOnClick}
        type="button"
      >
        <SpellCheck2 className={styles.icon} /> Kyle
      </button>
    </section>
  );
}
