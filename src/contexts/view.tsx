'use client';

import { PropsWithChildren, createContext, useState, useCallback } from 'react';

type ViewContextType = {
  current: string;
  onChange: (view: string) => void;
};

export const ViewContext = createContext<ViewContextType | null>(null);

export default function ViewProvider({ children }: PropsWithChildren) {
  const [current, setCurrent] = useState('albums');

  const handleOnChange = useCallback((view: string) => {
    setCurrent(view);
  }, []);

  return (
    <ViewContext.Provider value={{
      current,
      onChange: handleOnChange,
    }}>
      {children}
    </ViewContext.Provider>
  );
}
