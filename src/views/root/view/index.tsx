import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { Layout } from '@/layout';
import { Badge } from '@/ui/badge';
import { LinkStacked } from '@/ui/link';

import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout group="about">
      <header>
        <h1 id="skip-to">
          <strong>Hey, I'm Kyle</strong>
          <small>A backpacker and software engineer living on the lands belonging to the <em>Potawatomi</em>, <em>Ojibwe</em>, and <em>Odawa</em> &mdash; otherwise known as the city of <em>Chicago</em>.</small>
        </h1>
        <Image
          alt="Picture of Kyle"
          className={styles.image}
          height={540}
          sizes="50vw"
          src="8ed54501-bdcb-40b7-9387-f2fc306db83d.png"
          width={960}
        />
        <p>
          For the past {new Date().getFullYear() - 2012} years I've built numerous web apps because making things with code thrills me to no end, and it drives me to be creative. In my free time I like to explore the world. Over the last {new Date().getFullYear() - 2018} years I've been nearly everywhere, from the frozen peaks of the Himalayas in Nepal, to the untamed windswept beauty of Patagonia in Southern Chile.
        </p>
      </header>
      <p>
        <strong>
          Recent experience
        </strong><br />
        <LinkStacked href={`/experiences/${data.experience.slug}`} noMargin>
          <Badge>{data.experience.type}</Badge>
          <strong>{data.experience.title.join(' ')}</strong>
          <small className={styles.subtitle}>
            {data.experience.location} &mdash; {data.experience.date}
          </small>
        </LinkStacked>
      </p>
      <p>
        <Link className={styles.more} href="/experiences">
          <strong><small>More</small></strong>
          <ArrowRight className={styles.icon} />
        </Link>
      </p>
      <p className="mt-16">
        <strong>
          Current role
        </strong><br />
        <LinkStacked href="/resume" noMargin>
          <strong>{data.role.position}</strong>
          <small>{data.role.title.join(' ')}</small>
          <small className={styles.subtitle}>{data.role.date}</small>
        </LinkStacked>
      </p>
      <p>
        <Link className={styles.more} href="/resume">
          <strong><small>Resume</small></strong>
          <ArrowRight className={styles.icon} />
        </Link>
      </p>
    </Layout>
  );
}
