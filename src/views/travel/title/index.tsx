import { Slash } from 'lucide-react';

import type { Date } from '@/types';
import { getStaticType, getTripDate } from '@/utils';

import styles from './stylesheet';

type Props = {
  date: Date;
  title: string[];
  type: string;
};

export default function Title({ date, title, type }: Props) {
  return (
    <h1 className={styles.title}>
      <span className={styles.meta}>
        {getStaticType(type)}
        <Slash className={styles.slash} />
        {getTripDate(date)}
      </span>
      {title.map((word: string, index: number) => (
        <span className={styles.block} key={word}>
          {word}
          {(index === title.length - 1) && (
            <span className={styles.index}>
              {String(index + 1).padStart(2, '0')}
            </span>
          )}
        </span>
      ))}
    </h1>
  );
}
