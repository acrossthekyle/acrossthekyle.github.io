import Link from 'next/link';
import { Fragment } from 'react';

import { Layout } from '@/layout';
import { route } from '@/routes';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { LinkArrow } from '@/ui/link';
import {
  Timeline,
  TimelineDate,
  TimelineEntry,
  TimelineItem,
  TimelineLine,
} from '@/ui/timeline';

import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout>
      <h1>
        <strong>{route('resume').text}</strong>
        <small>{route('resume').subtitle}</small>
      </h1>
      <Link
        className={styles.download}
        href="/kyle-gilbert-resume.pdf"
        target="_blank"
      >
        <LinkArrow>PDF</LinkArrow>
      </Link>
      <p>
        I'm a self-taught web developer/software engineer who is driven to create because making things with code thrills me to no end. With a strong background in JavaScript/TypeScript, and HTML/CSS, I have hands-on experience working with high-traffic, customer-facing products built with an attention to detail.
      </p>
      <h2 id="skills">
        <strong>Skills</strong>
      </h2>
      <dl aria-labelledby="skills">
        {data.skills.map((skill) => (
          <Fragment key={skill.name}>
            <dt>{skill.name}</dt>
            <dd>
              <progress max="100" value={skill.percent}>
                {skill.percent}%
              </progress>
            </dd>
          </Fragment>
        ))}
      </dl>
      <h2 id="career">
        <strong>Career</strong>
      </h2>
      <Timeline>
        {data.history.map((item) => (
          <TimelineItem key={item.title.join('')}>
            <TimelineDate>{item.date.start}</TimelineDate>
            <TimelineLine />
            <TimelineEntry>
              {item.position}
              <small>{item.title.join(' ')}</small>
              <br />
              {item.description}
            </TimelineEntry>
          </TimelineItem>
        ))}
      </Timeline>
      <h2 id="education">
        <strong>Education</strong>
      </h2>
      <ol aria-labelledby="education">
        {data.education.map((item) => (
          <li key={item.degree}>
            <h3>
              <strong>{item.school}</strong>
              <small>
                {item.degree} &mdash; {item.graduation}
              </small>
            </h3>
          </li>
        ))}
      </ol>
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
