import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbTruncate,
} from '@/ui/breadcrumbs';
import { Image, ImageFigure } from '@/ui/image';

import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout group="wanderings">
      <header>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href="/wanderings">
                Wanderings
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
          <strong>{data.title.join(' ')}</strong>
          <small>{data.date}</small>
        </h1>
        {data.description.map((paragraph) => (
          <p key={paragraph}>
            {paragraph}
          </p>
        ))}
      </header>
      <ul className="grid grid-cols-3 sm:grid-cols-4 gap-4">
        {data.stages.map((stage, index: number) => (
          <li key={stage.index}>
            <Link
              href={`/wanderings/${data.slug}/${stage.index}`}
              id={index === 0 ? 'skip-to' : undefined}
            >
              <ImageFigure className="duration-300 hover:scale-120">
                <Image
                  alt={stage.termini.end.words.join(' ')}
                  className="!aspect-square"
                  height={1080}
                  index={index}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src={stage.image}
                  width={1920}
                />
              </ImageFigure>
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
