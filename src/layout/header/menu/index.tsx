'use client';

import { useDialog } from '@/hooks/useDialog';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogFooter,
  DialogHeader,
} from '@/ui/dialog';

import Navigation from '../../navigation';
import Theme from '../theme';

import styles from './stylesheet';

export default function Menu() {
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
        title="Menu"
        type="button"
      >
        Index
      </button>
      <Dialog
        id="menu"
        isOpen={isOpen}
        onCancel={handleOnCancel}
        ref={dialog}
      >
        <DialogHeader>
          <h2 className={styles.header}>
            Kyle Gilbert
            <small>Backpacker + Engineer</small>
          </h2>
          <DialogClose
            id="menu"
            onClose={handleOnClose}
          />
        </DialogHeader>
        <DialogBody>
          <Navigation />
          <Theme className={styles.theme} />
        </DialogBody>
        <DialogFooter />
      </Dialog>
    </>
  );
}
