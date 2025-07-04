import { create } from 'zustand';

import { Overlay, View } from '@/types';

type State = {
  overlay: Overlay;
  view: View;
};

type Actions = {
  shift: (view: View | Overlay) => void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isOverlayEnum(value: any): value is Overlay {
  return Object.values(Overlay).includes(value as Overlay);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isViewEnum(value: any): value is View {
  return Object.values(View).includes(value as View);
}

const store = create<State & Actions>()(
  (set) => ({
    overlay: Overlay.None,
    view: View.ImageOverMap,
    shift: (view: View | Overlay) => {
      if (isOverlayEnum(view)) {
        set({
          overlay: view,
        });
      } else if (isViewEnum(view)) {
        set({
          view,
        });
      }
    },
  }),
);

export function useView() {
  const { overlay, shift, view } = store();

  return {
    overlay,
    shift,
    view,
  };
}
