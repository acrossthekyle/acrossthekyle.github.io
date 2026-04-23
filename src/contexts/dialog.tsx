'use client';

import {
  KeyboardEvent,
  MouseEvent,
  PropsWithChildren,
  RefObject,
  createContext,
  useRef,
  useState,
  useCallback,
} from 'react';

import type { Album, Data } from '@/types';

type Input = {
  data?: {
    album?: Album;
    albums?: Album[];
    image?: Data;
  };
  template: string;
};

type DialogContextType = {
  data: Input;
  dialog: RefObject<HTMLDialogElement | null>;
  onBackdrop: (event: MouseEvent<HTMLDialogElement>) => void;
  onCancel: (event: KeyboardEvent<HTMLDialogElement>) => void;
  onClose: () => void;
  onOpen: (input: Input) => void;
  isOpen: boolean;
};

export const DialogContext = createContext<DialogContextType | null>(null);

export default function DialogProvider({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<Input>({
    data: {},
    template: '',
  });

  const dialog = useRef<HTMLDialogElement | null>(null);

  const handleOnOpen = useCallback((input: Input) => {
    setData(input);

    dialog.current?.showModal();

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
      data,
      dialog,
      isOpen,
      onBackdrop: handleOnBackdrop,
      onCancel: handleOnCancel,
      onClose: handleOnClose,
      onOpen: handleOnOpen,
    }}>
      {children}
    </DialogContext.Provider>
  );
}
