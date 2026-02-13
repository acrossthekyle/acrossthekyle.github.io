'use client';

import { Search } from 'lucide-react';
import { useEffect } from 'react';

import { useDialog } from '@/hooks/useDialog';
import { KeyboardShortcut } from '@/ui/keyboard';

import styles from './stylesheet';

type Props = {
  onOpen: () => void;
};

export default function Trigger({ onOpen }: Props) {
  const { isOpen } = useDialog();

  useEffect(() => {
    document.addEventListener('keydown', handleOnKeyDown);

    return () => document.removeEventListener('keydown', handleOnKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleOnKeyDown = (event: KeyboardEvent) => {
    if (isOpen) {
      return;
    }

    if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();

      onOpen();
    }
  };

  return (
    <button
      aria-controls="search"
      className={styles.container}
      onClick={onOpen}
      title="Search"
      type="button"
    >
      <Search className={styles.icon} />
      <KeyboardShortcut>K</KeyboardShortcut>
    </button>
  );
}
