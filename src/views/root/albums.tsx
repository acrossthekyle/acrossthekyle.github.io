import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { padIndex } from '@/utils';

import styles from './stylesheet';

type Props = {
  data: Array<{
    category: string;
    coordinates: string;
    count: number;
    id: string;
    location: string;
    title: string;
    when: string;
  }>;
};

export default function Albums({ data }: Props) {
  const hikes = data.filter((item) => item.category === 'hike');
  const destinations = data.filter((item) => item.category === 'destination');

  const categories = [
    {
      description: 'Snapshots of mountains and forests',
      id: 'from-the-trail',
      items: hikes,
      label: 'From the trail',
      tag: 'Landscape',
    },
    {
      description: 'Pictures from travels near and far',
      id: 'destinations',
      items: destinations,
      label: 'Destinations',
      tag: 'Cityscape',
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading} id="albums">
        <span className={styles.start}>
          <span className={styles.index}>
            [ 00-02 ]
          </span>
          <span className={styles.label}>Albums</span>
        </span>
        <span className={styles.subheading}>
          My photographic journal since 2015
        </span>
      </h2>
      <ul className={styles.categories}>
        {categories.map((category, index: number) => (
          <li className={styles.category} key={category.label}>
            <h3 className={styles.summary} id={category.id}>
              <span className={styles.start}>
                <span className={styles.index}>
                  [ 00-02.{padIndex(index + 1)} ]
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
                    [ 00-02.{padIndex(index + 1)}.{padIndex(key + 1)} ]
                  </span>
                  <Link className={styles.link} href={`/albums/${item.id}`}>
                    <span className={styles.title}>
                      {item.title}
                      <ArrowRight className={styles.arrow} />
                    </span>
                    <ul className={styles.stats}>
                      <li>{item.when}</li>
                      <li>{item.count} images</li>
                      <li>{category.tag}</li>
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
