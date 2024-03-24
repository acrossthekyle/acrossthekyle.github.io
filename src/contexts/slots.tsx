'use client'

import { createContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export const SlotsContext = createContext({
  slotIndex: 0,
  setSlotIndex: (slotIndex: number) => {},
});

export function SlotsProvider({ children }: Props) {
  const [slotIndex, setSlotIndex] = useState(0)

  return (
    <SlotsContext.Provider
    	value={{ slotIndex, setSlotIndex }}
    >
      {children}
    </SlotsContext.Provider>
  );
}
