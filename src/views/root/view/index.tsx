import { Layout } from '@/layout';
import { DateRange } from '@/ui/date';
import { LinkItalic, LinkStacked } from '@/ui/link';

import { TIMELINE } from './constants';
import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data[];
};

export default function View({ data }: Props) {
  return (
    <Layout group="home">
      <header>
        <h1>
          <strong>
            Kyle Gilbert
          </strong>
          <small>
            <em>Codewanderer</em>
          </small>
        </h1>
      </header>
      <section>
        <p>
          Hey, my name's Kyle.
        </p>
        <p>
          I'm based in <em>Chicago</em> with my partner, and our dog Dax, on the lands of the <em>Potawatomi</em>, <em>Ojibwe</em>, and <em>Odawa</em>.
        </p>
        <p>
          By day, I build web apps as a self-taught software engineer because making things with code thrills me to no end. By trail, I explore the world &ndash; from Nepal's Himalayas to windswept Patagonia &ndash; carrying everything I need on my back.
        </p>
        <p>
          Experiencing new sights and sounds keeps me moving, and nothing inspires me more than leaving the crowded city behind and heading into nature.
        </p>
        <p>
          I thru-hiked my first trail in 2018 called the Camino, in Spain. It took me 32 days to walk from the Pyrenees mountains in the east to the Atlantic ocean in the west, and it was unforgetable.
        </p>
        <p>
          Here's a brief history of my life so far:
        </p>
        <ul className={styles.timeline}>
          {TIMELINE.map(({ paragraph, title, year }) => (
            <li className={styles.item} key={year}>
              <span className={styles.year}>{year}</span>
              <div className={styles.line}>
                <div className={styles.dot} />
              </div>
              <p className={styles.description}>
                <strong className={styles.title}>
                  {title}
                </strong>
                {!!paragraph && (
                  <span className={styles.text}>
                    {paragraph}
                  </span>
                )}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>
          <strong>Recent experiences</strong>
        </h2>
        <nav aria-label="trails and travels navigation">
          <ul className={styles.list}>
            {data.map((item) => (
              <li key={item.index}>
                <LinkStacked href={`/trails-and-travels/${item.slug}`}>
                  <strong>
                    <span className={styles.index}>
                      #{item.index}
                    </span>
                    {item.title.join(' ')}
                  </strong>
                  <small>
                    <em>{item.location}, <DateRange date={item.date} /></em>
                  </small>
                </LinkStacked>
              </li>
            ))}
          </ul>
        </nav>
        <br />
        <LinkItalic href="/trails-and-travels">View more</LinkItalic>
      </section>
    </Layout>
  );
}
