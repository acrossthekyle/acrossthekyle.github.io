import { MoveRight } from 'lucide-react';

import type { Date } from '@/types';

import styles from './stylesheet';

type Props = {
  date: Date;
  isPreview?: boolean;
};

export default function Range({ date, isPreview }: Props) {
  return (
    <>
      {date.isYears && (
        <>
          {date.range[0]} <MoveRight className={styles.icon} /> {date.range[1]}
        </>
      )}
      {!date.isYears && (
        <>
          {isPreview ? (
            <>
              {date.range[0]}
            </>
          ) : (
            <>
              {date.range[0]} <MoveRight className={styles.icon} /> {date.range[1]}
            </>
          )}
        </>
      )}
    </>
  );
}
