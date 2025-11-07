'use client';

import { create } from 'zustand';

import type { Gpx, Termini } from '@/types';

import { useEvent } from './useEvent';

type State = {
  canRenderElevation: boolean;
  gpx: Gpx;
  isOpen: boolean;
  termini: Termini;
};

type Actions = {
  setGpx: (
    gpx: Gpx,
    termini: Termini,
  ) => void;
  toggleCanRenderElevation: () => void;
  unset: () => void;
};

const store = create<State & Actions>()(
  (set, get) => ({
    canRenderElevation: false,
    gpx: [],
    isOpen: false,
    termini: {
      end: {
        position: null,
        words: [],
      },
      isSame: false,
      start: {
        position: null,
        words: [],
      },
    },
    setGpx: (
      gpx: Gpx,
      termini: Termini,
    ) => {
      set({
        gpx,
        isOpen: true,
        termini,
      });
    },
    toggleCanRenderElevation: () => {
      set({ canRenderElevation: !get().canRenderElevation });
    },
    unset: () => {
      set({ isOpen: false });

      setTimeout(() => {
        set({
          gpx: [],
          termini: {
            end: {
              position: null,
              words: [],
            },
            isSame: false,
            start: {
              position: null,
              words: [],
            },
          },
        });
      }, 250);
    },
  }),
);

export function useGpx() {
  const {
    canRenderElevation,
    gpx,
    isOpen,
    setGpx,
    termini,
    toggleCanRenderElevation,
    unset,
  } = store();

  const closeGpx = () => {
    unset();

    document.documentElement.classList.remove('overflow-hidden');
  };

  const openGpx = (gpx: Gpx, termini: Termini) => {
    setGpx(gpx, termini);

    document.documentElement.classList.add('overflow-hidden');
  };

  const toggleElevation = () => {
    toggleCanRenderElevation();
  };

  useEvent('onEscape', () => {
    closeGpx();
  });

  return {
    canRenderElevation,
    closeGpx,
    gpx,
    isOpen,
    openGpx,
    termini,
    toggleElevation,
  };
}
