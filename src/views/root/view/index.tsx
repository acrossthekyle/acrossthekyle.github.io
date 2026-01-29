import { Layout } from '@/layout';
import { LinkItalic } from '@/ui/link';

import { TIMELINE } from './constants';
import styles from './stylesheet';

export default function View() {
  return (
    <Layout group="home">
      <header>
        <h1>
          <strong>
            Kyle Gilbert
          </strong>
          <small>
            <em>A backpacker and software engineer</em>
          </small>
        </h1>
      </header>
      <p>
        Hello!
      </p>
      <p>
        My name's Kyle and I'm based in <em>Chicago</em> with my partner, and our dog Dax, on the lands of the <em>Potawatomi</em>, <em>Ojibwe</em>, and <em>Odawa</em>.
      </p>
      <p>
        By day, I build web apps as a self-taught software engineer because making things with code thrills me to no end. By trail, I explore the world &ndash; from Nepal's Himalayas to windswept Patagonia &ndash; carrying everything I need on my back.
      </p>
      <p>Here's a brief history of my life so far, and how I ended up where I am:</p>
      <ul className={styles.list}>
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
      <p>
        I've thru-hiked a lot of miles and witnessed some amazing things. View the trails, and travels, that I've experienced over the years.
      </p>
      <LinkItalic href="/trails-and-travels">
        Trails and travels
      </LinkItalic>
      <br />
      <br />
      <p>
        Hiking and travelling is only part of who I am though, and the other half lives in the digital world. Browse my resume to know more about my day job.
      </p>
      <LinkItalic href="/resume">
        Resume
      </LinkItalic>
    </Layout>
  );
}
