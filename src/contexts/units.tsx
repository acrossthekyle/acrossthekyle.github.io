'use client'

import { createContext } from 'react';

import { setUnits } from '@/app/actions';

export const UnitsContext = createContext({
  current: 'imperial',
  labels: {
    length: {
      macro: 'miles',
      micro: 'ft',
    },
    weight: {
      macro: 'lbs',
      micro: 'g',
    },
  },
  onToggle: () => {},
});

type Props = {
  current: string;
};

export const UnitsProvider = ({
  children,
  current,
}: React.PropsWithChildren<Props>) => {
  const handleOnToggle = () => {
    setUnits(current === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <UnitsContext.Provider value={{
      current,
      labels: {
        length: {
          macro: current === 'imperial' ? 'miles' : 'kilometers',
          micro: current === 'imperial' ? 'ft' : 'm',
        },
        weight: {
          macro: current === 'imperial' ? 'lbs' : 'kgs',
          micro: current === 'imperial' ? 'oz' : 'g',
        },
      },
      onToggle: handleOnToggle,
    }}>
      {children}
    </UnitsContext.Provider>
  );
};
