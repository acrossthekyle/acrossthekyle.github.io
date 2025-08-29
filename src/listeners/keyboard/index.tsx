'use client';

import { useCallback, useEffect } from 'react';

import { useEvent } from '@/hooks/useEvent';

type KeyboardEvent = {
  key: string;
};

export default function KeyboardListener() {
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

  return null;
};
