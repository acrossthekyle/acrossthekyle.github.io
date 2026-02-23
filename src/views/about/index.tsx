import Link from 'next/link';

import { Layout } from '@/layout';
import { route } from '@/routes';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { LinkArrow } from '@/ui/link';

export default function View() {
  return (
    <Layout>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/">
              ../
            </Link>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1>
        <strong>{route('about').text}</strong>
        <small>{route('about').subtitle}</small>
      </h1>
      <p>
        During the 90's I played with legos while starting my formal education and enjoying the golden age of Star Trek (The Next Generation, Deep Space 9, and Voyager). If you want some good breakdowns of star trek shows, check out <Link href="https://www.youtube.com/playlist?list=PLAXhpI9PdbZYF9gX4d8SHTk56eQ7w912Q" target="_blank"><u><LinkArrow>Reverse Angle</LinkArrow></u></Link> and <Link href="https://www.youtube.com/@Unlimited_Lives/playlists" target="_blank"><u><LinkArrow>Unlimited Lives</LinkArrow></u></Link> on youtube.
      </p>
      <p>
        Around the dawn of the new millenium I discovered website programming and 11 years later, after finishing my formal education, I began a career in web development.
      </p>
      <p>
        A few years after that I had a passport, and from 2015 to 2016 I put it to use with a handful of trips to South America where I first learned about backpacking. But it wasn't until 2018, after a two-year traveling hiatus, that I would have my first backpacking experience.
      </p>
      <p>
        In May of that year I booked a one-way flight to Europe and completed a long-distance thru-hike across Northern Spain, from the Pyreness in the east to the Atlantic ocean in the west &mdash; a distance of nearly 600 miles &mdash; known as the Camino de Santiago. Since then I've been to numerous <Link href="/places"><u>places</u></Link>, both near and far, from my homebase in Chicago &mdash; lands belonging to the Potawatomi, Ojibwe, and Odawa.
      </p>
      <p>
        Between adventures I continue to build web and mobile apps as a self-taught software engineer because, even after {new Date().getFullYear() - 2012} years, making things with code still thrills me to no end. Feel free to browse my <Link href="/resume"><u>resume</u></Link>.
      </p>
      <p>
        Occasionally I'll write <Link href="/words"><u>words</u></Link> about thoughts, opinions, or reflections, and share <Link href="/photos"><u>photos</u></Link> of things that catch my eye.
      </p>
      <p>
        As always, see you out there.
      </p>
    </Layout>
  );
}
