'use client'

import { createContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export enum TripsMode {
	List = 'List',
	Gallery = 'Gallery',
};

export const TripsContext = createContext({
  mode: TripsMode.List,
  toggleMode: () => {}
});

export function TripsProvider({ children }: Props) {
  const [mode, setMode] = useState<TripsMode>(TripsMode.List);

  const toggleMode = () => {
  	setMode(mode === TripsMode.List ? TripsMode.Gallery : TripsMode.List);
  };

  return (
    <TripsContext.Provider value={{ mode, toggleMode }}>
      {children}
    </TripsContext.Provider>
  );
}
