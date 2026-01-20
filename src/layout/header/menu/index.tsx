'use client';

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
        Menu
      </button>
      <Dialog
        id="nav"
        isOpen={isOpen}
        ref={dialog}
        onCancel={handleOnCancel}
      >
        <DialogHeader>
          <h2 className={styles.header}>
            <strong>Menu</strong>
            <small>Main navigation</small>
          </h2>
          <DialogClose id="menu" onClose={handleOnClose} />
        </DialogHeader>
        <Navigation className={styles.list} route={route} />
        <DialogFooter />
      </Dialog>
    </>
  );
}
