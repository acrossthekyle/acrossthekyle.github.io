'use client';

import { ReactNode } from 'react';
import { create } from 'zustand';

import { useEvent } from './useEvent';

type ModalOptions = {
  content: ReactNode | ReactNode[];
  ref: React.RefObject<HTMLFrameElement | null>;
};

type Size = {
  top: number;
  left: number;
  height: string;
  width: string;
};

type State = {
  content: ReactNode | ReactNode[] | null;
  isOpen: boolean;
  size?: Size;
  sizeBackup?: Size;
};

type Actions = {
  setFinalSize: (size: Size) => void;
  setModal: (content: ReactNode | ReactNode[], size: Size) => void;
  unsetModal: () => void;
};

const store = create<State & Actions>()(
  (set, get) => ({
    content: null,
    isOpen: false,
    size: undefined,
    sizeBackup: undefined,
    setModal: (content: ReactNode | ReactNode[], size: Size) => {
      set({
        content,
        isOpen: true,
        size,
        sizeBackup: size,
      });
    },
    setFinalSize: (size: Size) => {
      set({
        size,
      });
    },
    unsetModal: () => {
      set({
        size: get().sizeBackup,
      });

      setTimeout(() => {
        set({
          content: null,
          isOpen: false,
          size: undefined,
        });
      }, 400);
    },
  }),
);

export function useModal() {
  const {
    content,
    isOpen,
    setFinalSize,
    setModal,
    size,
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
    if (options.ref.current === null) {
      return;
    }

    const boundingClientRect = options.ref.current.getBoundingClientRect();
    const computedStyle = {
      width: window.getComputedStyle(options.ref.current).width,
      height: window.getComputedStyle(options.ref.current).height,
    };

    setModal(
      options.content,
      {
        top: boundingClientRect.top,
        left: boundingClientRect.left,
        height: computedStyle.height,
        width: computedStyle.width,
      }
    );

    setTimeout(() => {
      setFinalSize({
        height: '100vh',
        width: '100vw',
        top: 0,
        left: 0,
      });
    }, 1);

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
    size,
  };
}
