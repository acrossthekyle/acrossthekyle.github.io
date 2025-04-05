import { useId, useState } from 'react';

import type { Store } from '@/types';

type Return = {
  handleOnInView: (isInView: boolean) => void;
  hasEnteredView: boolean;
  uuid: string;
};

export const useViewModel = (): Return => {
  const [hasEnteredView, setHasEnteredView] = useState(false);

  const uuid = useId();

  const handleOnInView = (isInView: boolean) => {
    if (!hasEnteredView && isInView) {
      setHasEnteredView(true);
    }
  };

  return {
    handleOnInView,
    hasEnteredView,
    uuid,
  };
};

export default function Node() {
  return null;
}
