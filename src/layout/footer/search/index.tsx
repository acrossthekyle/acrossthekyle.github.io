'use client';

import { useDialog } from '@/hooks/useDialog';
import { Dialog, DialogContent, DialogHeader } from '@/ui/dialog';

import Content from './content';
import styles from './stylesheet';
import Trigger from './trigger';

export default function Search() {
  const {
    dialog,
    handleOnCancel,
    handleOnClose,
    handleOnOpen,
    isOpen,
  } = useDialog();

  return (
    <>
      <Trigger onOpen={handleOnOpen} />
      <Dialog
        id="search"
        isOpen={isOpen}
        onCancel={handleOnCancel}
        onClose={handleOnClose}
        ref={dialog}
      >
        <DialogHeader>
          <strong>Search</strong>
          <small>Command/Ctrl + K</small>
        </DialogHeader>
        <DialogContent className={styles.content}>
          <Content />
        </DialogContent>
      </Dialog>
    </>
  );
}
