import Link from 'next/link';

import { Content } from '@/layout';
import Divider from '@/ui/divider';
import {
  Header,
  HeaderPrefix,
  HeaderSubtitle,
  HeaderText,
} from '@/ui/header';
import { padIndex } from '@/utils';

import Footer from './footer';
import Route from './route';
import styles from './stylesheet';
import type { More, Trail } from './types';

type Props = {
  data: {
    index: number;
    more: More[];
    trail: Trail;
  };
};

export default function View({ data }: Props) {
  return (
    <Content className={styles.container}>
      <div className={styles.header}>
        <Header>
          <Link href="/trails">
            <HeaderPrefix>Trails</HeaderPrefix>
          </Link>
          <HeaderText>
            T-{padIndex(data.index)}
          </HeaderText>
          <HeaderSubtitle>
            {data.trail.title} {data.trail.type}
          </HeaderSubtitle>
        </Header>
        <aside aria-label="trail stats and info" className={styles.aside}>
          <span>{data.trail.when}</span>
          <span>{data.trail.location}, {data.trail.continent}</span>
          <span>{data.trail.coordinates}</span>
        </aside>
      </div>
      <Route trail={data.trail} />
      {/*<Divider />
      <Footer more={data.more} />*/}
    </Content>
  );
}
