import { Circle, CircleDot } from 'lucide-react';

import type { Stats, Termini } from '@/types';

import styles from './stylesheet';

type Props = {
  stats: Stats;
  termini: Termini;
};

type Section = {
  heading?: string;
  value: string;
};

export default function Stats({ stats, termini }: Props) {
  const sections: Section[] = [];

  if (!termini.isSame) {
    sections.push({
      heading: 'Start',
      value: termini.start.join(' '),
    });

    sections.push({
      heading: 'Finish',
      value: termini.end.join(' '),
    });
  }

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
      {sections.map((section: Section, index) => (
        <section
          aria-labelledby={section.heading}
          key={section.heading || index}
        >
          {section.heading && (
            <h2 className={styles.heading} id={section.heading.replace(' ', '-')}>
              {section.heading}
              {section.heading === 'Start' && (
                <Circle className={styles.icon} />
              )}
              {section.heading === 'Finish' && (
                <CircleDot className={styles.icon} />
              )}
            </h2>
          )}
          <p className={styles.content}>
            {section.value}
          </p>
        </section>
      ))}
    </section>
  );
}
