import Link from 'next/link';

import { Main } from '@/layout';
import {
  Header,
  HeaderEyebrow,
  HeaderSubtitle,
  HeaderText,
} from '@/ui/header';
import { padIndex } from '@/utils';

import styles from './stylesheet';

type Props = {
  data: Array<{
    coordinates: string;
    id: string;
    location: string;
    title: string;
    type: string;
    when: string;
  }>;
};

export default function View({ data }: Props) {
  return (
    <Main>
      <Header>
        <HeaderEyebrow>[ 02 ]</HeaderEyebrow>
        <HeaderText>Trails</HeaderText>
        <HeaderSubtitle>Hikes and summits</HeaderSubtitle>
      </Header>
      <p className={styles.description}>
        Since 2015 <span className={styles.highlight}>I've travelled</span> to nearly every continent on <span className={styles.highlight}>our planet</span> called Earth, and completed several thru-hikes on most of them. I'm also working on bagging all of the Colorado 14er peaks. <span className={styles.highlight}>This is</span> a collection of <span className={styles.highlight}>those experiences</span>.
      </p>
      <aside className={styles.aside}>
        See you out there
      </aside>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          <span className={styles.eyebrow}>[ 02-01 ]</span>
          Thru-hikes
        </h2>
        <ul className={styles.items}>
          {data.filter((item) => item.type === 'thru-hike').map((item, index: number) => (
            <li className={styles.item} key={item.when}>
              <span className={styles.index}>[ 02-01-TH{padIndex(index + 1)} ]</span>
              <Link className={styles.link} href={`/trails/${item.id}`}>
                {item.title}
                <span className={styles.lid}>
                  <span className={styles.highlight}>{item.when}</span>
                </span>
                <span className={styles.lid}>{item.coordinates}</span>
                <span className={styles.lid}>
                  <span className={styles.highlight}>{item.location}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          <span className={styles.eyebrow}>[ 02-02 ]</span>
          Section hikes
        </h2>
        <ul className={styles.items}>
          {data.filter((item) => item.type === 'section hike').map((item, index: number) => (
            <li className={styles.item} key={item.when}>
              <span className={styles.index}>[ 02-02-SH{padIndex(index + 1)} ]</span>
              <Link className={styles.link} href={`/trails/${item.id}`}>
                {item.title}
                <span className={styles.lid}>
                  <span className={styles.highlight}>{item.when}</span>
                </span>
                <span className={styles.lid}>{item.coordinates}</span>
                <span className={styles.lid}>
                  <span className={styles.highlight}>{item.location}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          <span className={styles.eyebrow}>[ 02-03 ]</span>
          Weekend hikes
        </h2>
        <ul className={styles.items}>
          {data.filter((item) => item.type === 'weekend hike').map((item, index: number) => (
            <li className={styles.item} key={item.when}>
              <span className={styles.index}>[ 02-03-WH{padIndex(index + 1)} ]</span>
              <Link className={styles.link} href={`/trails/${item.id}`}>
                {item.title}
                <span className={styles.lid}>
                  <span className={styles.highlight}>{item.when}</span>
                </span>
                <span className={styles.lid}>{item.coordinates}</span>
                <span className={styles.lid}>
                  <span className={styles.highlight}>{item.location}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.section}>
        <h2 className={styles.heading}>
          <span className={styles.eyebrow}>[ 02-04 ]</span>
          Summits
        </h2>
        <ul className={styles.items}>
          {data.filter((item) => item.type === 'summit').map((item, index: number) => (
            <li className={styles.item} key={item.when}>
              <span className={styles.index}>[ 02-04-SU{padIndex(index + 1)} ]</span>
              <Link className={styles.link} href={`/trails/${item.id}`}>
                {item.title}
                <span className={styles.lid}>
                  <span className={styles.highlight}>{item.when}</span>
                </span>
                <span className={styles.lid}>{item.coordinates}</span>
                <span className={styles.lid}>
                  <span className={styles.highlight}>{item.location}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Main>
  );
}
