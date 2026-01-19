'use client';

import { SyntheticEvent, useRef, useState } from 'react';

export function useDialog() {
  const dialog = useRef<HTMLDialogElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleOnOpen = () => {
    dialog.current?.showModal();

    requestAnimationFrame(() => setIsOpen(true));
  };

  const handleOnClose = () => {
    setIsOpen(false);

    const handleTransitionEnd = () => {
      dialog.current?.close();

      dialog.current?.removeEventListener('transitionend', handleTransitionEnd);
    };

    dialog.current?.addEventListener('transitionend', handleTransitionEnd);
  };

  const handleOnCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    event.preventDefault();

    handleOnClose();
  };

  return {
    dialog,
    handleOnCancel,
    handleOnClose,
    handleOnOpen,
    isOpen,
  }
}
