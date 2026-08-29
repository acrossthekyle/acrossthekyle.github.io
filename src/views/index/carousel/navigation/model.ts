'use client';

import { useEffect, useState } from 'react';

import { AUTOPLAY_TIMER } from './constants';

export function useModel(
  current: number,
  onChange: (value: number) => void,
  total: number,
) {
  const [canAutoPlay, setCanAutoPlay] = useState(false);

  const handleOnNext = () => {
    setCanAutoPlay(false);

    onChange(current === total - 1 ? 0 : current + 1);
  };

  const handleOnPrevious = () => {
    setCanAutoPlay(false);

    onChange(current === 0 ? total - 1 : current - 1);
  };

  const handleOnPill = (index: number) => {
    setCanAutoPlay(false);

    onChange(index);
  };

  const handleOnAuto = () => {
    setCanAutoPlay(previous => !previous);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (canAutoPlay) {
        onChange(current === total - 1 ? 0 : current + 1);
      }
    }, AUTOPLAY_TIMER);

    return () => clearInterval(timer);
  }, [canAutoPlay, current, onChange, total]);

  return {
    canAutoPlay,
    handleOnAuto,
    handleOnNext,
    handleOnPill,
    handleOnPrevious,
  };
};
