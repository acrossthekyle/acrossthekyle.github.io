'use client';

import { create } from 'zustand';

import { useEvent } from './useEvent';

type ZoomOptions = {
  content: React.ReactNode | React.ReactNode[];
  ref: React.RefObject<HTMLButtonElement | null>;
};

type Size = {
  top: number;
  left: number;
  height: string;
  width: string;
};

type State = {
  canBlur: boolean;
  content: React.ReactNode | React.ReactNode[] | null;
  isZoomed: boolean;
  size?: Size;
  sizeBackup?: Size;
};

type Actions = {
  setFinalSize: (size: Size) => void;
  setZoom: (content: React.ReactNode | React.ReactNode[], size: Size) => void;
  unset: () => void;
};

const store = create<State & Actions>()(
  (set, get) => ({
    canBlur: false,
    content: null,
    isZoomed: false,
    size: undefined,
    sizeBackup: undefined,
    setZoom: (content: React.ReactNode | React.ReactNode[], size: Size) => {
      set({
        canBlur: true,
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
        canBlur: false,
        size: get().sizeBackup,
      });

      setTimeout(() => {
        set({
          content: null,
          isZoomed: false,
          size: undefined,
        });
      }, 500);
    },
  }),
);

export function useZoom() {
  const {
    canBlur,
    content,
    isZoomed,
    setFinalSize,
    setZoom,
    size,
    unset,
  } = store();

  const zoomOut = () => {
    unset();

    document.documentElement.classList.remove('overflow-hidden');
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
        height: 'calc(100vh - 48px)',
        width: 'calc(100vw - 48px)',
        top: 24,
        left: 24,
      });
    }, 100);

    document.documentElement.classList.add('overflow-hidden');
  };

  useEvent('onEscape', () => {
    handleOnEscape();
  });

  return {
    canBlur,
    content,
    isZoomed,
    size,
    zoom,
    zoomOut,
  };
}
