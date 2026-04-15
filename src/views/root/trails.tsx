import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { padIndex } from '@/utils';

import styles from './stylesheet';

type Props = {
  data: Array<{
    coordinates: string;
    id: string;
    location: string;
    title: string;
    type: string;
    when: string;
  }>;
};

export default function Trails({ data }: Props) {
  const thruHikes = data.filter((item) => item.type === 'thru-hike');
  const basecamps = data.filter((item) => item.type === 'basecamp');
  const sectionHikes = data.filter((item) => item.type === 'section hike');
  const weekendHikes = data.filter((item) => item.type === 'weekend hike');
  const summits = data.filter((item) => item.type === 'summit');

  const categories = [
    {
      description: 'End-to-end long-distance trails',
      id: 'thru-hikes',
      items: thruHikes,
      label: 'Thru-hikes',
    },
    {
      description: 'High camp trekking',
      id: 'basecamps',
      items: basecamps,
      label: 'Basecamps',
    },
    {
      description: 'Long-distance trail segments',
      id: 'section-hikes',
      items: sectionHikes,
      label: 'Section hikes',
    },
    {
      description: 'Overnight loops/out-and-backs',
      id: 'weekend-hikes',
      items: weekendHikes,
      label: 'Weekend hikes',
    },
    {
      description: 'Mountain peaks above the treeline',
      id: 'summits',
      items: summits,
      label: 'Summits',
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading} id="trails">
        <span className={styles.start}>
          <span className={styles.index}>
            [ 00-01 ]
          </span>
          <span className={styles.label}>Trails</span>
        </span>
        <span className={styles.subheading}>
          Collection of hikes and summits since 2018
        </span>
      </h2>
      <ul className={styles.categories}>
        {categories.map((category, index: number) => (
          <li className={styles.category} key={category.label}>
            <h3 className={styles.summary} id={category.id}>
              <span className={styles.start}>
                <span className={styles.index}>
                  [ 00-01.{padIndex(index + 1)} ]
                </span>
                <span className={styles.label}>{category.label}</span>
              </span>
              <span className={styles.subsummary}>
                {category.description}
              </span>
            </h3>
            <ul className={styles.items}>
              {category.items.map((item, key: number) => (
                <li className={styles.item} key={item.id}>
                  <span className={styles.index}>
                    [ 00-01.{padIndex(index + 1)}.{padIndex(key + 1)} ]
                  </span>
                  <Link className={styles.link} href={`/trails/${item.id}`}>
                    <span className={styles.title}>
                      {item.title} <ArrowRight className={styles.arrow} />
                    </span>
                    <ul className={styles.stats}>
                      <li>{item.when}</li>
                      <li>{item.location}</li>
                      <li>{item.coordinates}</li>
                    </ul>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
