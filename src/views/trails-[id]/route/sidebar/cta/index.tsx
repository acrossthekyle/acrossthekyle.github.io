'use client';

import { useContext } from 'react';

import { Length } from '@/ui/units';
import { padIndex } from '@/utils';

import type { Stage } from '../../../types';
import { GpxContext } from '../../context';

import styles from './stylesheet';

type Props = {
  index: number;
  stage: Stage;
  total: number;
};

export default function Cta({ index, stage, total }: Props) {
  const { activeIndex, onClick } = useContext(GpxContext);

  const isActive = activeIndex === index;

  return (
    <button
      aria-label="set active route segment in map"
      className={styles.container}
      onClick={() => onClick(index)}
      type="button"
    >
      <span className={styles.index}>
        [ {padIndex(index + 1)}-{padIndex(total)} ]
      </span>
      <span className={styles.content}>
        {isActive && (
          <span className={styles.current} role="presentation">
            [→]
          </span>
        )}
        {stage.termini}
        <span className={styles.items}>
          {stage.when}<br />
          {stage.hours.value.basic}<br />
          <Length value={stage.distance.value.complex} /><br />
          {stage.location}<br />
          {stage.coordinates}
        </span>
      </span>
    </button>
  );
}
