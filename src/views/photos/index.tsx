import Link from 'next/link';

import { Layout } from '@/layout';
import { route } from '@/routes';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { Image } from '@/ui/image';

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
      <h1>
        <strong>{route('photos').text}</strong>
        <small>{route('photos').subtitle}</small>
      </h1>
      {data.map((item) => (
        <Link
          className={styles.link}
          href={`/images/photos/${item.slug}/${item.index}/${item.src}`}
          key={item.src}
        >
          <Image src={item.src} />
        </Link>
      ))}
    </Layout>
  );
}
