'use client';

import { ReactNode } from 'react';
import { create } from 'zustand';

import { useEvent } from './useEvent';

type ModalOptions = {
  content: ReactNode | ReactNode[];
};

type State = {
  content: ReactNode | ReactNode[] | null;
  isOpen: boolean;
};

type Actions = {
  setModal: (options: ModalOptions) => void;
  unsetModal: () => void;
};

const store = create<State & Actions>()(
  (set) => ({
    content: null,
    isOpen: false,
    setModal: (options: ModalOptions) => {
      set({
        content: options.content,
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
        });
      }, 300);
    },
  }),
);

export function useModal() {
  const {
    content,
    isOpen,
    setModal,
    unsetModal,
  } = store();

  const closeModal = () => {
    unsetModal();

    document.body.classList.remove('overflow-hidden');
  };

  const handleOnEscape = () => {
    if (isOpen) {
      closeModal();
    }
  };

  const modal = (options: ModalOptions) => {
    setModal(options);

    document.body.classList.add('overflow-hidden');
  };

  useEvent('onEscape', () => {
    handleOnEscape();
  });

  return {
    closeModal,
    content,
    isOpen,
    modal,
  };
}
