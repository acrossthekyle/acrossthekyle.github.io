'use client';

import { useDialog } from '@/hooks/useDialog';
import { Dialog, DialogHeader } from '@/ui/dialog';

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
        title="Menu"
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
          Menu
          <small>Site directory</small>
        </DialogHeader>
        <Navigation isMenu />
      </Dialog>
    </>
  );
}
