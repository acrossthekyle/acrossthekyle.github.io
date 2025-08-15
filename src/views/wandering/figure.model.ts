'use client';

import { useCallback, useRef, useState } from 'react';

type Model = {
  figureRef: React.RefObject<HTMLFigureElement | null>;
  handleOnInView: (isInView: boolean) => void;
  hasEnteredView: boolean;
};

export function useModel(): Model {
  const [hasEnteredView, setHasEnteredView] = useState(false);

  const figureRef = useRef<HTMLFigureElement | null>(null);

  const handleOnInView = useCallback(
    (isInView: boolean) => {
      setHasEnteredView(isInView);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [hasEnteredView],
  );

  return {
    figureRef,
    handleOnInView,
    hasEnteredView,
  };
}
