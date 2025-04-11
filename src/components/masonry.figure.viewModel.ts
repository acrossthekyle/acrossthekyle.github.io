'use client';

import { useCallback, useId, useState } from 'react';

type Return = {
  handleOnInView: (isInView: boolean) => void;
  hasEnteredView: boolean;
  uuid: string;
};

export const useViewModel = (): Return => {
  const [hasEnteredView, setHasEnteredView] = useState(false);

  const uuid = useId();

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
    uuid,
  };
};

export default function Node() {
  return null;
}
