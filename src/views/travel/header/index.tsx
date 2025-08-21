import { Slash } from 'lucide-react';
import Link from 'next/link';

import type { Date } from '@/types';
import { getStaticType, getDate } from '@/utils';

import styles from './stylesheet';

type Props = {
  date: Date;
  title: string[];
  type: string;
};

export default function Header({ date, title, type }: Props) {
  return (
    <h1 className={styles.title}>
      <span className={styles.meta}>
        <Link href="/travels">Travels</Link>
        <Slash className={styles.slash} />
        {getStaticType(type)}
        <Slash className={styles.slash} />
        {getDate(date)}
      </span>
      {title.map((word: string) => (
        <span className={styles.block} key={word}>
          {word}
        </span>
      ))}
    </h1>
  );
}
