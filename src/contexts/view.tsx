'use client';

import { PropsWithChildren, createContext, useState, useCallback } from 'react';

type ViewContextType = {
  onView: (value: string) => void;
  view: string;
};

export const ViewContext = createContext<ViewContextType | null>(null);

export default function ViewProvider({ children }: PropsWithChildren) {
  const [view, setView] = useState('collections');

  const handleOnChange = useCallback((value: string) => {
    setView(value);

    window.scrollTo(0, 0);
  }, []);

  return (
    <ViewContext.Provider value={{
      onView: handleOnChange,
      view,
    }}>
      {children}
    </ViewContext.Provider>
  );
}
