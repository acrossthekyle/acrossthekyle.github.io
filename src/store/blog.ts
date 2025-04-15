import { create } from 'zustand';

import type { Posts } from '@/types';

import {
  getActions,
  getData,
  getHasError,
  getIsEmpty,
  getIsLoading,
  getIsReady,
} from './abstract';

type State = {
  data: Posts.Post[];
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

        const response = await fetch('/api/posts?version=1744553405');

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

export const useBlogActions = () => useStore((state) => getActions(state));
export const useBlogData = () => useStore((state) => getData(state));
export const useBlogHasError = () => useStore((state) => getHasError(state));
export const useBlogIsEmpty = () =>
  useStore((state) => getIsEmpty(state) && state.data.length === 0);
export const useBlogIsLoading = () => useStore((state) => getIsLoading(state));
export const useBlogIsReady = () =>
  useStore((state) => getIsReady(state) && state.data.length > 0);
