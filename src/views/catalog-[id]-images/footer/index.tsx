import type { Image } from '@/types';

import Navigation from './navigation';
import Range from './range';
import styles from './stylesheet';
import Total from './total';

type Props = {
  all: Image[];
  current: number;
  id: string;
  onNavigate: (index: number) => void;
  total: number;
};

export default function Footer({
  all,
  current,
  id,
  onNavigate,
  total,
}: Props) {
  return (
    <section
      aria-label="navigation and current/total"
      className={styles.container}
    >
      <Navigation
        all={all}
        current={current}
        id={id}
        onNavigate={onNavigate}
        total={total}
      />
      <div className={styles.row}>
        <Range
          all={all}
          current={current}
          id={id}
          onNavigate={onNavigate}
          total={total}
        />
        <Total current={current} total={total} />
      </div>
    </section>
  );
}
