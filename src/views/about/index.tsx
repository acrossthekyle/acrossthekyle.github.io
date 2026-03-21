import Link from 'next/link';

import { Layout } from '@/layout';
import { route } from '@/routes';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { LinkArrow } from '@/ui/link';
import { Heading, Small, Strong } from '@/ui/typography';

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
      <Heading>
        <Strong>{route('about').text}</Strong>
        <Small>{route('about').subtitle}</Small>
      </Heading>
      <p>
        Hello there! My name's Kyle. I belong
        to the millennial generation and my favorite hobbies include creating
        things from scratch, and travelling for days on end.
      </p>
      <p>
        I grew up playing with legos while starting my formal education and enjoying the golden age of Star Trek (The Next Generation, Deep Space 9, and Voyager). If you want some good breakdowns of star trek shows, check out <Link href="https://www.youtube.com/playlist?list=PLAXhpI9PdbZYF9gX4d8SHTk56eQ7w912Q" target="_blank"><u><LinkArrow>Reverse Angle</LinkArrow></u></Link> and <Link href="https://www.youtube.com/@Unlimited_Lives/playlists" target="_blank"><u><LinkArrow>Unlimited Lives</LinkArrow></u></Link> on youtube.
      </p>
      <p>
        Circa 2001 I discovered programming and 11 years later I put my semi-unrelated formal education to use and began a professional career in web development, and ever since then I've been creating and building things non-stop.
      </p>
      <p>
        My love for travelling arose in 2015 with a handful of trips to South America where I first learned about backpacking. But it wasn't until 2018, after a two-year traveling hiatus, that I would have my first backpacking experience.
      </p>
      <p>
        In May of that year I booked a one-way flight to Europe and completed a long-distance thru-hike across Northern Spain, from the Pyreness in the East to the Atlantic ocean in the West &mdash; a distance of nearly 600 miles (965 kilometers) &mdash; known as the Camino de Santiago.
      </p>
      <p>
        Since then I've been to numerous <Link href="/places"><u>adventures</u></Link>, both near and far, from my homebase in Chicago on lands belonging to the Potawatomi, Ojibwe, and Odawa.
      </p>
      <p>
        Between adventures I continue to build web and mobile apps as a self-taught software engineer because, even after {new Date().getFullYear() - 2012} years, making things with code still thrills me to no end. Feel free to browse my <Link href="/resume"><u>resume</u></Link>.
      </p>
      <p>
        Occasionally I'll write <Link href="/words"><u>words</u></Link> about thoughts, opinions, or reflections.
      </p>
      <p>
        See you, out there.
      </p>
    </Layout>
  );
}
