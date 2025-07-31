'use client';

import { useCallback, useState } from 'react';

type Model = {
  handleOnInView: () => void;
  hasEnteredView: boolean;
};

export function useModel(): Model {
  const [hasEnteredView, setHasEnteredView] = useState(false);

  const handleOnInView = useCallback(
    (isInView: boolean) => {
      if (!hasEnteredView && isInView) {
        setHasEnteredView(isInView);
      }
    },
    [hasEnteredView],
  );

  return {
    handleOnInView,
    hasEnteredView,
  };
}

