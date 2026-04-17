'use client';

import { useContext } from 'react';

import { Length } from '@/ui/units';
import { padIndex } from '@/utils';

import type { Trail } from '../../types';
import { GpxContext } from '../context';

import Elevation from './elevation';
import styles from './stylesheet';

type Props = {
  trail: Trail;
};

export default function Sidebar({ trail }: Props) {
  const { onStage, stageIndex } = useContext(GpxContext);

  const total = trail.stages.length;

  if (stageIndex === null) {
    return null;
  }

  const stage = trail.stages[stageIndex];

  return (
    <aside className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.index}>
          [{padIndex(stageIndex + 1)}:{padIndex(total)}]
        </span>
        {stage.termini}
      </h2>
      <p className={styles.meta}>
        <span className={styles.line}>
          {stage.when}
        </span>
        <span className={styles.line}>
          {stage.coordinates}
        </span>
        <span className={styles.line}>
          {stage.location}
        </span>
      </p>
      <div className={styles.data}>
        <ul className={styles.stats}>
          <li className={styles.stat}>
            <span>Distance:</span>
            <span>
              <Length value={stage.distance.value.complex} />
            </span>
          </li>
          <li className={styles.stat}>
            <span>Time:</span>
            <span>{stage.hours.value.basic}</span>
          </li>
          <li className={styles.stat}>
            <span>High Point:</span>
            <span>
              <Length isSmall value={stage.altitudeMax.value.complex} />
            </span>
          </li>
          <li className={styles.stat}>
            <span>Elev. Gain:</span>
            <span>
              <Length isSmall value={stage.elevationGain.value.complex} />
            </span>
          </li>
          <li className={styles.stat}>
            <span>Elev. Loss:</span>
            <span>
              <Length isSmall value={stage.elevationLoss.value.complex} />
            </span>
          </li>
        </ul>
        <Elevation elevation={stage.elevation} />
      </div>
      {(stageIndex > 0 || (stageIndex < (total - 1))) && (
        <nav className={styles.navigation}>
          <ul className={styles.options}>
            <li className={styles.previous}>
              <button
                className={styles.button}
                disabled={stageIndex <= 0}
                onClick={() => onStage(stageIndex - 1)}
                type="button"
              >
                Previous
              </button>
            </li>
            <li>
              <button
                className={styles.button}
                disabled={!(stageIndex < (total - 1))}
                onClick={() => onStage(stageIndex + 1)}
                type="button"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </aside>
  );
}
