import { create } from 'zustand';

import { View } from './types';

type State = {
  view: number;
};

type Actions = {
  resize: (view: View) => void;
};

const store = create<State & Actions>()(
  (set) => ({
    view: View.ImageOverMap,
    resize: (view: View) => {
      set({
        view,
      });
    },
  }),
);

export function useView() {
  const { resize, view } = store();

  return {
    resize,
    view,
  };
}
