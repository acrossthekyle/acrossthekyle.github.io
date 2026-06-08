'use client';

import {
  KeyboardEvent,
  MouseEvent,
  PropsWithChildren,
  createContext,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

type DialogContextType = {
  dialog: string;
  input?: object;
  isOpen: boolean;
  onBackdrop: (event: MouseEvent<HTMLDialogElement>) => void;
  onCancel: (event: KeyboardEvent<HTMLDialogElement>) => void;
  onClose: () => void;
  onDialog: (name: string, data?: object) => void;
  onRegister: (name: string, node: HTMLDialogElement | null) => void;
};

export const DialogContext = createContext<DialogContextType | null>(null);

export default function DialogProvider({ children }: PropsWithChildren) {
  const [canClose, setCanClose] = useState(false);
  const [dialog, setDialog] = useState('');
  const [input, setInput] = useState<object | undefined>();
  const [isOpen, setIsOpen] = useState(false);

  const dialogRefs = useRef<Record<string, HTMLDialogElement | null>>({});

  const updateBackdropHeight = useCallback((forcedName?: string) => {
    const activeNode = dialogRefs.current[forcedName || dialog];

    if (activeNode) {
      const height = document.documentElement.scrollHeight;

      activeNode.style.setProperty('--dialog-backdrop-height', `${height}px`);
    }
  }, [dialog]);

  const handleOnWindowResize = useCallback(() => {
    updateBackdropHeight();
  }, [updateBackdropHeight]);

  useLayoutEffect(() => {
    if (isOpen) {
      updateBackdropHeight();

      window.addEventListener('resize', handleOnWindowResize);

      return () => window.removeEventListener('resize', handleOnWindowResize);
    }
  }, [handleOnWindowResize, isOpen, updateBackdropHeight]);

  const handleOnRegister = useCallback((name: string, node: HTMLDialogElement | null) => {
    dialogRefs.current[name] = node;
  }, []);

  const handleOnOpen = useCallback((name: string, data?: object) => {
    const activeNode = dialogRefs.current[name];

    if (!activeNode) {
      return;
    }

    activeNode.style.setProperty('--dialog-top-position', `${window.scrollY}px`);

    activeNode.showModal();

    setInput(data);

    updateBackdropHeight(name);

    requestAnimationFrame(() => {
      setIsOpen(true);
      setDialog(name);

      setTimeout(() => {
        setCanClose(true);
      }, 450);
    });
  }, [updateBackdropHeight]);

  const handleOnClose = useCallback(() => {
    if (!canClose) {
      return;
    }

    const activeNode = dialogRefs.current[dialog];

    setCanClose(false);
    setIsOpen(false);
    setDialog('');

    if (!activeNode) {
      return;
    }

    const handleTransitionEnd = () => {
      activeNode.close();
    };

    activeNode.addEventListener('transitionend', handleTransitionEnd, { once: true });
  }, [canClose, dialog]);

  const handleOnCancel = useCallback((event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === 'Escape' && canClose) {
      event.preventDefault();

      handleOnClose();
    }
  }, [canClose, handleOnClose]);

  const handleOnBackdrop = useCallback((event: MouseEvent<HTMLDialogElement>) => {
    const activeNode = dialogRefs.current[dialog];

    if (event.target === activeNode && canClose) {
      handleOnClose();
    }
  }, [canClose, dialog, handleOnClose]);

  return (
    <DialogContext.Provider value={{
      dialog,
      input,
      isOpen,
      onBackdrop: handleOnBackdrop,
      onCancel: handleOnCancel,
      onClose: handleOnClose,
      onDialog: handleOnOpen,
      onRegister: handleOnRegister,
    }}>
      {children}
    </DialogContext.Provider>
  );
}
