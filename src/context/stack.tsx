'use client';

import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
} from 'react';

import { useEvent } from '@/hooks/useEvent';
import { useStack } from '@/hooks/useStack';

type Props = {
  children: ReactNode | ReactNode[];
};

type KeyboardEvent = {
  key: string;
};

export const StackContext = createContext({
  //
});

export default function Stack({ children }: Props) {
  const { dispatch } = useEvent('onEscape');
  const { dispatch: dispatchLeft } = useEvent('onLeft');
  const { dispatch: dispatchRight } = useEvent('onRight');

  const { removeStack, stack } = useStack();

  const handleOnKeyUp = useCallback((event: KeyboardEvent) => {
    if (stack.length > 0) {
      const id = stack[stack.length - 1];

      if (event.key === 'Escape') {
        dispatch(id);

        removeStack();
      } else if (event.key === 'ArrowRight') {
        dispatchRight(id);
      } else if (event.key === 'ArrowLeft') {
        dispatchLeft(id);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stack]);

  useEffect(() => {
    if (stack.length > 0) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [stack]);

  useEffect(() => {
    document.addEventListener('keyup', handleOnKeyUp);

    return () => {
      document.removeEventListener('keyup', handleOnKeyUp);
    };
  }, [handleOnKeyUp]);

  return (
    <StackContext.Provider value={{}}>
      {children}
    </StackContext.Provider>
  );
};
