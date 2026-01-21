'use client';

import { TextAlignEnd as Icon } from 'lucide-react';

import { useDialog } from '@/hooks/useDialog';
import {
  Dialog,
  DialogClose,
  DialogHeader,
  DialogFooter,
} from '@/ui/dialog';

import Navigation from '../navigation';

import styles from './stylesheet';

type Props = {
  route: string;
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
        <Icon />
      </button>
      <Dialog
        id="menu"
        isOpen={isOpen}
        onCancel={handleOnCancel}
        ref={dialog}
      >
        <DialogHeader>
          <Navigation className={styles.list} route={route} />
          <DialogClose id="menu" onClose={handleOnClose} />
        </DialogHeader>
        <DialogFooter />
      </Dialog>
    </>
  );
}
