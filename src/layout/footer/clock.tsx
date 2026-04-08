'use client';

import { useState, useEffect } from 'react';

import styles from './stylesheet';

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

  return (
    <>
      M<span className={styles.highlight}>{dateTimeParts.month}</span>{' '}
      D<span className={styles.highlight}>{dateTimeParts.day}</span>{' '}
      Y<span className={styles.highlight}>{String(dateTimeParts.year).slice(-2)}</span>{' '}
      T<span className={styles.highlight}>{dateTimeParts.hour}:{dateTimeParts.minute}:{dateTimeParts.second}</span>
    </>
  );
};
