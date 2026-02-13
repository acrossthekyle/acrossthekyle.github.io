import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { Map, MapMarker } from '@/ui/map';

import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data[];
};

export default function View({ data }: Props) {
  const positions = data.map(({ position }) => position);

  return (
    <Layout>
      <h1>
        <strong>Places</strong>
        <small>Trails and travels</small>
      </h1>
      <Map>
        {positions.map((position, index) => (
          <MapMarker key={index} position={position} />
        ))}
      </Map>
      <p>
        From Nepal's Himalayas to windswept Patagonia, I've thru-hiked a lot of miles, explored numerous destinations, and seen some amazing things.
      </p>
      <nav aria-label="supplementary navigation">
        <ol className="index">
          {data.map((item) => (
            <li className={styles.item} key={item.index}>
              <Link
                className="backdrop"
                href={`/places/${item.slug}`}
              >
                <span className="tag">#{item.index}</span>
                <span className={styles.title}>
                  {item.title} {item.date}
                </span>
                <small className="!capitalize">
                  {item.location} • {item.type}
                </small>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">
              ../
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </Layout>
  );
}
