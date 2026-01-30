import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbTruncate,
} from '@/ui/breadcrumbs';
import { DateRange } from '@/ui/date';
import { Image, ImageCaption, ImageFigure } from '@/ui/image';
import { LinkButton } from '@/ui/link';

import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout group="trails-and-travels">
      <header>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem highlight>
              <Link href="/trails-and-travels">
                <BreadcrumbTruncate text="Trails and Travels" />
              </Link>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1>
          <strong>{data.title.join(' ')}</strong>
          <small>
            <em>
              {data.location}, <DateRange date={data.date} />
            </em>
          </small>
        </h1>
        {data.hasGear && (
          <LinkButton className={styles.gear} href={`${data.slug}/gear`}>
            View gear
          </LinkButton>
        )}
      </header>
      {data.description.map((paragraph) => (
        <p key={paragraph}>
          {paragraph}
        </p>
      ))}
      <p>
        Photos and journal entries for each {data.label.toLowerCase()}:
      </p>
      <ul className={styles.list}>
        {data.stages.map((stage, index: number) => (
          <li className={styles.item(index, data.total)} key={stage.index}>
            <ImageFigure className={styles.figure}>
              <Link href={`/trails-and-travels/${data.slug}/${stage.index}`}>
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
    </Layout>
  );
}
