'use client';

import { useGpx } from '@/hooks/useGpx';
import type { Stats, Termini } from '@/types';

import styles from './stylesheet';

type Props = {
  elevation: string[] | null;
  route: number[][] | null;
  stats: Stats;
  termini: Termini;
};

type Section = {
  heading: string;
  value: string;
};

export default function Stats({ elevation, route, stats, termini }: Props) {
  const { openGpx } = useGpx();

  const handleOnViewGpxPress = () => {
    openGpx(elevation, route, termini);
  };

  const sections: Section[] = [
    {
      heading: 'Start',
      value: termini.start.join(' '),
    },
    {
      heading: 'End',
      value: termini.end.join(' '),
    },
  ];

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

  if (stats.gain) {
    sections.push({
      heading: 'Elevation Gain',
      value: `${stats.gain.value.imperial} ${stats.gain.units.imperial.abbreviated}`,
    });
  }

  if (stats.loss) {
    sections.push({
      heading: 'Elevation Loss',
      value: `${stats.loss.value.imperial} ${stats.loss.units.imperial.abbreviated}`,
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
          type="button"
        >
          View GPX
        </button>
      </li>
    </ul>
  );
}
