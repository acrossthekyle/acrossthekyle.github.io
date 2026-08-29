'use client';

import tw from '@/styles';

import { useModel } from './model';

export default function Space() {
  const { day, month, time, year } = useModel();

  return (
    <p className={styles.container}>{month} {day} {year} {time} CT</p>
  );
};

const styles = tw({
  container: `
    uppercase
    text-tiny
    font-mono

    sm:text-xtiny
  `,
});
