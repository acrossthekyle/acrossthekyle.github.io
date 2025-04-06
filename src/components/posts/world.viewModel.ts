'use client';

import { useCallback, useState } from 'react';

type Return = {
  handleOnInView: (isInView: boolean) => void;
  hasEnteredView: boolean;
};

export const useViewModel = (): Return => {
  const [hasEnteredView, setHasEnteredView] = useState(false);

  const handleOnInView = useCallback(
    (isInView: boolean) => {
      if (!hasEnteredView && isInView) {
        setHasEnteredView(true);
      }
    },
    [hasEnteredView],
  );

  return {
    handleOnInView,
    hasEnteredView,
  };
};

export default function Node() {
  return null;
}
