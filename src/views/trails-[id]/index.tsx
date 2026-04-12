import Link from 'next/link';

import { Content } from '@/layout';
import type { Stat } from '@/types';
import Divider from '@/ui/divider';
import {
  Header,
  HeaderPrefix,
  HeaderSubtitle,
  HeaderText,
} from '@/ui/header';
import { ExternalIcon } from '@/ui/link';
import { Map, MapMarker } from '@/ui/map';
import { Length } from '@/ui/units';
import { padIndex } from '@/utils';

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

export default function View({ data }: Props) {
  return (
    <Content>
      <Header>
        <Link href="/trails">
          <HeaderPrefix>Trails</HeaderPrefix>
        </Link>
        <HeaderText>
          <span>{data.trail.title}</span>
          <span className="block italic text-lg mr-2 -mt-1.5 whitespace-nowrap">
            {data.trail.initials}{' '}
            <span className="text-tiny">{data.trail.when.split(' ').pop()}</span>
          </span>
        </HeaderText>
        <HeaderSubtitle>
          [ {data.trail.type} ]
        </HeaderSubtitle>
      </Header>









      {/*<section className={`${styles.section} ${styles.spacer}`}>
        <h2 className={styles.heading}>
          [Overview]
          <span className={styles.subheading}>
            Location + Stats
          </span>
        </h2>
        <ul className={styles.stats}>
          <li className={styles.stat}>
            <span className={styles.label}>[ Continent ]</span>
            {data.trail.continent}
          </li>
          <li className={styles.stat}>
            <span className={styles.label}>[ Location ]</span>
            {data.trail.location}
          </li>
          <li className={styles.stat}>
            <span className={styles.label}>[ Coordinates ]</span>
            {data.trail.coordinates}
          </li>
          <li className={styles.stat}>
            <span className={styles.label}>[ When ]</span>
            {data.trail.when}
          </li>
          <li className={styles.stat}>
            <span className={styles.label}>[ Start ]</span>
            {data.trail.start.value.basic}
          </li>
          <li className={styles.stat}>
            <span className={styles.label}>[ End ]</span>
            {data.trail.end.value.basic}
          </li>
          <li className={styles.stat}>
            <span className={styles.label}>[ Length ]</span>
            {data.trail.days} days
          </li>
          <li className={styles.stat}>
            <span className={styles.label}>[ Miles ]</span>
            <Length value={data.trail.distance.value.complex} />
          </li>
          <li className={styles.stat}>
            <span className={styles.label}>[ Max altitude ]</span>
            <Length isSmall value={data.trail.altitudeMax.value.complex} />
          </li>
          <li className={styles.stat}>
            <span className={styles.label}>[ Elevation gain ]</span>
            +<Length isSmall value={data.trail.elevationGain.value.complex} />
          </li>
          <li className={styles.stat}>
            <span className={styles.label}>[ Elevation loss ]</span>
            -<Length isSmall value={data.trail.elevationLoss.value.complex} />
          </li>
        </ul>
      </section>
      <Map className={styles.map}>
        <MapMarker position={{
          left: data.trail.position[1],
          top: data.trail.position[0],
        }} />
      </Map>
      <Divider />
      <section className={styles.section}>
        <h2 className={styles.heading}>
          [Route]
          <span className={styles.subheading}>
            {data.trail.stages.length} Stages
          </span>
        </h2>
        <ul className={styles.stages}>
          {data.trail.stages.map((stage, index: number) => (
            <li className={styles.stage} key={stage.when}>
              <span className={styles.index}>
                [ {padIndex(index + 1)}-{padIndex(data.trail.stages.length)} ]
              </span>
              <Link className={styles.link} href="/">
                {stage.termini}
                <span className={styles.lid}>
                  {stage.when}<br />
                  {stage.hours.value.basic}<br />
                  <Length value={stage.distance.value.complex} /><br />
                  {stage.location}<br />
                  {stage.coordinates}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <Divider />
      <Footer more={data.more} />*/}
    </Content>
  );
}
