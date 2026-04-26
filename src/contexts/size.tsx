'use client';

import { PropsWithChildren, createContext, useState, useCallback } from 'react';

type SizeContextType = {
  onSize: (value?: string) => void;
  size: string;
};

export const SizeContext = createContext<SizeContextType | null>(null);

export default function SizeProvider({ children }: PropsWithChildren) {
  const [size, setSize] = useState('preview');

  const handleOnChange = useCallback((value?: string) => {
    if (value === 'reset') {
      setSize('preview');

      return;
    }

    setSize(previous => previous === 'preview' ? 'full' : 'preview');
  }, []);

  return (
    <SizeContext.Provider value={{
      onSize: handleOnChange,
      size,
    }}>
      {children}
    </SizeContext.Provider>
  );
}
