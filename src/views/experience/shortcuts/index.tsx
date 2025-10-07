import { Heading } from 'lucide-react';
import Link from 'next/link';

import styles from './stylesheet';

type Props = {
  slug: string;
};

export default function Shortcuts({ slug }: Props) {
  return (
    <>
      <Link
        className={styles.top}
        href={`/experiences/${slug}`}
        title="Images"
      >
        <Heading className={styles.arrow} />
      </Link>
      <Link
        className={styles.images}
        href="#images"
        title="Images"
      >
        <span className={styles.image} />
        <span className={styles.image} />
        <span className={styles.image} />
      </Link>
      <Link
        className={styles.overview}
        href="#overview"
        title="Overview"
      >
        <span className={styles.text} />
        <span className={styles.text} />
        <span className={styles.text} />
      </Link>
    </>
  );
}
