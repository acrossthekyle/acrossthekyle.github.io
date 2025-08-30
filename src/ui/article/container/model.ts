'use client';

import { useRef } from 'react';

type Model = {
  handleOnScroll: () => void;
  ref: React.RefObject<HTMLElement | null>;
};

export function useModel(onScrollEnd?: () => void): Model {
  const ref = useRef(null);

  const handleOnScroll = () => {
    if (ref.current) {
      const { scrollTop, scrollHeight, clientHeight } = ref.current;

      if (scrollTop + clientHeight >= scrollHeight) {
        onScrollEnd?.();
      }
    }
  };

  return {
    handleOnScroll,
    ref,
  };
}
