'use client';

import { PropsWithChildren, createContext, useState } from 'react';

type ViewContextType = {
  onView: (value: string) => void;
  view: string;
};

export const ViewContext = createContext<ViewContextType | null>(null);

export default function ViewProvider({ children }: PropsWithChildren) {
  const [view, setView] = useState('theater');

  const handleOnView = (value: string) => {
    setView(value);
  };

  return (
    <ViewContext.Provider
      value={{
        onView: handleOnView,
        view,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
}
