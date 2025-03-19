'use client';

import { useEffect, useState } from 'react';

export const useFetch = (uri?: string) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = async (endpoint: string) => {
    setIsLoading(true);

    try {
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();

      setHasError(false);
      setData(data);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (uri) {
      fetchData(uri);
    }
  }, [uri]);

  return {
    data,
    fetchData,
    hasError,
    isLoading,
  };
};
