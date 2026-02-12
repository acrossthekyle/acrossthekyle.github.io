'use client';

import { useDialog } from '@/hooks/useDialog';
import { Dialog, DialogContent, DialogHeader } from '@/ui/dialog';

import Navigation from '../../navigation';

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
        aria-controls="menu"
        aria-label="open menu dialog"
        className="backdrop"
        onClick={handleOnOpen}
        type="button"
      >
        Menu
      </button>
      <Dialog
        id="menu"
        isOpen={isOpen}
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
