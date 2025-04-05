'use client';

import { useEffect, useState } from 'react';

export const useFetch = (uri?: string) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async (endpoint: string, body?: object) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        endpoint,
        body
          ? {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(body),
            }
          : undefined,
      );

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
    hasError: !isLoading && hasError,
    isEmpty: !isLoading && !hasError && data === null,
    isLoading,
    isReady: !isLoading && !hasError && data !== null,
  };
};
