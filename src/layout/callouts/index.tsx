import { Circle } from 'lucide-react';
import Link from 'next/link';

import styles from './stylesheet';

type Props = {
  data: {
    job: {
      isAvailable: boolean;
      place: string;
      title: string;
    };
    trail: {
      id: string;
      title: string;
    };
  };
};

export default function Callouts({ data }: Props) {
  return (
    <section
      aria-label="site notifications"
      aria-live="polite"
      className={styles.container}
      role="status"
    >
      <Link
        className={styles.callout}
        href={`/trails/${data.trail.id}`}
      >
        <Circle
          aria-hidden="true"
          className={`${styles.icon} ${styles.filled}`}
        />
        Latest trail:{' '}
        <span className={styles.highlight}>{data.trail.title}</span>{' '}
        <span aria-hidden="true">[→]</span>
      </Link>
      <Link
        className={styles.callout}
        href="/info"
      >
        Currently:{' '}
        {data.job.isAvailable && (
          <>
            Available for work
            <Circle
              aria-hidden="true"
              className={`${styles.icon} ${styles.filled}`}
            />
          </>
        )}
        {!data.job.isAvailable && (
          <>
            <span className={styles.highlight}>{data.job.title}</span>
            {' '}@{' '}
            <span className={styles.highlight}>{data.job.place}</span>
            <Circle aria-hidden="true" className={styles.icon} />
          </>
        )}
      </Link>
    </section>
  );
}
