'use client';

import { useCallback, useEffect, useState } from 'react';

type Model = {
  handleOnInView: (isInView: boolean) => void;
  handleOnLoad: () => void;
  hasEnteredView: boolean;
  isLoading: boolean;
};

export function useModel(src: string): Model {
  const [isLoading, setIsLoading] = useState(true);
  const [hasEnteredView, setHasEnteredView] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, [src]);

  const handleOnLoad = () => {
    setIsLoading(false);
  };

  const handleOnInView = useCallback(
    (isInView: boolean) => {
      setHasEnteredView(isInView);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hasEnteredView],
  );

  return {
    handleOnLoad,
    handleOnInView,
    hasEnteredView,
    isLoading,
  };
}
