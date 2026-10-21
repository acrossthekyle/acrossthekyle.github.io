'use client';

import { useEffect, useState } from 'react';

export function useModel() {
  const [active, setActive] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (expanded !== null) {
          setExpanded(null);
        } else if (active !== null) {
          setActive(null);
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [active, expanded]);

  const handleOnClick = (value: number) => {
    setTimeout(() => {
      setActive(previous => previous === value ? null : value);
    }, 100);
  };

  const handleOnExpand = (value: number) => {
    setExpanded(previous => (previous === value ? null : value));
  };

  return {
    active,
    expanded,
    handleOnClick,
    handleOnExpand,
  }
}
