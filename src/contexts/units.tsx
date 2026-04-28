'use client';

import {
  PropsWithChildren,
  createContext,
  useState,
  useCallback,
} from 'react';

type UnitsContextType = {
  units: string;
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
  onUnits: (data: string) => void;
};

export const UnitsContext = createContext<UnitsContextType | null>(null);

type Props = {
  assumed: string;
};

export default function UnitsProvider({
  assumed,
  children,
}: PropsWithChildren<Props>) {
  const [units, setUnits] = useState(assumed);

  const handleOnChange = useCallback((data: string) => {
    setUnits(data);
  }, []);

  return (
    <UnitsContext.Provider value={{
      labels: {
        length: {
          macro: units === 'imperial' ? 'miles' : 'kilometers',
          micro: units === 'imperial' ? 'ft' : 'm',
        },
        weight: {
          macro: units === 'imperial' ? 'lbs' : 'kgs',
          micro: units === 'imperial' ? 'oz' : 'g',
        },
      },
      onUnits: handleOnChange,
      units,
    }}>
      {children}
    </UnitsContext.Provider>
  );
}
