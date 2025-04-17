'use client';

import { useEffect, useState } from 'react';

type Return = {
  route: [number, number][];
};

export const useViewModel = (id: string): Return => {
  const [route, setRoute] = useState([]);

  useEffect(() => {
    async function fetchRoute() {
      const response = await fetch('/api/posts/route?version=SEbAlVbTvp', {
        method: 'POST',
        body: id,
      });

      if (!response.ok) {
        //
      } else {
        const data = await response.json();

        setRoute(data);
      }
    }

    fetchRoute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    route,
  };
};

export default function Node() {
  return null;
}
