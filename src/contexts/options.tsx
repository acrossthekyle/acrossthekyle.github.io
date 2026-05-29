'use client';

import { PropsWithChildren, createContext } from 'react';

type OptionsContextType = {
  units: {
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
    type: string;
  };
};

export const OptionsContext = createContext<OptionsContextType | null>(null);

type Props = {
  units: string;
};

function getLengthMacro(units: string) {
  return units === 'imperial' ? 'miles' : 'kilometers';
};

function getLengthMicro(units: string) {
  return units === 'imperial' ? 'ft' : 'm';
};

function getWeightMacro(units: string) {
  return units === 'imperial' ? 'lbs' : 'kgs';
};

function getWeightMicro(units: string) {
  return units === 'imperial' ? 'oz' : 'g';
};

export default function OptionsProvider({
  units,
  children,
}: PropsWithChildren<Props>) {
  return (
    <OptionsContext.Provider value={{
      units: {
        labels: {
          length: {
            macro: getLengthMacro(units),
            micro: getLengthMicro(units),
          },
          weight: {
            macro: getWeightMacro(units),
            micro: getWeightMicro(units),
          },
        },
        type: units,
      },
    }}>
      {children}
    </OptionsContext.Provider>
  );
}
