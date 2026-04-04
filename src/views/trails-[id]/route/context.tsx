'use client';

import { createContext, useState } from 'react';

export const GpxContext = createContext({
  activeIndex: 0,
  hoverIndex: null,
  isToggled: false,
  // eslint-disable-next-line unused-imports/no-unused-vars
  onClick: (index: number) => {
    // noop
  },
  // eslint-disable-next-line unused-imports/no-unused-vars
  onHover: (index: number | null) => {
    // noop
  },
  onToggle: () => {
    // noop
  },
});

export default function Context({ children }: React.PropsWithChildren) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isToggled, setIsToggled] = useState(false);

  const handleOnClick = (index: number) => {
    setActiveIndex(index);

    if (isToggled) {
      setIsToggled(false);
    }
  };

  const handleOnHover = (index: number | null) => {
    setHoverIndex(index);
  };

  const handleOnToggle = () => {
    setIsToggled(previous => !previous);
  };

  return (
    <GpxContext.Provider
      value={{
        activeIndex,
        hoverIndex: hoverIndex as null,
        isToggled,
        onClick: handleOnClick,
        onHover: handleOnHover,
        onToggle: handleOnToggle,
      }}
    >
      {children}
    </GpxContext.Provider>
  );
};
