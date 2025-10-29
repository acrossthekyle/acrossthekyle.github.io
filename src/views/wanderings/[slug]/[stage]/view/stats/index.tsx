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
    <section className={styles.sections} aria-label="statistics">
      {sections.map((section: Section) => (
        <section
          aria-labelledby={section.heading.replace(' ', '-')}
          key={section.heading}
        >
          <h2 className={styles.heading} id={section.heading.replace(' ', '-')}>
            {section.heading}
          </h2>
          <p className={styles.content}>
            {section.value}
          </p>
        </section>
      ))}
    </section>
  );
}
