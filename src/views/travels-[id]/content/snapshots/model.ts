'use client';

import { useState } from 'react';

export function useModel() {
  const [active, setActive] = useState<number | null>(null);

  const handleOnClick = (value: number) => {
    setActive(active === value ? null : value);
  };

  return {
    active,
    handleOnClick,
  }
}
