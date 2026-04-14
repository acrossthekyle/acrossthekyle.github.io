import { ArrowRight } from 'lucide-react';

import { Content } from '@/layout';
import {
  Header,
  HeaderEyebrow,
  HeaderSubtitle,
  HeaderText,
} from '@/ui/header';
import { Map, MapMarker } from '@/ui/map';
import { Length } from '@/ui/units';
import { padIndex } from '@/utils';
import type { Stat } from '@/types';

import Aside from './aside';
import Context from './context';
import Link from './cta';
import styles from './stylesheet';
import type { Trail } from './types';

type Props = {
  data: {
    days: number;
    distance: {
      imperial: string;
      metric: string;
    };
    trails: Trail[];
  };
};

export default function View({ data }: Props) {
  const thruHikes = data.trails.filter((item) => item.type === 'thru-hike');
  const sectionHikes = data.trails.filter((item) => item.type === 'section hike');
  const weekendHikes = data.trails.filter((item) => item.type === 'weekend hike');
  const summits = data.trails.filter((item) => item.type === 'summit');

  const categories = [
    {
      description: 'End-to-end long-distance trails',
      items: thruHikes,
      label: 'Thru-hikes',
    },
    {
      description: 'Long-distance trail segments',
      items: sectionHikes,
      label: 'Section hikes',
    },
    {
      description: 'Overnight loops/out-and-backs',
      items: weekendHikes,
      label: 'Weekend hikes',
    },
    {
      description: 'Mountain peaks above the treeline',
      items: summits,
      label: 'Summits',
    },
  ];

  return (
    <Content>
      <div className={styles.header}>
        <Header>
          <HeaderEyebrow>./</HeaderEyebrow>
          <HeaderText>
            Trails
          </HeaderText>
          <HeaderSubtitle>
            Hikes and summits
          </HeaderSubtitle>
        </Header>
        <span className="text-right">
          {data.trails.length} trails<br />
          <Length value={data.distance} /><br />
          {data.days} days
        </span>
      </div>
      <Context>
        <Aside trails={data.trails} />
        {categories.map((category, index: number) => (
          <section className={styles.section} key={category.label}>
            <h2 className={styles.heading}>
              <span className={styles.label}>{category.label}</span>
              <span className={styles.subheading}>
                {category.description}
              </span>
            </h2>
            <ul className={styles.items}>
              {category.items.map((item, key: number) => (
                <li className={styles.item} key={item.id}>
                  <span className={styles.index}>
                    [ 00-{padIndex(index + 1)}.{padIndex(key + 1)} ]
                  </span>
                  <Link id={item.id}>
                    <span className={styles.title}>
                      {item.title} <ArrowRight className={styles.arrow} />
                    </span>
                    <ul className={styles.stats}>
                      <li>{item.when}</li>
                      <li>{item.location}</li>
                      <li>
                        <Length value={item.distance.value.complex} />
                      </li>
                      <li>
                        {item.duration}
                      </li>
                    </ul>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </Context>
    </Content>
  );
}
