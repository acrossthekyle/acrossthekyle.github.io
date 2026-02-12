'use client';

import { create } from 'zustand';

type State = {
  units: 'metric' | 'standard';
};

type Actions = {
  setUnits: (value: 'metric' | 'standard') => void;
};

const store = create<State & Actions>()(
  (set) => ({
    units: 'standard',
    setUnits: (value: 'metric' | 'standard') => {
      set({ units: value });
    },
  }),
);

export function useUnits() {
  const { units, setUnits } = store();

  const onToggleUnits = () => {
    setUnits(units === 'standard' ? 'metric' : 'standard');
  };

  return {
    onToggleUnits,
    units,
  }
}
