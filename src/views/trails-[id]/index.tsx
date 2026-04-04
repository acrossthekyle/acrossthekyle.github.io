import Link from 'next/link';

import {
  Header,
  HeaderEyebrow,
  HeaderPrefix,
  HeaderSubtitle,
} from '@/ui/header';
import Introduction from '@/ui/introduction';
import { Map, MapMarker } from '@/ui/map';
import { Highlight } from '@/ui/typography';
import { Length } from '@/ui/units';
import type { Stat } from '@/types';

import Footer from './footer';
import Route from './route';
import styles from './stylesheet';
import type { Stage } from './types';

type Props = {
  data: {
    more: Array<{
      albumId: string;
      coordinates: string;
      id: string;
      location: string;
      title: string;
      type: string;
      when: string;
    }>;
    photos: number;
    trail: {
      albumId: string;
      altitudeMax: Stat;
      continent: string;
      coordinates: string;
      days: string;
      description: string;
      distance: Stat;
      elevationGain: Stat;
      elevationLoss: Stat;
      end: Stat;
      id: string;
      location: string;
      position: string[];
      stages: Stage[];
      start: Stat;
      title: string;
      type: string;
      when: string;
    };
  };
};

function getPrefix(type: string) {
  switch (type) {
    case 'section hike':
      return 'SH';
    case 'thru-hike':
      return 'TH';
    case 'weekend hike':
      return 'WH';
    case 'summit':
    default:
      return 'SU';
  }
}

export default function View({ data }: Props) {
  return (
    <>
      <Header>
        <HeaderEyebrow>[ 02-{getPrefix(data.trail.type)} {data.trail.id.split('-').pop()} ]</HeaderEyebrow>
        <HeaderPrefix>trails/</HeaderPrefix>{data.trail.title}
        <HeaderSubtitle>{data.trail.type}</HeaderSubtitle>
      </Header>
      <Introduction>
        <Highlight>{data.trail.description}</Highlight>
      </Introduction>
      <Map className={styles.map}>
        <MapMarker position={{
          left: data.trail.position[1],
          top: data.trail.position[0],
        }} />
      </Map>
      <Link className={styles.album} href={`/gallery/${data.trail.albumId}`}>
        <Highlight>VIEW ALBUM</Highlight>
        <span className={styles.lid}>{data.photos} Photos</span>
      </Link>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          <span className={styles.eyebrow}>[ 00-01 ]</span>
          Info
        </h2>
        <ul className={styles.items}>
          <li className={styles.item}>
            Continent
            <span className={styles.value}>{data.trail.continent}</span>
          </li>
          <li className={styles.item}>
            Location
            <span className={styles.value}>{data.trail.location}</span>
          </li>
          <li className={styles.item}>
            Coordinates
            <span className={styles.value}>{data.trail.coordinates}</span>
          </li>
          <li className={styles.item}>
            When
            <span className={styles.value}>{data.trail.when}</span>
          </li>
          <li className={styles.item}>
            Start
            <span className={styles.value}>{data.trail.start.value.basic}</span>
          </li>
          <li className={styles.item}>
            End
            <span className={styles.value}>{data.trail.end.value.basic}</span>
          </li>
          <li className={styles.item}>
            Days
            <span className={styles.value}>{data.trail.days}</span>
          </li>
          <li className={styles.item}>
            Miles
            <span className={styles.value}>
              <Length value={data.trail.distance.value.complex} />
            </span>
          </li>
          <li className={styles.item}>
            Max altitude
            <span className={styles.value}>
              <Length isSmall value={data.trail.altitudeMax.value.complex} />
            </span>
          </li>
          <li className={styles.item}>
            Elevation gain
            <span className={styles.value}>
              <Length isSmall value={data.trail.elevationGain.value.complex} />
            </span>
          </li>
          <li className={styles.item}>
            Elevation loss
            <span className={styles.value}>
              <Length isSmall value={data.trail.elevationLoss.value.complex} />
            </span>
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          <span className={styles.eyebrow}>[ 00-02 ]</span>
          Route
        </h2>
        <Route stages={data.trail.stages} />
      </section>
      <Footer more={data.more} />
    </>
  );
}
