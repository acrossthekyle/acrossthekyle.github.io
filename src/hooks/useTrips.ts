import { create } from 'zustand';

import type { Trip } from '@/types';

type State = {
  hasError: boolean;
  isLoading: boolean;
  trips: Trip[];
};

type Actions = {
  fetch: () => void;
  find: (slug: string) => void;
};

const store = create<State & Actions>()(
  (set, get) => ({
    hasError: false,
    isLoading: true,
    trips: [],
    fetch: async () => {
      if (get().trips.length) {
        return [];
      }

      const response = await fetch('/api/trips');

      if (!response.ok) {
        set({
          hasError: true,
          isLoading: false,
          trips: [],
        });

        return [];
      }

      const trips = await response.json();

      set({
        hasError: false,
        isLoading: false,
        trips,
      });

      return trips;
    },
    find: async (slug: string) => {
      let trips = get().trips;

      if (trips.length === 0) {
        trips = await get().fetch();
      }

      return trips.find(trip => trip.slug === slug);
    },
  }),
);

export function useTrips() {
  const { fetch, find, isLoading, trips } = store();

  return {
    fetch,
    find,
    isLoading,
    trips,
  };
}
