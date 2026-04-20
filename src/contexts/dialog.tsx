'use client';

import { KeyboardEvent, MouseEvent, PropsWithChildren, RefObject, createContext, useRef, useState, useCallback } from 'react';

type DialogContextType = {
  dialog: RefObject<HTMLDialogElement | null>;
  handleOnOpen: (onReady?: () => void) => void;
  handleOnClose: () => void;
  handleOnNavigate: (event: MouseEvent<HTMLAnchorElement>) => void;
  handleOnCancel: (event: KeyboardEvent<HTMLDialogElement>) => void;
  handleOnBackdrop: (event: MouseEvent<HTMLDialogElement>) => void;
  isOpen: boolean;
};

export const DialogContext = createContext<DialogContextType | null>(null);

export default function DialogProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);

  const dialog = useRef<HTMLDialogElement | null>(null);

  const handleOnOpen = useCallback((onReady?: () => void) => {
    dialog.current?.showModal();

    onReady?.();

    requestAnimationFrame(() => setIsOpen(true));
  }, []);

  const handleOnClose = useCallback(() => {
    setIsOpen(false);

    const handleTransitionEnd = () => {
      dialog.current?.close();

      dialog.current?.removeEventListener('transitionend', handleTransitionEnd);
    };
    dialog.current?.addEventListener('transitionend', handleTransitionEnd);
  }, []);

  const handleOnNavigate = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (event.currentTarget.target === '_blank') {
      window.open(event.currentTarget.href, '_blank')?.focus();
    } else {
      setIsOpen(false);

      dialog.current?.close();

      window.location.href = event.currentTarget.href;
    }
  }, []);

  const handleOnCancel = useCallback((event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') {
      const active = document.activeElement as HTMLInputElement;
      const isInput = active?.tagName === 'INPUT';
      const isEmpty = active?.value?.trim() === '';

      if (isInput && !isEmpty) {
        event.preventDefault();
      } else {
        handleOnClose();
      }
    }
  }, [handleOnClose]);

  const handleOnBackdrop = useCallback((event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialog.current) {
      handleOnClose();
    }
  }, [handleOnClose]);

  return (
    <DialogContext.Provider value={{
      isOpen,
      dialog,
      onOpen: handleOnOpen,
      onClose: handleOnClose,
      onNavigate: handleOnNavigate,
      onCancel: handleOnCancel,
      onBackdrop: handleOnBackdrop,
    }}>
      {children}
    </DialogContext.Provider>
  );
}
