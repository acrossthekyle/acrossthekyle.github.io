'use client';

import { create } from 'zustand';

import type { Gpx, Stats, Termini } from '@/types';

import { useEvent } from './useEvent';

type State = {
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
  unset: () => void;
};

const store = create<State & Actions>()(
  (set) => ({
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
    gpx,
    isOpen,
    setGpx,
    stats,
    termini,
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

  useEvent('onEscape', () => {
    closeGpx();
  });

  return {
    closeGpx,
    gpx,
    isOpen,
    openGpx,
    stats,
    termini,
  };
}
