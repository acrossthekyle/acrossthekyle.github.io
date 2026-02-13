import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';

import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data[];
};

export default function View({ data }: Props) {
  return (
    <Layout>
      <h1>
        <strong>Gear</strong>
        <small>What I carry</small>
      </h1>
      <p>
        From Spain to the TMB, and from Nepal to Patagonia, this is a list of the various gear that I've carried with me on my backpacking trips.
      </p>
      <nav aria-label="supplementary navigation">
        <ol className="index">
          {data.map((item) => (
            <li className={styles.item} key={item.index}>
              <Link className="backdrop" href={`/gear/${item.slug}`}>
                <span className="tag">#{item.index}</span>
                <span className={styles.title}>
                  {item.title} {item.date}
                </span>
                <small>
                  Base weight: {item.base} lbs
                </small>
              </Link>
            </li>
          ))}
        </ol>
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
