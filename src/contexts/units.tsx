'use client';

import { PropsWithChildren, createContext, useState, useCallback } from 'react';

type UnitsContextType = {
  current: string;
  labels: {
    length: {
      macro: string;
      micro: string;
    };
    weight: {
      macro: string;
      micro: string;
    };
  };
  onChange: (data: string) => void;
};

export const UnitsContext = createContext<UnitsContextType | null>(null);

type Props = {
  current: string;
};

export default function UnitsProvider({
  children,
  current,
}: PropsWithChildren<Props>) {
  const [value, setValue] = useState(current);

  const handleOnChange = useCallback((data: string) => {
    setValue(data);
  }, []);

  return (
    <UnitsContext.Provider value={{
      current: value,
      labels: {
        length: {
          macro: value === 'imperial' ? 'miles' : 'kilometers',
          micro: value === 'imperial' ? 'ft' : 'm',
        },
        weight: {
          macro: value === 'imperial' ? 'lbs' : 'kgs',
          micro: value === 'imperial' ? 'oz' : 'g',
        },
      },
      onChange: handleOnChange,
    }}>
      {children}
    </UnitsContext.Provider>
  );
}
