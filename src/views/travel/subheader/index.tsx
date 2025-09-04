import type { Date } from '@/types';
import { getDate } from '@/utils';

import styles from './stylesheet';

type Props = {
  date: Date;
  location: string;
};

export default function Subheader({
  date,
  location,
}: Props) {
  return (
    <>
      {location.toLowerCase() !== 'various' && (
        <p className={styles.subheading}>
          <span className={styles.highlight}>
            {location}
          </span>
        </p>
      )}
      <p className={styles.subheading}>
        <span className={styles.highlight}>
          {getDate(date)}
        </span>
      </p>
    </>
  );
}
