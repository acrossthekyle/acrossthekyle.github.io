'use client';

import { create } from 'zustand';

import type { Travel } from '@/types';

type Data = Travel & {
  isReady: boolean;
};

type State = {
  hasError: boolean;
  isLoading: boolean;
  travel?: Travel;
  travels: Data[];
};

type Actions = {
  all: () => Promise<void>;
  find: (slug: string) => Promise<void>;
};

const store = create<State & Actions>()(
  (set, get) => ({
    hasError: false,
    isLoading: true,
    travel: undefined,
    travels: [],
    all: async () => {
      if (get().travels.length) {
        return;
      }

      const response = await fetch('/api/travels');

      if (!response.ok) {
        set({
          hasError: true,
          isLoading: false,
          travels: [],
        });

        return;
      }

      const travels = await response.json();

      set({
        hasError: false,
        isLoading: false,
        travels: travels.map((travel: Travel) => ({
          ...travel,
          isReady: false,
        })),
      });
    },
    find: async (slug: string) => {
      set({ travel: undefined });

      if (get().travels.length === 0) {
        await get().all();
      }

      const data = get().travels;

      const found = data.find(item => item.slug === slug);

      if (!found) {
        return;
      }

      if (found.isReady) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { isReady, ...travel } = found;

        set({ travel });

        return;
      }

      const response = await fetch(`/api/travels/${found.slug.toLowerCase()}`);

      if (!response.ok) {
        set({ travel: undefined });

        return;
      }

      const json = await response.json();

      set({
        travel: json,
        travels: data.map((item: Data) => {
          if (item.slug.toLowerCase() === json.slug.toLowerCase()) {
            return {
              ...json,
              isReady: true,
            };
          }

          return item;
        }),
      });
    },
  }),
);

export function useTravels() {
  const { all, find, isLoading, travel, travels } = store();

  return {
    all,
    find,
    isLoading,
    travel,
    travels,
  };
}
