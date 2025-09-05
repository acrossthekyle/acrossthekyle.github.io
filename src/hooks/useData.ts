'use client';

import { create } from 'zustand';

import type { Data } from '@/types';

type ModifiedData = Data & {
  isReady: boolean;
};

type State = {
  hasError: boolean;
  isLoading: boolean;
  item?: ModifiedData;
  items: ModifiedData[];
};

type Actions = {
  all: () => Promise<void>;
  find: (slug: string) => Promise<void>;
};

const store = create<State & Actions>()(
  (set, get) => ({
    hasError: false,
    isLoading: true,
    item: undefined,
    items: [],
    all: async () => {
      if (get().items.length) {
        return;
      }

      const response = await fetch('/api/data');

      if (!response.ok) {
        set({
          hasError: true,
          isLoading: false,
          items: [],
        });

        return;
      }

      const items = await response.json();

      set({
        hasError: false,
        isLoading: false,
        items: items.map((data: Data) => ({
          ...data,
          isReady: false,
        })),
      });
    },
    find: async (slug: string) => {
      set({ item: undefined });

      if (get().items.length === 0) {
        await get().all();
      }

      const items = get().items;

      const found = items.find(item => item.slug === slug);

      if (!found) {
        return;
      }

      if (found.isReady) {
        set({ item: found });

        return;
      }

      const response = await fetch(`/api/data/${found.slug.toLowerCase()}`);

      if (!response.ok) {
        set({ item: undefined });

        return;
      }

      const json = await response.json();

      set({
        item: json,
        items: items.map((data: ModifiedData) => {
          if (data.slug.toLowerCase() === json.slug.toLowerCase()) {
            return {
              ...json,
              isReady: true,
            };
          }

          return data;
        }),
      });
    },
  }),
);

export function useData() {
  const { all, find, isLoading, item, items } = store();

  return {
    all,
    find,
    isLoading,
    item,
    items,
  };
}
