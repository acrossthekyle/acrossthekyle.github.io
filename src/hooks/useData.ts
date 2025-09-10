'use client';

import { create } from 'zustand';

import type { Data } from '@/types';

type ModifiedData = Data & {
  isReady: boolean;
};

type State = {
  hasError: boolean;
  isLoading: boolean;
  isMissing: boolean;
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
    isMissing: false,
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
          isMissing: false,
          items: [],
        });

        return;
      }

      const items = await response.json();

      set({
        hasError: false,
        isLoading: false,
        isMissing: false,
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
        set({ isMissing: true });

        return;
      }

      if (found.isReady) {
        set({ isMissing: false, item: found });

        return;
      }

      const response = await fetch(`/api/data/${found.slug.toLowerCase()}`);

      if (!response.ok) {
        set({ isMissing: true, item: undefined });

        return;
      }

      const json = await response.json();

      set({
        isMissing: false,
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
  const { all, find, isLoading, isMissing, item, items } = store();

  return {
    all,
    find,
    isLoading,
    isMissing,
    item,
    items,
  };
}
