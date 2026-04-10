'use client';

import { useState, useEffect } from 'react';

import styles from './stylesheet';
import { calculateSunTimes } from './utils';

export default function Clock() {
  const [dateTimeParts, setDateTimeParts] = useState<{ [key: string]: string | number }>({});

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Chicago',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });

      const parts = formatter.formatToParts(new Date());

      const mappedParts = parts.reduce((accumulator: { [key: string]: string | number }, part) => {
        if (part.type !== 'literal') {
          accumulator[part.type] = part.value;
        }

        return accumulator;
      }, {});

      setDateTimeParts(mappedParts);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const sunTimes = calculateSunTimes();

  return (
    <div className={styles.times} role="presentation">
      <span>
        M{dateTimeParts.month}{' '}
        D{dateTimeParts.day}{' '}
        Y{String(dateTimeParts.year).slice(-2)}{' '}
        T{dateTimeParts.hour}:{dateTimeParts.minute}:{dateTimeParts.second}
      </span>
      <span>rise: {sunTimes.sunrise} / set: {sunTimes.sunset}</span>
      <span>Continuously copyrighted since 2011</span>
    </div>
  );
};
