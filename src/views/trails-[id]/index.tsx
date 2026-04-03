import Link from 'next/link';

import {
  Header,
  HeaderEyebrow,
  HeaderPrefix,
  HeaderSubtitle,
} from '@/ui/header';
import Introduction from '@/ui/introduction';
import { Highlight } from '@/ui/typography';
import { Length } from '@/ui/units';
import type { Stat } from '@/types';

import Footer from './footer';
import Route from './route';
import styles from './stylesheet';
import type { Stage } from './types';

type Props = {
  data: {
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
    stages: Stage[];
    start: Stat;
    title: string;
    type: string;
    when: string;
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
        <HeaderEyebrow>[ 02-{getPrefix(data.type)} {data.id.split('-').pop()} ]</HeaderEyebrow>
        <HeaderPrefix>trails/</HeaderPrefix>{data.title}
        <HeaderSubtitle>{data.type}</HeaderSubtitle>
      </Header>
      <Introduction>
        <Highlight>{data.description}</Highlight>
      </Introduction>
      <Link className={styles.album} href={`/gallery/${data.albumId}`}>
        <Highlight>VIEW ALBUM</Highlight>
        <span className={styles.lid}>{data.stages.length} Photos</span>
      </Link>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          <span className={styles.eyebrow}>[ 00-01 ]</span>
          Info
        </h2>
        <ul className={styles.items}>
          <li className={styles.item}>
            Continent
            <span className={styles.value}>{data.continent}</span>
          </li>
          <li className={styles.item}>
            Location
            <span className={styles.value}>{data.location}</span>
          </li>
          <li className={styles.item}>
            Coordinates
            <span className={styles.value}>{data.coordinates}</span>
          </li>
          <li className={styles.item}>
            When
            <span className={styles.value}>{data.when}</span>
          </li>
          <li className={styles.item}>
            Start
            <span className={styles.value}>{data.start.value.basic}</span>
          </li>
          <li className={styles.item}>
            End
            <span className={styles.value}>{data.end.value.basic}</span>
          </li>
          <li className={styles.item}>
            Days
            <span className={styles.value}>{data.days}</span>
          </li>
          <li className={styles.item}>
            Miles
            <span className={styles.value}>
              <Length value={data.distance.value.complex} />
            </span>
          </li>
          <li className={styles.item}>
            Max altitude
            <span className={styles.value}>
              <Length isSmall value={data.altitudeMax.value.complex} />
            </span>
          </li>
          <li className={styles.item}>
            Elevation gain
            <span className={styles.value}>
              <Length isSmall value={data.elevationGain.value.complex} />
            </span>
          </li>
          <li className={styles.item}>
            Elevation loss
            <span className={styles.value}>
              <Length isSmall value={data.elevationLoss.value.complex} />
            </span>
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          <span className={styles.eyebrow}>[ 00-02 ]</span>
          Route
        </h2>
        <Route stages={data.stages} />
      </section>
      <Footer type={data.type} />
    </>
  );
}
