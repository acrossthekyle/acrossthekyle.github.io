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
        <HeaderEyebrow>[ 02 ]</HeaderEyebrow>
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
      <section aria-label="introduction" className={styles.intro}>
        <p className={styles.paragraph}>
          Since 2015 I've travelled to nearly every continent on our planet called Earth, and completed several thru-hikes on most of them. I'm also working on bagging all of the Colorado 14er peaks. This is a collection of those experiences.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          Thru-hikes
          <span className={styles.subheading}>
            End-to-end long-distance trails
          </span>
        </h2>
        <ul className={styles.items}>
          {data.trails.filter((item) => item.type === 'thru-hike').map((item, index: number) => (
            <li className={styles.item} key={item.when}>
              <span className={styles.index}>[ TH-{padIndex(index + 1)} ]</span>
              <Link className={styles.link} href={`/trails/${item.id}`}>
                {item.title}
                <span className={styles.lid}>
                  {item.when}<br />
                  {item.coordinates}<br />
                  {item.location}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          Section hikes
          <span className={styles.subheading}>
             Long-distance trail segments
          </span>
        </h2>
        <ul className={styles.items}>
          {data.trails.filter((item) => item.type === 'section hike').map((item, index: number) => (
            <li className={styles.item} key={item.when}>
              <span className={styles.index}>[ SH-{padIndex(index + 1)} ]</span>
              <Link className={styles.link} href={`/trails/${item.id}`}>
                {item.title}
                <span className={styles.lid}>
                  {item.when}<br />
                  {item.coordinates}<br />
                  {item.location}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          Weekend hikes
          <span className={styles.subheading}>
            Overnight loops/out-and-backs
          </span>
        </h2>
        <ul className={styles.items}>
          {data.trails.filter((item) => item.type === 'weekend hike').map((item, index: number) => (
            <li className={styles.item} key={item.when}>
              <span className={styles.index}>[ WH-{padIndex(index + 1)} ]</span>
              <Link className={styles.link} href={`/trails/${item.id}`}>
                {item.title}
                <span className={styles.lid}>
                  {item.when}<br />
                  {item.coordinates}<br />
                  {item.location}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          Summits
          <span className={styles.subheading}>
            Mountain peaks above the treeline
          </span>
        </h2>
        <ul className={styles.items}>
          {data.trails.filter((item) => item.type === 'summit').map((item, index: number) => (
            <li className={styles.item} key={item.when}>
              <span className={styles.index}>[ SU-{padIndex(index + 1)} ]</span>
              <Link className={styles.link} href={`/trails/${item.id}`}>
                {item.title}
                <span className={styles.lid}>
                  {item.when}<br />
                  {item.coordinates}<br />
                  {item.location}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Content>
  );
}
