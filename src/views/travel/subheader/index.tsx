import type { Date } from '@/types';
import { getDate } from '@/utils';

import styles from './stylesheet';

type Props = {
  date: Date;
  location: string;
  tagline: string;
};

export default function Subheader({
  date,
  location,
  tagline,
}: Props) {
  return (
    <>
      <p className={styles.subheading}>
        <span className={styles.highlight}>
          {location}
        </span>
      </p>
      <p className={styles.subheading}>
        <span className={styles.highlight}>
          {getDate(date)}
        </span>
      </p>
      <h3 className={styles.heading}>
        {tagline}
      </h3>
    </>
  );
}
