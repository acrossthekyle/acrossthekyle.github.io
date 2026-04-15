'use client';

import { createContext, useState } from 'react';

export const GpxContext = createContext({
  elevationIndex: null,
  stageIndex: null,
  // eslint-disable-next-line unused-imports/no-unused-vars
  onElevationHover: (index: number | null) => {
    // noop
  },
  // eslint-disable-next-line unused-imports/no-unused-vars
  onStageHover: (index: number | null) => {
    // noop
  },
});

export default function Context({ children }: React.PropsWithChildren) {
  const [elevationIndex, setElevationIndex] = useState<number | null>(null);
  const [stageIndex, setStageIndex] = useState<number | null>(null);

  const handleOnElevationHover = (index: number | null) => {
    setElevationIndex(index);
  };

  const handleOnStageHover = (index: number | null) => {
    setStageIndex(index);
  };

  return (
    <GpxContext.Provider
      value={{
        stageIndex: stageIndex as null,
        elevationIndex: elevationIndex as null,
        onStageHover: handleOnStageHover,
        onElevationHover: handleOnElevationHover,
      }}
    >
      {children}
    </GpxContext.Provider>
  );
};
