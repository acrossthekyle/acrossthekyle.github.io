import Link from 'next/link';

import {
  Header,
  HeaderEyebrow,
  HeaderSubtitle,
} from '@/ui/header';
import Introduction from '@/ui/introduction';
import { Highlight } from '@/ui/typography';
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
    <>
      <Header>
        <HeaderEyebrow>[ 02 ]</HeaderEyebrow>
        Trails
        <HeaderSubtitle>Hikes and summits</HeaderSubtitle>
      </Header>
      <Introduction>
        Since 2015 <Highlight>I've travelled</Highlight> to nearly every continent on <Highlight>our planet</Highlight> called Earth, and completed several thru-hikes on most of them. I'm also working on bagging all of the Colorado 14er peaks. <Highlight>This is</Highlight> a collection of <Highlight>those experiences</Highlight>.
      </Introduction>
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
                  <Highlight>{item.when}</Highlight>
                </span>
                <span className={styles.lid}>{item.coordinates}</span>
                <span className={styles.lid}>
                  <Highlight>{item.location}</Highlight>
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
                  <Highlight>{item.when}</Highlight>
                </span>
                <span className={styles.lid}>{item.coordinates}</span>
                <span className={styles.lid}>
                  <Highlight>{item.location}</Highlight>
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
                  <Highlight>{item.when}</Highlight>
                </span>
                <span className={styles.lid}>{item.coordinates}</span>
                <span className={styles.lid}>
                  <Highlight>{item.location}</Highlight>
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
                  <Highlight>{item.when}</Highlight>
                </span>
                <span className={styles.lid}>{item.coordinates}</span>
                <span className={styles.lid}>
                  <Highlight>{item.location}</Highlight>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
