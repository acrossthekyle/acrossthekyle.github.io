import Link from 'next/link';

import { Layout } from '@/layout';
import { route } from '@/routes';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { Image } from '@/ui/image';
import { Heading, Small, Strong } from '@/ui/typography';

import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data[];
};

export default function View({ data }: Props) {
  return (
    <Layout>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">
              ../
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Heading>
        <Strong>{route('snapshots').text}</Strong>
        <Small>{route('snapshots').subtitle}</Small>
      </Heading>
      {data.map((item) => (
        <Link
          className={styles.link}
          href={`/images/photos/${item.slug}/${item.index}`}
          key={item.src}
        >
          <Image src={item.src} />
        </Link>
      ))}
    </Layout>
  );
}
