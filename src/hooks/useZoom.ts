'use client';

import { create } from 'zustand';

import { useEvent } from './useEvent';

type ZoomOptions = {
  caption?: string;
  content: React.ReactNode | React.ReactNode[];
  isLandscapeOrientation: boolean;
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
  caption?: string;
  content: React.ReactNode | React.ReactNode[] | null;
  isLandscapeOrientation: boolean;
  isZoomed: boolean;
  isZooming: boolean;
  size?: Size;
  sizeBackup?: Size;
};

type Actions = {
  setFinalSize: (size: Size) => void;
  setZoom: (
    content: React.ReactNode | React.ReactNode[],
    size: Size,
    isLandscapeOrientation: boolean,
    caption?: string,
  ) => void;
  unset: () => void;
};

const store = create<State & Actions>()(
  (set, get) => ({
    canBlur: false,
    caption: undefined,
    content: null,
    isLandscapeOrientation: false,
    isZoomed: false,
    isZooming: false,
    size: undefined,
    sizeBackup: undefined,
    setZoom: (
      content: React.ReactNode | React.ReactNode[],
      size: Size,
      isLandscapeOrientation: boolean,
      caption?: string,
    ) => {
      set({
        canBlur: true,
        caption,
        content,
        isLandscapeOrientation,
        isZoomed: false,
        isZooming: true,
        size,
        sizeBackup: size,
      });
    },
    setFinalSize: (size: Size) => {
      set({
        isZoomed: true,
        size,
      });
    },
    unset: () => {
      set({
        canBlur: false,
        isZoomed: false,
        size: get().sizeBackup,
      });

      setTimeout(() => {
        set({
          caption: undefined,
          content: null,
          isZooming: false,
          size: undefined,
        });
      }, 250);
    },
  }),
);

export function useZoom() {
  const {
    canBlur,
    caption,
    content,
    isLandscapeOrientation,
    isZoomed,
    isZooming,
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
      },
      options.isLandscapeOrientation,
      options.caption,
    );

    setTimeout(() => {
      setFinalSize({
        height: 'calc(100vh - 48px)',
        width: 'calc(100vw - 48px)',
        top: 24,
        left: 24,
      });
    }, 200);

    document.documentElement.classList.add('overflow-hidden');
  };

  useEvent('onEscape', () => {
    handleOnEscape();
  });

  return {
    canBlur,
    caption,
    content,
    isLandscapeOrientation,
    isZoomed,
    isZooming,
    size,
    zoom,
    zoomOut,
  };
}
