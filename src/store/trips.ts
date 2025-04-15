import { create } from 'zustand';

import type { Components } from '@/types';

import {
  getActions,
  getData,
  getHasError,
  getIsEmpty,
  getIsLoading,
  getIsReady,
} from './abstract';

type State = {
  data: Components.Marker[];
  didFail: boolean;
  isLoading: boolean;
};

type Actions = {
  actions: {
    get: () => Promise<void>;
  };
};

const useStore = create<State & Actions>((set, get) => ({
  data: [],
  didFail: false,
  isLoading: false,
  actions: {
    get: async () => {
      if (get().data.length === 0) {
        set({ isLoading: true });

        const response = await fetch('/api/trips?version=1744553405');

        if (!response.ok) {
          set({ didFail: true, isLoading: false, data: [] });
        } else {
          set({
            didFail: false,
            isLoading: false,
            data: await response.json(),
          });
        }
      }
    },
  },
}));

export const useTripsActions = () => useStore((state) => getActions(state));
export const useTripsData = () => useStore((state) => getData(state));
export const useTripsHasError = () => useStore((state) => getHasError(state));
export const useTripsIsEmpty = () =>
  useStore((state) => getIsEmpty(state) && state.data.length === 0);
export const useTripsIsLoading = () => useStore((state) => getIsLoading(state));
export const useTripsIsReady = () =>
  useStore((state) => getIsReady(state) && state.data.length > 0);
