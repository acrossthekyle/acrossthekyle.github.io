import Link from 'next/link';

import { Layout } from '@/layout';
import { route } from '@/routes';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineEntry,
  TimelineHeading,
  TimelineItem,
  TimelineItems,
  TimelineLine,
} from '@/ui/timeline';

import { TIMELINE } from './constants';

export default function View() {
  return (
    <Layout>
      <h1>
        <strong>{route('about').text}</strong>
        <small>{route('about').subtitle}</small>
      </h1>
      <p>
        <strong>Hi, I'm Kyle</strong> &mdash; a millenial living in the city of Chicago on the lands belonging to the Potawatomi, Ojibwe, and Odawa.
      </p>
      <p>
        I'm drawn to long trails and wild places, from the Himalayas to Patagonia. Between adventures, I build web apps in Chicago.
      </p>
      <p>
        My first "real" adventure was a month-long thru-hike of the Camino de Santiago: a long-distance trail across Northern Spain from the Pyreness in the east, to the Atlantic ocean in the west &mdash; a distance of nearly 600 miles. Since then I've been to numerous <Link href="/places"><u>places</u></Link>, both near and far, from my homebase in Chicago.
      </p>
      <p>
        Between adventures, I build web and mobile apps as a self-taught software engineer, because making things with code thrills me to no end. Feel free to browse my <Link href="/resume"><u>resume</u></Link>.
      </p>
      <p>
        Occasionally I'll write <Link href="/words"><u>words</u></Link> about thoughts, opinions, or reflections, and share <Link href="/photos"><u>photos</u></Link> of things that catch my eye.
      </p>
      <Timeline>
        <p>
          Other moments &mdash; both big and small &mdash; that have shaped my life so far:
        </p>
        <br />
        <TimelineItems>
          {TIMELINE.map(({ paragraph, title, year }) => (
            <TimelineItem key={year}>
              <TimelineLine />
              <TimelineDate>{year}</TimelineDate>
              <TimelineEntry>
                <TimelineHeading>{title}</TimelineHeading>
                {!!paragraph && (
                  <TimelineContent>
                    <small>{paragraph}</small>
                  </TimelineContent>
                )}
              </TimelineEntry>
            </TimelineItem>
          ))}
        </TimelineItems>
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
