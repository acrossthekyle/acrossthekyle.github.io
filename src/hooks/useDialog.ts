'use client';

import { KeyboardEvent, MouseEvent, useRef } from 'react';
import { create } from 'zustand';

type State = {
  isOpen: boolean;
};

type Actions = {
  setIsOpen: (value: boolean) => void;
};

const store = create<State & Actions>()(
  (set) => ({
    isOpen: false,
    setIsOpen: (value: boolean) => {
      set({ isOpen: value });
    },
  }),
);

export function useDialog(onReady?: () => void) {
  const { isOpen, setIsOpen } = store();

  const dialog = useRef<HTMLDialogElement | null>(null);

  const handleOnOpen = () => {
    dialog.current?.showModal();

    onReady?.();

    requestAnimationFrame(() => setIsOpen(true));
  };

  const handleOnNavigate = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (event.currentTarget.target === '_blank') {
      const tab = window.open(event.currentTarget.href, '_blank');

      if (tab !== null) {
        tab.focus();
      }
    } else {
      setIsOpen(false);

      dialog.current?.close();

      window.location.href = event.currentTarget.href;
    }
  };

  const handleOnClose = () => {
    setIsOpen(false);

    const handleTransitionEnd = () => {
      dialog.current?.close();

      dialog.current?.removeEventListener('transitionend', handleTransitionEnd);
    };

    dialog.current?.addEventListener('transitionend', handleTransitionEnd);
  };

  const handleOnCancel = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') {
      const activeElement = document.activeElement;

      const isInputFocused = activeElement?.tagName.toUpperCase() === 'INPUT';
      // @ts-expect-error - this is ok
      const isEmpty = activeElement?.value?.trim() === '';

      if (isInputFocused && !isEmpty) {
        event.preventDefault();
      } else {
        handleOnClose();
      }
    }
  };

  const handleOnBackdrop = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialog.current) {
      handleOnClose();
    }
  };

  return {
    dialog,
    handleOnBackdrop,
    handleOnCancel,
    handleOnClose,
    handleOnNavigate,
    handleOnOpen,
    isOpen,
  }
}
