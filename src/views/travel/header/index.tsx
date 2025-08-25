import { Slash } from 'lucide-react';
import Link from 'next/link';

import styles from './stylesheet';

type Props = {
  title: string[];
  type: string;
};

export default function Header({ title, type }: Props) {
  return (
    <h1 className={styles.title}>
      <span className={styles.meta}>
        <Link href="/travels">Travels</Link>
        <Slash className={styles.slash} />
        {type}
      </span>
      {title.map((word: string) => (
        <span className={styles.block} key={word}>
          {word}
        </span>
      ))}
    </h1>
  );
}
