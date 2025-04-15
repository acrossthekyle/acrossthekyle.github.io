import { create } from 'zustand';

import type { Store } from '@/types';

import {
  getActions,
  getData,
  getHasError,
  getIsEmpty,
  getIsLoading,
  getIsReady,
} from './abstract';

type State = {
  data: Store.Page.Item[];
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

        const response = await fetch('/api/store/items?version=1744553405');

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

export const useStoreActions = () => useStore((state) => getActions(state));
export const useStoreData = () => useStore((state) => getData(state));
export const useStoreHasError = () => useStore((state) => getHasError(state));
export const useStoreIsEmpty = () =>
  useStore((state) => getIsEmpty(state) && state.data.length === 0);
export const useStoreIsLoading = () => useStore((state) => getIsLoading(state));
export const useStoreIsReady = () =>
  useStore((state) => getIsReady(state) && state.data.length > 0);
