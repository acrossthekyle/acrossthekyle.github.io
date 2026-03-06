'use client';

import { useEffect, useState } from 'react';

export function useUnits() {
  const [current, setCurrent] = useState('imperial');

  useEffect(() => {
    // necessary for next.js applications
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrent(localStorage.getItem('units') || 'imperial');
  }, []);

  const onToggleUnits = () => {
    let units = 'imperial';

    if (localStorage.getItem('units')) {
      units = localStorage.getItem('units') || 'imperial';
    }

    const value = units === 'metric' ? 'imperial' : 'metric';

    setCurrent(value);

    localStorage.setItem('units', value);
  };

  return {
    labels: {
      length: {
        macro: current === 'imperial' ? 'miles' : 'kilometers',
        micro: current === 'imperial' ? 'ft' : 'm'
      },
      weight: {
        macro: current === 'imperial' ? 'lbs' : 'kgs',
        micro: current === 'imperial' ? 'oz' : 'g'
      },
    },
    onToggleUnits,
    units: current,
  }
}
