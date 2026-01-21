import Link from 'next/link';

import { Layout } from '@/layout';
import { Badge } from '@/ui/badge';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbTruncate,
} from '@/ui/breadcrumbs';
import { DateRange } from '@/ui/date';
import { Image, ImageFigure } from '@/ui/image';
import { LinkStacked } from '@/ui/link';

import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout group="experiences">
      <header>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/" id="skip-to">
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href="/experiences">
                Experiences
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                <BreadcrumbTruncate text={data.title.join(' ')} />
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1>
          <Badge canHover>
            <Link
              className={styles.badge}
              href={`/experiences/terminology#${data.type.replace(' ', '-')}`}
              title={`Learn more about ${data.type}s`}
            >
              {data.type}
            </Link>
          </Badge>
          <strong>
            {data.title.join(' ')}
          </strong>
          <small className={styles.subtitle}>
            {data.location} &mdash; <DateRange date={data.date} />
          </small>
        </h1>
        {data.description.map((paragraph) => (
          <p key={paragraph}>
            {paragraph}
          </p>
        ))}
      </header>
      <p>
        Photos and journal entries for each {data.label}:
      </p>
      <ul className={styles.list}>
        {data.stages.map((stage, index: number) => (
          <li className={styles.item(index, data.total)} key={stage.index}>
            <ImageFigure className={styles.figure}>
              <Link href={`/experiences/${data.slug}/${stage.index}`}>
                <Image
                  alt=""
                  className={styles.image}
                  height={1080}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  src={stage.image}
                  width={1920}
                />
              </Link>
            </ImageFigure>
          </li>
        ))}
      </ul>
      {data.hasGear && (
        <LinkStacked href={`${data.slug}/gear`}>
          <strong>Gear list</strong>
          <small>View the gear used on this {data.type}</small>
          <small className={styles.subtitle}>
            Base weight: {data.gearWeight} lbs
          </small>
        </LinkStacked>
      )}
    </Layout>
  );
}
