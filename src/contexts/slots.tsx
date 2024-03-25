'use client'

import { createContext, useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export const SlotsContext = createContext({
  fireSlotEventListener: (event: any) => {},
  registerSlotEventListener: (listener: (event: any) => void) => {},
  slotIndex: 0,
  setSlotIndex: (slotIndex: number) => {},
});

export function SlotsProvider({ children }: Props) {
  const [slotIndex, setSlotIndex] = useState(0);

  const slotEventListener = useRef();

  const fireSlotEventListener = (event: any) => {
    slotEventListener.current?.(event);
  };

  const registerSlotEventListener = (listener: (event: any) => void) => {
    slotEventListener.current = listener;
  };

  return (
    <SlotsContext.Provider
    	value={{ fireSlotEventListener, registerSlotEventListener, slotIndex, setSlotIndex }}
    >
      {children}
    </SlotsContext.Provider>
  );
}
