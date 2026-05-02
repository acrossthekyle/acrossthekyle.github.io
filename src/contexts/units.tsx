'use client';

import {
  PropsWithChildren,
  createContext,
} from 'react';

type UnitsContextType = {
  assumed: {
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
    units: string;
  };
  opposite: {
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
    units: string;
  };
};

export const UnitsContext = createContext<UnitsContextType | null>(null);

type Props = {
  assumed: string;
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

export default function UnitsProvider({
  assumed,
  children,
}: PropsWithChildren<Props>) {
  const opposite = assumed === 'metric' ? 'imperial' : 'metric';

  return (
    <UnitsContext.Provider value={{
      assumed: {
        labels: {
          length: {
            macro: getLengthMacro(assumed),
            micro: getLengthMicro(assumed),
          },
          weight: {
            macro: getWeightMacro(assumed),
            micro: getWeightMicro(assumed),
          },
        },
        units: assumed,
      },
      opposite: {
        labels: {
          length: {
            macro: getLengthMacro(opposite),
            micro: getLengthMicro(opposite),
          },
          weight: {
            macro: getWeightMacro(opposite),
            micro: getWeightMicro(opposite),
          },
        },
        units: opposite,
      },
    }}>
      {children}
    </UnitsContext.Provider>
  );
}
