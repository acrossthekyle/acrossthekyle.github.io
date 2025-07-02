import { create } from 'zustand';

import { type Marker } from './types';

type State = {
  markers: Marker[];
};

type Actions = {
  fetch: () => void;
};

export const useStore = create<State & Actions>()(
  (set, get) => ({
    markers: [],
    fetch: async () => {
      if (get().markers.length) {
        return;
      }

      const response = await fetch('/api/world');

      if (!response.ok) {
        set({
          markers: [],
        });

        return;
      }

      const markers = await response.json();

      set({
        markers,
      });
    },
  }),
);
