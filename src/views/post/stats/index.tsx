import type { Stats } from '@/types';

import styles from './stylesheet';

type Props = {
  stats: Stats;
};

type Section = {
  heading?: string;
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
      heading: 'Distance',
      value: `${stats.distance.value.imperial} ${stats.distance.units.imperial.full}`,
    });
  }

  if (stats.max) {
    sections.push({
      heading: 'Peak',
      value: `${stats.max.value.imperial} ${stats.max.units.imperial.abbreviated}`,
    });
  }

  if (stats.gain) {
    sections.push({
      heading: 'Gain',
      value: `${stats.gain.value.imperial} ${stats.gain.units.imperial.abbreviated}`,
    });
  }

  if (stats.loss) {
    sections.push({
      heading: 'Loss',
      value: `${stats.loss.value.imperial} ${stats.loss.units.imperial.abbreviated}`,
    });
  }

  return (
    <section className={styles.sections} aria-label="Stats and Information">
      {sections.map((section: Section, index) => (
        <section
          aria-labelledby={section.heading}
          key={section.heading || index}
        >
          {section.heading && (
            <h2 className={styles.heading} id={section.heading}>
              <span className={styles.index}>0{index + 1}.</span>
              {section.heading}
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
