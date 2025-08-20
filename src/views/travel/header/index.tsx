import { Slash } from 'lucide-react';

import type { Date } from '@/types';
import Title from '@/ui/title';
import { getStaticType, getTripDate } from '@/utils';

import styles from './stylesheet';

type Props = {
  date: Date;
  title: string[];
  type: string;
};

export default function Header({ date, title, type }: Props) {
  return (
    <Title>
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
    </Title>
  );
}
