import type { Data } from '@/types';
import { getDate } from '@/utils';

import styles from './stylesheet';

type Props = {
  data: Data;
};

type Section = {
  heading?: string;
  value: string;
};

export default function Breakdown({ data }: Props) {
  const sections: Section[] = [
    {
      heading: `Location${data.type === 'collection' ? 's' : ''}`,
      value: data.location,
    },
    {
      heading: 'When',
      value: getDate(data.date),
    },
  ];

  if (!['day-hike', 'cities'].includes(data.type)) {
    sections.push({
      heading: {
        'collection': 'Items',
        'peak-bagging': 'Summits',
        'section-hike': 'Sections',
        'thru-hike': 'Duration',
      }[data.type],
      value: data.type === 'thru-hike' ? `${data.stats.days.value} days` : data.stats.length.value,
    });
  }

  if (['peak-bagging', 'section-hike', 'thru-hike'].includes(data.type)) {
    if (data.stats.distance) {
      sections.push({
        heading: 'Length',
        value: `${data.stats.distance.value.imperial} ${data.stats.distance.units.imperial.full}`,
      });
    }

    if (data.stats.altitude) {
      sections.push({
        heading: 'Peak',
        value: `${data.stats.altitude.value.imperial} ${data.stats.altitude.units.imperial.abbreviated}`,
      });
    }
  }

  return (
    <>
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
      <section className={styles.section} aria-labelledby="overview">
        {data.description.map((paragraph) => (
          <p className={styles.content} key={paragraph}>
            {paragraph}
          </p>
        ))}
      </section>
    </>
  );
}
