import { MoveRight, Slash } from 'lucide-react';

import type { Stage } from '@/types';

import styles from './stylesheet';

type Props = {
  label: string;
  stage: Stage;
  total: string;
};

export default function Caption({ label, stage, total }: Props) {
  return (
    <figcaption className={styles.caption}>
      <span className={styles.index}>
        <span className={styles.label}>{label}</span>
        {String(stage.index + 1).padStart(3, '0')}{' '}
        <Slash className={styles.slash} />{' '}
        {String(total).padStart(3, '0')}
      </span>
      {!stage.termini.isSame && (
        <>
          {stage.termini.start.join(' ')}{' '}
          <MoveRight className={styles.arrow} />{' '}
        </>
      )}
      {stage.termini.end.join(' ')}
    </figcaption>
  );
}
