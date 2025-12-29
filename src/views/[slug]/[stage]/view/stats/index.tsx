import type { Stats } from '@/types';

import styles from './stylesheet';

type Props = {
  stats: Stats;
};

type Section = {
  heading: string;
  value: string;
};

export default function Stats({ stats }: Props) {
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
      heading: 'Max Elevation',
      value: `${stats.max.value.imperial} ${stats.max.units.imperial.abbreviated}`,
    });
  }

  return (
    <ul aria-label="stats" className={styles.list}>
      {sections.map((section: Section) => (
        <li className={styles.item} key={section.heading}>
          <h3 className={styles.heading}>{section.heading}</h3>
          <p className={styles.value}>{section.value}</p>
        </li>
      ))}
    </ul>
  );
}
