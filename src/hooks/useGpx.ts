'use client';

import { create } from 'zustand';

import type { Termini } from '@/types';

import { useEvent } from './useEvent';

type State = {
  canRenderElevation: boolean;
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
  toggleCanRenderElevation: () => void;
  unset: () => void;
};

const store = create<State & Actions>()(
  (set, get) => ({
    canRenderElevation: false,
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
    toggleCanRenderElevation: () => {
      set({ canRenderElevation: !get().canRenderElevation });
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
    canRenderElevation,
    elevation,
    isOpen,
    route,
    setGpx,
    termini,
    toggleCanRenderElevation,
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

  const toggleElevation = () => {
    toggleCanRenderElevation();
  };

  useEvent('onEscape', () => {
    closeGpx();
  });

  return {
    canRenderElevation,
    closeGpx,
    elevation,
    isOpen,
    openGpx,
    route,
    termini,
    toggleElevation,
  };
}
