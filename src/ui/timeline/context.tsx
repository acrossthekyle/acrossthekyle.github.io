'use client';

import { createContext, useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  total?: number;
};

const PRE_REVEAL = 6;

export const TimelineContext = createContext({
  isToggled: false,
  shouldTruncate: true,
  visibleCount: PRE_REVEAL,
  onToggle: () => {
    // noop
  },
  truncate: () => {
    // noop
  },
});

export default function Context({ children, total = 0 }: Props) {
  const [isToggled, setIsToggled] = useState(false);
  const [shouldTruncate, setShouldTruncate] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PRE_REVEAL);

  useEffect(() => {
    if (visibleCount >= total) {
      // necessary for UX
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsToggled(previous => !previous);
    }
  }, [setIsToggled, total, visibleCount]);

  const handleOnTruncate = () => {
    setShouldTruncate(true);
  };

  const handleOnToggle = () => {
    if (visibleCount >= total) {
      setIsToggled(false);
      setVisibleCount(PRE_REVEAL);
    } else {
      setVisibleCount(previous => previous + PRE_REVEAL);
    }
  };

  return (
    <TimelineContext.Provider
      value={{
        isToggled,
        shouldTruncate,
        onToggle: handleOnToggle,
        truncate: handleOnTruncate,
        visibleCount,
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
};
