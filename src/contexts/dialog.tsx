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
  onDone: (callback: () => void) => void;
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
  const [onDoneCallback, setOnDoneCallback] = useState<(() => void) | null>(null);

  const dialog = useRef<HTMLDialogElement | null>(null);

  const handleOnOpen = useCallback((input: Input) => {
    setData(input);

    dialog.current?.showModal();

    requestAnimationFrame(() => setIsOpen(true));
  }, []);

  const handleOnDoneCallback = useCallback(() => {
    if (onDoneCallback !== null) {
      onDoneCallback();

      setOnDoneCallback(null);
    }
  }, [onDoneCallback]);

  const handleOnClose = useCallback(() => {
    setIsOpen(false);

    handleOnDoneCallback();

    const node = dialog.current;

    const handleTransitionEnd = () => {
      node?.close();
    };

    node?.addEventListener('transitionend', handleTransitionEnd, { once: true });
  }, [handleOnDoneCallback]);

  const handleOnCancel = useCallback((event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape') {
      handleOnClose();
    }
  }, [handleOnClose]);

  const handleOnBackdrop = useCallback((event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialog.current) {
      handleOnClose();
    }
  }, [handleOnClose]);

  const handleOnDone = useCallback((callback: () => void) => {
    setOnDoneCallback(() => callback);
  }, []);

  return (
    <DialogContext.Provider value={{
      data,
      dialog,
      isOpen,
      onBackdrop: handleOnBackdrop,
      onCancel: handleOnCancel,
      onClose: handleOnClose,
      onDone: handleOnDone,
      onOpen: handleOnOpen,
    }}>
      {children}
    </DialogContext.Provider>
  );
}
