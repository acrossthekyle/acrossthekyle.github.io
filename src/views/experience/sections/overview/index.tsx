import type { Data } from '@/types';

import styles from './stylesheet';

type Props = {
  data: Data;
};

export default function Overview({ data }: Props) {
  return (
    <section aria-label="overview" className={styles.section}>
      {data.description.map((paragraph) => (
        <p className={styles.content} key={paragraph}>
          {paragraph}
        </p>
      ))}
    </section>
  );
}
