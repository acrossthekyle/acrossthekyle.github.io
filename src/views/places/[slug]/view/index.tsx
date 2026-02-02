import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { DateRange } from '@/ui/date';
import { Image, ImageCaption, ImageFigure } from '@/ui/image';

import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout>
      <h1>
        <strong>{data.title.join(' ')}</strong>
        <small>
          {data.location} &mdash; <DateRange date={data.date} preview/>
        </small>
      </h1>
      <section aria-label="information">
        {data.description.map((paragraph) => (
          <p key={paragraph}>
            {paragraph}
          </p>
        ))}
      </section>
      <section>
        <h2>
          Photos and journal entries for each {data.label.toLowerCase()}:
        </h2>
        <ul className={styles.list}>
          {data.stages.map((stage, index: number) => (
            <li className={styles.item(index, data.total)} key={stage.index}>
              <ImageFigure className={styles.figure}>
                <Link href={`/places/${data.slug}/${stage.index}`}>
                  <Image
                    alt=""
                    className={styles.image}
                    height={1080}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    src={stage.image}
                    width={1920}
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
