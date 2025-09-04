'use client';

import { ReactNode } from 'react';
import { create } from 'zustand';

import { useEvent } from './useEvent';

type ZoomOptions = {
  content: ReactNode | ReactNode[];
  ref: React.RefObject<HTMLButtonElement | null>;
};

type Size = {
  top: number;
  left: number;
  height: string;
  width: string;
};

type State = {
  content: ReactNode | ReactNode[] | null;
  isZoomed: boolean;
  size?: Size;
  sizeBackup?: Size;
};

type Actions = {
  setFinalSize: (size: Size) => void;
  setZoom: (content: ReactNode | ReactNode[], size: Size) => void;
  unset: () => void;
};

const store = create<State & Actions>()(
  (set, get) => ({
    content: null,
    isZoomed: false,
    size: undefined,
    sizeBackup: undefined,
    setZoom: (content: ReactNode | ReactNode[], size: Size) => {
      set({
        content,
        isZoomed: true,
        size,
        sizeBackup: size,
      });
    },
    setFinalSize: (size: Size) => {
      set({
        size,
      });
    },
    unset: () => {
      set({
        size: get().sizeBackup,
      });

      setTimeout(() => {
        set({
          content: null,
          isZoomed: false,
          size: undefined,
        });
      }, 300);
    },
  }),
);

export function useZoom() {
  const {
    content,
    isZoomed,
    setFinalSize,
    setZoom,
    size,
    unset,
  } = store();

  const zoomOut = () => {
    unset();

    document.body.classList.remove('overflow-hidden');
  };

  const handleOnEscape = () => {
    if (isZoomed) {
      zoomOut();
    }
  };

  const zoom = (options: ZoomOptions) => {
    if (options.ref.current === null) {
      return;
    }

    const boundingClientRect = options.ref.current.getBoundingClientRect();
    const computedStyle = {
      width: window.getComputedStyle(options.ref.current).width,
      height: window.getComputedStyle(options.ref.current).height,
    };

    setZoom(
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
    }, 100);

    document.body.classList.add('overflow-hidden');
  };

  useEvent('onEscape', () => {
    handleOnEscape();
  });

  return {
    zoomOut,
    content,
    isZoomed,
    zoom,
    size,
  };
}
