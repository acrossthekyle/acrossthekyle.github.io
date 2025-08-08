'use client';

import { create } from 'zustand';

type State = {
  isFullscreen: boolean;
};

type Actions = {
  enterFullscreen: () => void;
  exitFullscreen: () => void;
};

const store = create<State & Actions>()(
  (set, get) => ({
    isFullscreen: false,
    enterFullscreen: () => {
      if (get().isFullscreen) {
        return;
      }

      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      }

      set({
        isFullscreen: true,
      });
    },
    exitFullscreen: () => {
      if (!get().isFullscreen) {
        return;
      }

      if (document.fullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }

      set({
        isFullscreen: false,
      });
    },
  }),
);

export function useFullscreen() {
  const { isFullscreen, enterFullscreen, exitFullscreen } = store();

  return {
    isFullscreen,
    enterFullscreen,
    exitFullscreen,
  };
}
