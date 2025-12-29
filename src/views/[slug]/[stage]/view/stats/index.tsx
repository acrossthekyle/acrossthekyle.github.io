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

  if (stats.gain && stats.loss) {
    sections.push({
      heading: 'Elevation Change',
      value: `+ ${stats.gain.value.imperial} ${stats.gain.units.imperial.abbreviated} / - ${stats.loss.value.imperial} ${stats.loss.units.imperial.abbreviated}`,
    });
  }

  return (
    <section aria-label="stats" className={styles.container}>
      <ul className={styles.list} tabIndex={-1}>
        {sections.map((section: Section) => (
          <li className={styles.item} key={section.heading}>
            <p className={styles.value}>{section.value}</p>
            <h3 className={styles.heading}>{section.heading}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
