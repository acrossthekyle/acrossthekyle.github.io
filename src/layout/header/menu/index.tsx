'use client';

import { Folder } from 'lucide-react';

import { useDialog } from '@/hooks/useDialog';
import { Dialog, DialogContent, DialogHeader } from '@/ui/dialog';

import Navigation from '../../navigation';

import styles from './stylesheet';

export default function Menu() {
  const {
    dialog,
    handleOnBackdrop,
    handleOnCancel,
    handleOnClose,
    handleOnOpen,
    isOpen,
  } = useDialog();

  return (
    <>
      <button
        aria-controls="menu"
        aria-label="open menu dialog"
        className={styles.cta}
        onClick={handleOnOpen}
        type="button"
      >
        <Folder className="w-4 h-4" />
      </button>
      <Dialog
        id="menu"
        isOpen={isOpen}
        onBackdrop={handleOnBackdrop}
        onCancel={handleOnCancel}
        onClose={handleOnClose}
        ref={dialog}
      >
        <DialogHeader>
          <strong>Menu</strong>
          <small>Site directory</small>
        </DialogHeader>
        <DialogContent>
          <Navigation isMenu />
        </DialogContent>
      </Dialog>
    </>
  );
}
