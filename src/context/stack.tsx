'use client';

import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
} from 'react';

import { useEvent } from '@/hooks/useEvent';

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

  const handleOnKeyUp = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      dispatch('escaped');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
