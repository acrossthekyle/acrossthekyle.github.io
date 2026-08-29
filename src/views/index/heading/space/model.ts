'use client';

import { useEffect, useState } from 'react';

export function useModel() {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDate(new Date());

    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (date === null) {
    return {
      day: '--',
      month: '--',
      time: '--:--:--',
      year: '--',
    };
  }

  const year = date.toLocaleDateString('en-US', { timeZone: 'America/Chicago', year: '2-digit' });
  const month = date.toLocaleDateString('en-US', { timeZone: 'America/Chicago', month: '2-digit' });
  const day = date.toLocaleDateString('en-US', { timeZone: 'America/Chicago', day: '2-digit' });
  const time = date.toLocaleTimeString('en-US', { timeZone: 'America/Chicago' });

  return {
    day,
    month,
    time,
    year,
  };
}
