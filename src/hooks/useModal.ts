'use client';

import { ReactNode } from 'react';
import { create } from 'zustand';

import { useEvent } from './useEvent';
import { useStack } from './useStack';

type ModalOptions = {
  content: ReactNode | ReactNode[];
  hasDarkBackdrop?: boolean;
  isCloseable?: boolean;
  size?: string;
};

type State = {
  content: ReactNode | ReactNode[] | null;
  hasDarkBackdrop: boolean;
  isCloseable: boolean;
  isOpen: boolean;
  size: string;
};

type Actions = {
  setModal: (options: ModalOptions) => void;
  unsetModal: () => void;
};

const store = create<State & Actions>()(
  (set) => ({
    content: null,
    hasDarkBackdrop: false,
    isCloseable: true,
    isOpen: false,
    size: 'md',
    setModal: (options: ModalOptions) => {
      set({
        content: options.content,
        hasDarkBackdrop: options.hasDarkBackdrop ?? false,
        isCloseable: options.isCloseable ?? true,
        size: options.size ?? 'md',
      });

      setTimeout(() => {
        set({
          isOpen: true,
        });
      }, 200);
    },
    unsetModal: () => {
      set({
        isOpen: false,
      });

      setTimeout(() => {
        set({
          content: null,
          hasDarkBackdrop: false,
          isCloseable: true,
          size: 'md',
        });
      }, 300);
    },
  }),
);

export function useModal() {
  const {
    content,
    hasDarkBackdrop,
    isCloseable,
    isOpen,
    setModal,
    size,
    unsetModal,
  } = store();

  const { addStack, removeStack } = useStack();

  const closeModal = () => {
    unsetModal();
  };

  const handleOnClose = () => {
    if (isOpen) {
      removeStack();

      closeModal();
    }
  };

  const handleOnEscape = () => {
    if (isOpen) {
      closeModal();
    }
  };

  const modal = (options: ModalOptions) => {
    addStack('modal');

    setModal(options);
  };

  useEvent('onEscape', (id) => {
    if (id === 'modal') {
      handleOnEscape();
    }
  });

  return {
    content,
    handleOnClose,
    hasDarkBackdrop,
    isCloseable,
    isOpen,
    modal,
    size,
  };
}
