'use client';

import { createContext, useState } from 'react';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export const GpxContext = createContext({
  hoverIndex: null,
  // eslint-disable-next-line unused-imports/no-unused-vars
  onHover: (index: number | null) => {
    // noop
  },
});

export default function Context({ children }: Props) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleOnHover = (index: number | null) => {
    setHoverIndex(index);
  };

  return (
    <GpxContext.Provider
      value={{
        hoverIndex: hoverIndex as null,
        onHover: handleOnHover,
      }}
    >
      {children}
    </GpxContext.Provider>
  );
};
