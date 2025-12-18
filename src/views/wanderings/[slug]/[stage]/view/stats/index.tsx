'use client';

import { useGpx } from '@/hooks/useGpx';
import type { Gpx, Stats, Termini } from '@/types';

import styles from './stylesheet';

type Props = {
  gpx: Gpx;
  stats: Stats;
  termini: Termini;
};

type Section = {
  heading: string;
  value: string;
};

export default function Stats({ gpx, stats, termini }: Props) {
  const { openGpx } = useGpx();

  const handleOnViewGpxPress = () => {
    openGpx(gpx, stats, termini);
  };

  const sections: Section[] = [];

  if (stats.time) {
    sections.push({
      heading: 'Time',
      value: `${stats.time.value} ${stats.time.units}`,
    });
  }

  if (stats.distance) {
    sections.push({
      heading: 'Length',
      value: `${stats.distance.value.imperial} ${stats.distance.units.imperial.full}`,
    });
  }

  if (stats.max) {
    sections.push({
      heading: 'Max Altitude',
      value: `${stats.max.value.imperial} ${stats.max.units.imperial.abbreviated}`,
    });
  }

  return (
    <ul className={styles.list}>
      {sections.map((section: Section) => (
        <li className={styles.item} key={section.heading}>
          <h3 className={styles.heading}>{section.heading}</h3>
          <p>{section.value}</p>
        </li>
      ))}
      <li className={styles.item}>
        <button
          className={styles.view}
          onClick={handleOnViewGpxPress}
          title="View all stats + route and elevation"
          type="button"
        >
          View Stats
        </button>
      </li>
    </ul>
  );
}
