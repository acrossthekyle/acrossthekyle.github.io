'use client';

import { create } from 'zustand';

import type { Termini } from '@/types';

import { useEvent } from './useEvent';

type State = {
  elevation: string[] | null;
  isOpen: boolean;
  route: number[][] | null;
  termini: Termini;
};

type Actions = {
  setGpx: (
    elevation: string[] | null,
    route: number[][] | null,
    termini: Termini,
  ) => void;
  unset: () => void;
};

const store = create<State & Actions>()(
  (set) => ({
    elevation: null,
    isOpen: false,
    route: null,
    termini: {
      end: [],
      isSame: false,
      start: [],
    },
    setGpx: (
      elevation: string[] | null,
      route: number[][] | null,
      termini: Termini,
    ) => {
      set({
        elevation,
        isOpen: true,
        route,
        termini,
      });
    },
    unset: () => {
      set({ isOpen: false });

      setTimeout(() => {
        set({
          elevation: null,
          route: null,
          termini: {
            end: [],
            isSame: false,
            start: [],
          },
        });
      }, 250);
    },
  }),
);

export function useGpx() {
  const {
    elevation,
    isOpen,
    route,
    setGpx,
    termini,
    unset,
  } = store();

  const closeGpx = () => {
    unset();

    document.documentElement.classList.remove('overflow-hidden');
  };

  const openGpx = (
    elevation: string[] | null,
    route: number[][] | null,
    termini: Termini,
  ) => {
    setGpx(
      elevation,
      route,
      termini,
    );

    document.documentElement.classList.add('overflow-hidden');
  };

  useEvent('onEscape', () => {
    closeGpx();
  });

  return {
    closeGpx,
    elevation,
    isOpen,
    openGpx,
    route,
    termini,
  };
}
