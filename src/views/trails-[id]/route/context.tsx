'use client';

import { createContext, useState } from 'react';

export const GpxContext = createContext({
  activeIndex: 0,
  hoverIndex: null,
  // eslint-disable-next-line unused-imports/no-unused-vars
  onClick: (index: number) => {
    // noop
  },
  // eslint-disable-next-line unused-imports/no-unused-vars
  onHover: (index: number | null) => {
    // noop
  },
});

export default function Context({ children }: React.PropsWithChildren) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleOnClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleOnHover = (index: number | null) => {
    setHoverIndex(index);
  };

  return (
    <GpxContext.Provider
      value={{
        activeIndex: activeIndex,
        hoverIndex: hoverIndex as null,
        onClick: handleOnClick,
        onHover: handleOnHover,
      }}
    >
      {children}
    </GpxContext.Provider>
  );
};
