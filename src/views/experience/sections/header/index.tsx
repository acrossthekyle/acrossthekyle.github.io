import type { Date } from '@/types';
import { getDate } from '@/utils';

import styles from './stylesheet';

type Props = {
  date: Date;
  title: string[];
};

export default function Header({ date, title }: Props) {
  return (
    <>
      <h1 className={styles.header}>
        {title.map((word: string) => (
          <span className="block" key={word}>
            {word}
          </span>
        ))}
      </h1>
      <span className={styles.date}>{getDate(date)}</span>
    </>
  );
}
