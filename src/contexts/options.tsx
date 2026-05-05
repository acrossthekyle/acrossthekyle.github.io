'use client';

import {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
  useCallback,
} from 'react';

type OptionsContextType = {
  color: string;
  onColor: (type: string) => void;
  onUnits: (type: string) => void;
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
  units: assumedUnits,
  children,
}: PropsWithChildren<Props>) {
  const [color, setColor] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('user-color') || 'monochrome';
    }

    return 'monochrome';
  });

  const [units, setUnits] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('user-units') || assumedUnits;
    }

    return assumedUnits;
  });

  useEffect(() => {
    localStorage.setItem('user-color', color);
    localStorage.setItem('user-units', units);
  }, [color, units]);

  const handleOnColor = useCallback((type: string) => {
    setColor(type);
  }, []);

  const handleOnUnits = useCallback((type: string) => {
    setUnits(type);
  }, []);

  return (
    <OptionsContext.Provider value={{
      color,
      onColor: handleOnColor,
      onUnits: handleOnUnits,
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
