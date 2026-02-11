'use client';

import { useDialog } from '@/hooks/useDialog';
import { Dialog, DialogHeader } from '@/ui/dialog';

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
          Search
          <small>Find nearly anything</small>
        </DialogHeader>
      </Dialog>
    </>
  );
}
