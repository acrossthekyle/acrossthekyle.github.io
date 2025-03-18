'use client';

import { useEffect, useState } from 'react';

const usePacksData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [packs, setPacks] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/packs');

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();

      setPacks(data);
    } catch (error) {
      // do nothing for now
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    isLoading,
    packs,
  };
};

export default usePacksData;
