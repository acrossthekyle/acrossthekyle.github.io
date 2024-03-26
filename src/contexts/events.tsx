'use client'

import { createContext, useEffect, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export const EventsContext = createContext({
  fireEvent: (event: any) => {},
  registerEventListener: (listener: (event: any) => void) => {},
});

export function EventsProvider({ children }: Props) {
  const eventListener = useRef();

  const fireEvent = (event: any) => {
    eventListener.current?.(event);
  };

  const registerEventListener = (listener: (event: any) => void) => {
    eventListener.current = listener;
  };

  return (
    <EventsContext.Provider
    	value={{ fireEvent, registerEventListener }}
    >
      {children}
    </EventsContext.Provider>
  );
}
