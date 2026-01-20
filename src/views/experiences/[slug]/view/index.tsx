import { CircleQuestionMark } from 'lucide-react';
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
import { Image } from '@/ui/image';

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
          <strong>
            {data.title.join(' ')}
          </strong>
          <Badge canHover>
            <Link
              className={styles.badge}
              href={`/experiences/terminology#${data.type.replace(' ', '-')}`}
              title={`Learn more about ${data.type}s`}
            >
              {data.type} <CircleQuestionMark className={styles.icon} />
            </Link>
          </Badge>
          <small>{data.location}</small>
          <small className={styles.date}>{data.date}</small>
        </h1>
        {data.description.map((paragraph) => (
          <p key={paragraph}>
            {paragraph}
          </p>
        ))}
      </header>
      <h2>
        <strong className={styles.meta}>Travelogue</strong>
        <small>A catalog of this {data.type}</small>
      </h2>
      <ul className={styles.list}>
        {data.stages.map((stage) => (
          <li key={stage.index}>
            <Link
              className={styles.link}
              href={`/experiences/${data.slug}/${stage.index}`}
            >
              <Image
                alt={stage.termini.end.words.join(' ')}
                className={styles.image}
                height={1080}
                sizes="(max-width: 768px) 100vw, 50vw"
                src={stage.image}
                width={1920}
              />
            </Link>
          </li>
        ))}
      </ul>
      {data.hasGear && (
        <Link
          className="stacked-link"
          href={`${data.slug}/gear`}
        >
          <strong>Gear</strong>
          <small>Pack, shelter, clothing</small>
        </Link>
      )}
    </Layout>
  );
}
