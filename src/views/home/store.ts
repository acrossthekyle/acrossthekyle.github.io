import { create } from 'zustand';

import type { Trip } from '@/types';

type State = {
  hasError: boolean;
  isLoading: boolean;
  trips: Trip[];
};

type Actions = {
  fetch: () => void;
};

export const useStore = create<State & Actions>()(
  (set, get) => ({
    hasError: false,
    isLoading: true,
    trips: [],
    fetch: async () => {
      if (get().trips.length) {
        return;
      }

      const response = await fetch('/api/trips');

      if (!response.ok) {
        set({
          hasError: true,
          isLoading: false,
          trips: [],
        });

        return;
      }

      const trips = await response.json();

      set({
        hasError: false,
        isLoading: false,
        trips,
      });
    },
  }),
);
