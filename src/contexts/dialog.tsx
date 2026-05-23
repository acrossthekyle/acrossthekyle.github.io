'use client';

import {
  KeyboardEvent,
  MouseEvent,
  PropsWithChildren,
  RefObject,
  createContext,
  useCallback,
  useRef,
  useState,
} from 'react';

import type { Collection, Data } from '@/types';

type Input = {
  data: {
    image: Data;
  };
};

type DialogContextType = {
  data: Input;
  dialog: RefObject<HTMLDialogElement | null>;
  isClosing: boolean;
  isOpen: boolean;
  onBackdrop: (event: MouseEvent<HTMLDialogElement>) => void;
  onCancel: (event: KeyboardEvent<HTMLDialogElement>) => void;
  onClose: () => void;
  onDialog: (input: Input) => void;
  onDone: (callback: () => void) => void;
  onStack: (value: boolean) => void;
};

export const DialogContext = createContext<DialogContextType | null>(null);

export default function DialogProvider({ children }: PropsWithChildren) {
  const [canClose, setCanClose] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isStacked, setIsStacked] = useState(false);
  const [data, setData] = useState<Input>({ data: {} });
  const [onDoneCallback, setOnDoneCallback] = useState<(() => void) | null>(null);

  const dialog = useRef<HTMLDialogElement | null>(null);

  const handleOnOpen = useCallback((input: Input) => {
    setData(input);

    dialog.current?.showModal();

    requestAnimationFrame(() => {
      setIsOpen(true);

      setTimeout(() => {
        setCanClose(true);
      }, 450);
    });
  }, []);

  const handleOnDoneCallback = useCallback(() => {
    if (onDoneCallback !== null) {
      onDoneCallback();

      setOnDoneCallback(null);
    }
  }, [onDoneCallback]);

  const handleOnClose = useCallback(() => {
    if (!canClose) {
      return;
    }

    setIsClosing(true);
    setCanClose(false);
    setIsOpen(false);

    const node = dialog.current;

    const handleTransitionEnd = () => {
      node?.close();

      setIsClosing(false);

      handleOnDoneCallback();
    };

    node?.addEventListener('transitionend', handleTransitionEnd, { once: true });
  }, [canClose, handleOnDoneCallback]);

  const handleOnCancel = useCallback((event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape' && !isStacked && canClose) {
      handleOnClose();
    }
  }, [canClose, handleOnClose, isStacked]);

  const handleOnBackdrop = useCallback((event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialog.current && canClose) {
      handleOnClose();
    }
  }, [canClose, handleOnClose]);

  const handleOnDone = useCallback((callback: () => void) => {
    setOnDoneCallback(() => callback);
  }, []);

  const handleOnStack = useCallback((value: boolean) => {
    setIsStacked(value);
  }, []);

  return (
    <DialogContext.Provider value={{
      data,
      dialog,
      isClosing,
      isOpen,
      onBackdrop: handleOnBackdrop,
      onCancel: handleOnCancel,
      onClose: handleOnClose,
      onDialog: handleOnOpen,
      onDone: handleOnDone,
      onStack: handleOnStack,
    }}>
      {children}
    </DialogContext.Provider>
  );
}
