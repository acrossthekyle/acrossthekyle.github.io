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
  didFail: boolean;
  isLoading: boolean;
  recents: Pick<Posts.Post, 'date' | 'image' | 'title' | 'uri'>[];
  tags: string[];
};

type Actions = {
  actions: {
    get: () => Promise<void>;
  };
};

const useStore = create<State & Actions>((set, get) => ({
  didFail: false,
  isLoading: false,
  recents: [],
  tags: [],
  actions: {
    get: async () => {
      if (get().tags.length === 0 && get().recents.length === 0) {
        set({ isLoading: true });

        const tags = await fetch('/api/tags?version=j9IjYokIcp');
        const recents = await fetch('/api/posts/recent?version=SCeFalGX9g');

        if (!tags.ok || !recents.ok) {
          set({ didFail: true, isLoading: false, recents: [], tags: [] });
        } else {
          set({
            didFail: false,
            isLoading: false,
            recents: await recents.json(),
            tags: await tags.json(),
          });
        }
      }
    },
  },
}));

export const useFooterActions = () => useStore((state) => getActions(state));
export const useFooterHasError = () => useStore((state) => getHasError(state));
export const useFooterIsLoading = () =>
  useStore((state) => getIsLoading(state));
export const useFooterIsReady = () =>
  useStore(
    (state) =>
      getIsReady(state) && state.tags.length > 0 && state.recents.length > 0,
  );
export const useFooterRecentsData = () => useStore((state) => state.recents);
export const useFooterTagsData = () => useStore((state) => state.tags);
