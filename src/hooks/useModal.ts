'use client';

import { ReactNode } from 'react';
import { create } from 'zustand';

import { useEvent } from './useEvent';
import { useStack } from './useStack';

type ModalOptions = {
  content: ReactNode | ReactNode[];
  isCloseable?: boolean;
  size?: string;
};

type State = {
  content: ReactNode | ReactNode[] | null;
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
    isCloseable: true,
    isOpen: false,
    size: 'md',
    setModal: (options: ModalOptions) => {
      set({
        content: options.content,
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
    isCloseable,
    isOpen,
    modal,
    size,
  };
}
