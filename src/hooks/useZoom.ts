'use client';

import { create } from 'zustand';

import { useEvent } from './useEvent';

type State = {
  isActive: boolean;
  isLandscapeOrientation: boolean;
  isReady: boolean;
  src: string | null;
};

type Actions = {
  setLoaded: () => void
  setZoom: (src: string, isLandscapeOrientation: boolean) => void;
  unsetZoom: () => void;
};

const store = create<State & Actions>()(
  (set) => ({
    isActive: false,
    isLandscapeOrientation: false,
    isReady: false,
    src: null,
    setLoaded: () => {
      set({
        isReady: true,
      });
    },
    setZoom: (source: string, isLandscapeOrientation: boolean) => {
      set({
        isActive: true,
        isLandscapeOrientation,
        src: source,
      });
    },
    unsetZoom: () => {
      set({
        isActive: false,
        isReady: false,
      });

      setTimeout(() => {
        set({
          src: null,
        });
      }, 250);
    },
  }),
);

export function useZoom() {
  const {
    isActive,
    isLandscapeOrientation,
    isReady,
    setLoaded,
    setZoom,
    src,
    unsetZoom,
  } = store();

  const zoomOut = () => {
    unsetZoom();

    document.documentElement.classList.remove('overflow-hidden');
  };

  const zoom = (source: string, isLandscapeOrientation: boolean) => {
    setZoom(source, isLandscapeOrientation);

    document.documentElement.classList.add('overflow-hidden');
  };

  const handleOnLoad = () => {
    setLoaded();
  };

  useEvent('onEscape', () => {
    if (isActive) {
      zoomOut();
    }
  });

  return {
    handleOnLoad,
    isActive,
    isLandscapeOrientation,
    isReady,
    src,
    zoom,
    zoomOut,
  };
}
