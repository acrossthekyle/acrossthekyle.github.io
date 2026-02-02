import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';

import { TIMELINE } from './constants';
import styles from './stylesheet';

export default function View() {
  return (
    <Layout>
      <h1>
        <strong>About</strong>
        <small>My backstory</small>
      </h1>
      <section aria-label="introduction">
        <p>
          Hello there. I'm Kyle: a millenial living in Chicago. Let's take a stroll down memory lane...
        </p>
      </section>
      <section aria-label="timeline">
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
                  <small>
                    {paragraph}
                  </small>
                )}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <section aria-label="about">
        <p>
          I like to explore the world &mdash; and I've been to many <Link href="/places"><u>places</u></Link>, from Nepal's Himalayas to windswept Patagonia. My first adventure was a 32-day thru-hike of the Camino de Santiago: a long-distance trail across Northern Spain.
        </p>
        <p>
          Between adventures, I build web and mobile apps as a self-taught software engineer because making things with code thrills me to no end. Feel free to browse my <Link href="/resume"><u>resume</u></Link>.
        </p>
        <p>
          Occasionally I'll write <Link href="/words"><u>words</u></Link> about thoughts, opinions, or reflections on this website, and share <Link href="/photos"><u>photos</u></Link> from daily life.
        </p>
      </section>
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
