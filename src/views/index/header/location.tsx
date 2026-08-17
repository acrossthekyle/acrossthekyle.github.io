'use client';

import { useEffect, useState } from 'react';

import tw from '@/styles';

export default function Location() {
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
    return (
      <>
        <p className={styles.paragraph}>CHICAGO, U.S. 41.8781 N, 87.6298 W</p>
        <p className={styles.paragraph}>--/--/-- --:--:-- CT</p>
      </>
    );
  }

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
    text-tiny
    font-mono

    sm:text-xtiny
  `,
});
