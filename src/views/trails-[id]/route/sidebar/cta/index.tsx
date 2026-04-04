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
      className={styles.container(isActive)}
      onClick={() => onClick(index)}
      type="button"
    >
      <span className={styles.heading}>
        <span className={styles.index}>
          [ 00-{padIndex(index + 1)}:{padIndex(total)} ]
        </span>
        {stage.termini}
      </span>
      <ul className={styles.items}>
        <li className={styles.item}>
          {stage.when}
        </li>
        <li className={styles.item}>
          {stage.hours.value.basic}
        </li>
        <li className={styles.item}>
          <Length value={stage.distance.value.complex} />
        </li>
        <li className={styles.item}>
          {stage.location}
        </li>
        <li className={styles.item}>
          {stage.coordinates}
        </li>
      </ul>
    </button>
  );
}
