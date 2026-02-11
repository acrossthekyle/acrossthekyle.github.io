'use client';

import { useEffect } from 'react';

import Kbd from '@/ui/keyboard';

import styles from './stylesheet';

type Props = {
  onOpen: () => void;
};

export default function Trigger({ onOpen }: Props) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();

        onOpen();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <button
      aria-controls="search"
      aria-label="open search dialog"
      className={styles.container}
      onClick={onOpen}
      type="button"
    >
      <Kbd isSymbol>⌘</Kbd>
      <Kbd>K</Kbd>
    </button>
  );
}
