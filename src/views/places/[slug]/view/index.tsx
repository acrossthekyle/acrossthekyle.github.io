import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { Image, ImageCaption, ImageFigure } from '@/ui/image';
import { Map, MapMarker } from '@/ui/map';

import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout>
      <h1 className={styles.header}>
        <strong>{data.title}</strong>
        <small>
          {data.location} &mdash; {data.date}
        </small>
      </h1>
      {data.hasGear && (
        <Link className="cta" href={`${data.slug}/gear`}>
          GEAR
        </Link>
      )}
      <Map>
        <MapMarker position={data.position} />
      </Map>
      <section aria-label="information">
        {data.description.map((paragraph) => (
          <p key={paragraph}>
            {paragraph}
          </p>
        ))}
      </section>
      <section aria-label={`photo journal entries for each ${data.label.toLowerCase()}`}>
        <ul className={styles.list}>
          {data.stages.map((stage, index: number) => (
            <li className={styles.item(index, data.total)} key={stage.index}>
              <ImageFigure className={styles.figure}>
                <Link href={`/places/${data.slug}/${stage.index}`}>
                  <Image
                    alt=""
                    className={styles.image}
                    height={432}
                    sizes="(max-width: 768px) 32vw, 40vw"
                    src={stage.image}
                    width={768}
                  />
                  <ImageCaption>
                    {data.label} #{stage.index}
                  </ImageCaption>
                </Link>
              </ImageFigure>
            </li>
          ))}
        </ul>
      </section>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">
              ../
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link href="/places">
              places
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </Layout>
  );
}
