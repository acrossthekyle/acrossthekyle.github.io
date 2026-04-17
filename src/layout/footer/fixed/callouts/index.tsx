import { Circle } from 'lucide-react';
import Link from 'next/link';

import styles from './stylesheet';

type Props = {
  trail: {
    id: string;
    title: string;
  };
};

export default function Callouts({ trail }: Props) {
  return (
    <section
      aria-label="site notification"
      aria-live="polite"
      className={styles.container}
      role="status"
    >
      <Link
        className={styles.callout}
        href={`/trails/${trail.id}`}
      >
        <Circle
          aria-hidden="true"
          className={styles.icon}
        />
        Latest trail:{' '}
        <span className={styles.highlight}>{trail.title}</span>{' '}
        <span aria-hidden="true">[→]</span>
      </Link>
    </section>
  );
}
