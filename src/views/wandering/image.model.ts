'use client';

import { useEffect, useState } from 'react';

type Model = {
  handleOnLoad: () => void;
  isLoading: boolean;
};

export function useModel(src: string): Model {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, [src]);

  const handleOnLoad = () => {
    setIsLoading(false);
  };

  return {
    handleOnLoad,
    isLoading,
  };
}
