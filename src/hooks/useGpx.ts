'use client';

import { create } from 'zustand';

import type { Gpx, Stats, Termini } from '@/types';

import { useEvent } from './useEvent';

type State = {
  canRenderElevation: boolean;
  gpx: Gpx;
  isOpen: boolean;
  stats: Stats;
  termini: Termini;
};

type Actions = {
  setGpx: (
    gpx: Gpx,
    stats: Stats,
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
    stats: {
      distance: null,
      gain: null,
      loss: null,
      max: null,
      time: null,
    },
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
      stats: Stats,
      termini: Termini,
    ) => {
      set({
        gpx,
        isOpen: true,
        stats,
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
          stats: {
            distance: null,
            gain: null,
            loss: null,
            max: null,
            time: null,
          },
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
    stats,
    termini,
    toggleCanRenderElevation,
    unset,
  } = store();

  const closeGpx = () => {
    unset();

    document.documentElement.classList.remove('overflow-hidden');
  };

  const openGpx = (gpx: Gpx, stats: Stats, termini: Termini) => {
    setGpx(gpx, stats, termini);

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
    stats,
    termini,
    toggleElevation,
  };
}
