import { Slash } from 'lucide-react';

import type { Stage } from '@/types';

import styles from './stylesheet';

type Props = {
  stage: Stage;
  total: string;
};

export default function Caption({ stage, total }: Props) {
  return (
    <figcaption className={styles.caption}>
      <h2 className={styles.heading}>
        <span className={styles.index}>
          {String(stage.index + 1).padStart(3, '0')} <Slash className={styles.slash} /> {String(total).padStart(3, '0')}
        </span>
        {stage.termini.end.join(' ')}
      </h2>
      <p className={styles.subheading}>
        {(!stage.termini.isSame || !!stage.location) && (
          <span className={styles.highlight}>
            {!stage.termini.isSame && 'Via '}
            {!!stage.location ? stage.location : (!stage.termini.isSame ? `${stage.termini.start.join(' ')}` : '')}
          </span>
        )}
        {stage.hasStats && (
          <>
            {!stage.termini.isSame && <span className={styles.break}>-</span>}
            <span className={styles.highlight}>
              {stage.stats.distance && (
                <>
                  {stage.stats.distance.value.imperial}{' '}
                  {stage.stats.distance.units.imperial.full}
                </>
              )}
              /
              {stage.stats.time && (
                <>
                  {stage.stats.time.value}{' '}
                  {stage.stats.time.units}
                </>
              )}
            </span>
          </>
        )}
      </p>
      <p className={styles.subheading}>
        <span className={styles.highlight}>
          {stage.date.short.month}.{stage.date.short.day}.{stage.date.long.year}
        </span>
      </p>
    </figcaption>
  );
}
