'use client';

import { useHierarchy } from '@/hooks/useHierarchy';
import { padIndex } from '@/utils';

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
              {padIndex(index + 1)}
            </span>
          )}
        </span>
      ))}
    </>
  );
}
