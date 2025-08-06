import type { Trip } from '@/types';

import Card from './timeline.card';
import styles from './timeline.stylesheet';

type Props = {
  trip: Trip;
};

export default function Timeline({ trip }: Props) {
  return (
    <section>
      <ol className={styles.timeline}>
        {trip.stages.map((stage) => (
          <Card
            key={stage.index}
            stage={stage}
          />
        ))}
      </ol>
    </section>
  );
}
