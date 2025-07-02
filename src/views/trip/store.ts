import { create } from 'zustand';

import { type Trip } from './types';

type State = {
  hasError: boolean;
  isLoading: boolean;
  trip: Trip | null;
};

type Actions = {
  fetch: (id: string) => void;
  erase: () => void;
};

export const useStore = create<State & Actions>()(
  (set) => ({
    hasError: false,
    isLoading: true,
    trip: null,
    erase: () => {
      set({
        hasError: false,
        isLoading: true,
        trip: null,
      });
    },
    fetch: async (id: string) => {
      const response = await fetch(`/api/trips/${id}`);

      if (!response.ok) {
        set({
          hasError: true,
          isLoading: false,
          trip: null,
        });

        return;
      }

      const trip = await response.json();

      set({
        hasError: false,
        isLoading: false,
        trip,
      });
    },
  }),
);
