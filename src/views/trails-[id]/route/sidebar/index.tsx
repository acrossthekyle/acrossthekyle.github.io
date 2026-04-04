'use client';

import { useContext } from 'react';

import type { Stage } from '../../types';
import { GpxContext } from '../context';

import Cta from './cta';
import styles from './stylesheet';

type Props = {
  stages: Stage[];
};

export default function Sidebar({ stages }: Props) {
  const { isToggled } = useContext(GpxContext);

  const total = stages.length;

  return (
    <aside className={styles.container(isToggled)}>
      <ul className={styles.items}>
        {stages.map((stage, index: number) => (
          <li className={styles.item} key={stage.coordinates}>
            <Cta index={index} stage={stage} total={total} />
          </li>
        ))}
      </ul>
    </aside>
  );
}
