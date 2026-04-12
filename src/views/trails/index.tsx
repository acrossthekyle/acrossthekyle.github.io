import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

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

import styles from './stylesheet';

type Props = {
  data: {
    days: number;
    distance: {
      imperial: string;
      metric: string;
    };
    trails: Array<{
      coordinates: string;
      distance: Stat;
      days: string;
      id: string;
      location: string;
      position: string[];
      title: string;
      type: string;
      when: string;
    }>
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
      <div className={styles.definition} role="presentation">
        <span>
          <Length value={data.distance} />
        </span>
        <span>{data.days} days</span>
        <span>
          {data.trails.filter((item) => item.type === 'summit').length} summits
        </span>
      </div>
      <Header>
        <HeaderEyebrow>[ 01 ]</HeaderEyebrow>
        <HeaderText>Trails</HeaderText>
        <HeaderSubtitle>Hikes and summits</HeaderSubtitle>
      </Header>
      <div className={styles.sticky}>
        <Map className={styles.map}>
          {data.trails.map(({ position }, index: number) => (
            <MapMarker
              key={index}
              position={{
                left: position[1],
                top: position[0],
              }}
            />
          ))}
        </Map>
      </div>
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
        </section>
      ))}
    </Content>
  );
}
