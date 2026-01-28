'use client';

import { TextAlignEnd as Icon } from 'lucide-react';

import { useDialog } from '@/hooks/useDialog';
import {
  Dialog,
  DialogClose,
  DialogFooter,
} from '@/ui/dialog';

import Navigation from '../navigation';
import Theme from '../theme';

import styles from './stylesheet';

type Props = {
  route?: string;
};

export default function Menu({ route }: Props) {
  const {
    dialog,
    handleOnCancel,
    handleOnClose,
    handleOnOpen,
    isOpen,
  } = useDialog();

  return (
    <>
      <button
        aria-controls="nav"
        aria-label="open menu dialog"
        className={styles.open}
        onClick={handleOnOpen}
        type="button"
      >
        <Icon className={styles.icon} />
      </button>
      <Dialog
        id="menu"
        isOpen={isOpen}
        onCancel={handleOnCancel}
        ref={dialog}
      >
        <DialogClose
          className={styles.close}
          id="menu"
          onClose={handleOnClose}
        />
        <nav aria-label="main navigation" className={styles.section}>
          <Navigation className={styles.list} route={route} />
        </nav>
        <Theme className={styles.theme} />
        <DialogFooter />
      </Dialog>
    </>
  );
}
