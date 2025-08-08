'use client';

import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
} from 'react';

import { useEvent } from '@/hooks/useEvent';
import { useFullscreen } from '@/hooks/useFullscreen';

type Props = {
  children: ReactNode | ReactNode[];
};

type KeyboardEvent = {
  key: string;
};

export const EventsContext = createContext({
  //
});

export default function Events({ children }: Props) {
  const { dispatch } = useEvent('onEscape');

  const { exitFullscreen } = useFullscreen();

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

  useEffect(() => {
    const handleOnChange = () => {
      if (!document.fullscreenElement) {
        dispatch('escaped');

        exitFullscreen();
      }
    };

    document.addEventListener('fullscreenchange', handleOnChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleOnChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <EventsContext.Provider value={{}}>
      {children}
    </EventsContext.Provider>
  );
};
