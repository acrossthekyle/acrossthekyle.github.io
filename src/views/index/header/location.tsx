'use client';

import { useEffect, useState } from 'react';

import tw from '@/styles';

export default function Location() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const year = date.toLocaleDateString('en-US', { timeZone: 'America/Chicago', year: '2-digit' });
  const month = date.toLocaleDateString('en-US', { timeZone: 'America/Chicago', month: '2-digit' });
  const day = date.toLocaleDateString('en-US', { timeZone: 'America/Chicago', day: '2-digit' });
  const time = date.toLocaleTimeString('en-US', { timeZone: 'America/Chicago' });

  return (
    <>
      <p className={styles.paragraph}>CHICAGO, U.S. 41.8781 N, 87.6298 W</p>
      <p className={styles.paragraph}>{month} {day} {year} {time} CT</p>
    </>
  );
};

const styles = tw({
  paragraph: `
    ml-6
    uppercase
    text-xtiny
    font-mono
  `,
});
