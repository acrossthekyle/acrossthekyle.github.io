'use client';

import { useEffect, useState } from 'react';

import type { Stage } from '@/types';

type Model = {
  handleOnLoad: () => void;
  isLoading: boolean;
};

export function useModel(stage: Stage): Model {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [stage.images.hero]);

  const handleOnLoad = () => {
    setIsLoading(false);
  };

  return {
    handleOnLoad,
    isLoading,
  };
}
