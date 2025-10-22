'use client';

import { useCallback, useEffect } from 'react';

import { useEvent } from '@/hooks/useEvent';

type KeyboardEvent = {
  key: string;
};

export default function KeyboardListener() {
  const { dispatch: escaped } = useEvent('onEscape');
  const { dispatch: previous } = useEvent('onPrevious');
  const { dispatch: next } = useEvent('onNext');

  const handleOnKeyUp = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      escaped();
    }

    if (event.key === 'ArrowLeft') {
      previous();
    }

    if (event.key === 'ArrowRight') {
      next();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.addEventListener('keyup', handleOnKeyUp);

    return () => {
      document.removeEventListener('keyup', handleOnKeyUp);
    };
  }, [handleOnKeyUp]);

  return null;
};
