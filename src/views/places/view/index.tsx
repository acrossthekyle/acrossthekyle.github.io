import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { DateRange } from '@/ui/date';
import { LinkList, LinkStacked, LinkTag } from '@/ui/link';
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
      <section aria-label="introduction">
        <p>
          From Nepal's Himalayas to windswept Patagonia, I've thru-hiked a lot of miles, explored numerous destinations, and seen some amazing things.
        </p>
      </section>
      <nav aria-label="places supplementary navigation">
        <LinkList>
          {data.map((item) => (
            <li className={styles.item} key={item.index}>
              <LinkStacked href={`/places/${item.slug}`}>
                <span className={styles.title}>{item.title.join(' ')}</span>
                <small>
                  {item.location} &mdash; <DateRange date={item.date} preview />
                </small>
              </LinkStacked>
              <LinkTag
                href={`/wiki?type=${item.type.replace(' ', '-')}`}
                isModal
              >
                {item.type}
              </LinkTag>
            </li>
          ))}
        </LinkList>
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
