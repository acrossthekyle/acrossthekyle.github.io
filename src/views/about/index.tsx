import Link from 'next/link';

import { Layout } from '@/layout';
import { route } from '@/routes';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { Image, ImageFigure, ImageCaption } from '@/ui/image';
import {
  Timeline,
  TimelineDate,
  TimelineEntry,
  TimelineItem,
  TimelineLine,
} from '@/ui/timeline';

import { TIMELINE } from './constants';
import styles from './stylesheet';

export default function View() {
  return (
    <Layout>
      <h1>
        <strong>{route('about').text}</strong>
        <small>{route('about').subtitle}</small>
      </h1>
      <p>
        I'm Kyle &mdash; a millenial living in the city of Chicago on the lands belonging to the Potawatomi, Ojibwe, and Odawa.
      </p>
      <ImageFigure className={styles.figure}>
        <Image
          alt=""
          height={432}
          sizes="(max-width: 768px) 32vw, 40vw"
          src="7e8b11cd-c9b4-497d-82fe-dbd4f4dc3114.jpeg"
          width={768}
        />
        <ImageCaption>
          Looking over Manang Valley, Himalayas &mdash; 2019
        </ImageCaption>
      </ImageFigure>
      <h2>
        <strong>Background</strong>
      </h2>
      <p>
        My first "real" adventure was a month-long thru-hike of the Camino de Santiago: a long-distance trail across Northern Spain from the Pyreness in the east, to the Atlantic ocean in the west &mdash; a distance of nearly 600 miles. Since then I've been to numerous <Link href="/places"><u>places</u></Link>, both near and far, from my homebase in Chicago.
      </p>
      <p>
        Between adventures, I build web and mobile apps as a self-taught software engineer, because making things with code thrills me to no end. Feel free to browse my <Link href="/resume"><u>resume</u></Link>.
      </p>
      <p>
        Occasionally I'll write <Link href="/words"><u>words</u></Link> about thoughts, opinions, or reflections on this website, and share <Link href="/photos"><u>photos</u></Link> of things that catch my eye.
      </p>
      <h2>
        <strong>Milestones</strong>
      </h2>
      <p>
        Other moments &mdash; both big and small &mdash; that have shaped my life, so far.
      </p>
      <Timeline>
        {TIMELINE.map(({ paragraph, title, year }) => (
          <TimelineItem key={year}>
            <TimelineLine />
            <TimelineDate>{year}</TimelineDate>
            <TimelineEntry>
              {title}
              {!!paragraph && <small>{paragraph}</small>}
            </TimelineEntry>
          </TimelineItem>
        ))}
      </Timeline>
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
