import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { Image, ImageFigure, ImageCaption } from '@/ui/image';

import { TIMELINE } from './constants';
import styles from './stylesheet';

export default function View() {
  return (
    <Layout>
      <h1>
        <strong>About</strong>
        <small>My backstory</small>
      </h1>
      <ImageFigure className={styles.figure}>
        <Image
          alt=""
          height={432}
          sizes="(max-width: 768px) 33vw, 50vw"
          src="7e8b11cd-c9b4-497d-82fe-dbd4f4dc3114.jpeg"
          width={768}
        />
        <ImageCaption>
          Annapurna Circuit, Nepal &mdash; 2019
        </ImageCaption>
      </ImageFigure>
      <section aria-label="introduction">
        <p>
          I'm Kyle: a millenial living in Chicago (Potawatomi, Ojibwe, and Odawa lands).
        </p>
        <p>
          From my homebase I explore the world &mdash; and I've been to many <Link href="/places"><u>places</u></Link>, from Nepal's Himalayas to the Towers of Patagonia. My first adventure was a 32-day thru-hike of the Camino de Santiago: a long-distance trail across Northern Spain.
        </p>
        <p>
          Between adventures, I build web and mobile apps as a self-taught software engineer because making things with code thrills me to no end. Feel free to browse my <Link href="/resume"><u>resume</u></Link>.
        </p>
        <p>
          Occasionally I'll write <Link href="/words"><u>words</u></Link> about thoughts, opinions, or reflections on this website, and share <Link href="/photos"><u>photos</u></Link> from daily life.
        </p>
        <p>
          Other moments &mdash; both big and small &mdash; that have shaped my life, so far:
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
                  <small>
                    {paragraph}
                  </small>
                )}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <section aria-label="conclusion">
        <p>
          See you out there.
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
