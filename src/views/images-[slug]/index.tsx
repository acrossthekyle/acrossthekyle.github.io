import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { Image, ImageFigure } from '@/ui/image';
import { Heading, Small, Strong } from '@/ui/typography';

import Caption from './caption';
import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">
              ..
            </Link>
          </BreadcrumbItem>
          {data.back.map(({ text, uri }) => (
            <BreadcrumbItem key={uri}>
              <Link href={uri}>
                {text}
              </Link>
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <Heading>
        <Strong>{data.title}</Strong>
        <Small>{data.subTitle}</Small>
      </Heading>
      <ImageFigure>
        <Image size="large" src={data.src} />
        <Caption src={data.src} />
      </ImageFigure>
      {data.hasNavigation && (
        <nav aria-label="image supplementary navigation" className={styles.nav}>
          {!!data.previous && (
            <Link href={`/images/${data.previous}`}>
              Previous
            </Link>
          )}
          {!!data.next && (
            <Link href={`/images/${data.next}`}>
              Next
            </Link>
          )}
        </nav>
      )}
    </Layout>
  );
}

