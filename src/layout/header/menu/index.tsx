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
        ref={dialog}
      >
        <DialogHeader>
          <h2>
            Menu
            <small>Site directory</small>
          </h2>
          <DialogClose
            id="menu"
            onClose={handleOnClose}
          />
        </DialogHeader>
        <DialogBody>
          <Navigation />
        </DialogBody>
        <DialogFooter />
      </Dialog>
    </>
  );
}
