'use client';

import { create } from 'zustand';

type State = {
  stack: string[];
};

type Actions = {
  addStack: (identifier: string) => void;
  removeStack: () => void;
};

const store = create<State & Actions>()(
  (set, get) => ({
    stack: [],
    addStack: (identifier: string) => {
      const currentStack = get().stack;

      if (currentStack.indexOf(identifier) === -1) {
        set({
          stack: [
            ...currentStack,
            identifier,
          ],
        });
      }
    },
    removeStack: () => {
      set({
        stack: get().stack.slice(0, -1),
      });
    },
  }),
);

export function useStack() {
  const { addStack, removeStack, stack } = store();

  return {
    removeStack,
    addStack,
    stack,
  };
}
