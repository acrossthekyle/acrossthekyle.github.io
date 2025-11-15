'use client';

import { useState, useEffect } from 'react';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

export default function Footer() {
  const [time, setTime] = useState('');

  const { isOnRoot } = useHierarchy();

  const updateTime = () => {
    const formattedTime = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Chicago',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(new Date());

    setTime(formattedTime);
  };

  useEffect(() => {
    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isOnRoot) {
    return null;
  }

  return (
    <footer className={styles.container}>
      Chicago, IL<br />
      {time}
    </footer>
  );
}
