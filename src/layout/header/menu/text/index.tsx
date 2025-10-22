'use client';

import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

type Props = {
  index?: number;
  words: string[];
};

export default function MenuText({ index, words }: Props) {
  const { isOnChild } = useHierarchy();

  return (
    <>
      {words.map((word, iteration) => (
        <span className={styles.block} key={word}>
          {word}
          {iteration === (words.length - 1) && index !== undefined && (
            <span className={styles.index(isOnChild)}>
              {String(index + 1).padStart(2, '0')}
            </span>
          )}
        </span>
      ))}
    </>
  );
}
