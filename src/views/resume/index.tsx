import Link from 'next/link';
import { Fragment } from 'react';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from '@/ui/breadcrumbs';
import { LinkArrow } from '@/ui/link';
import {
  Timeline,
  TimelineDate,
  TimelineDescription,
  TimelineEntry,
  TimelineItem,
  TimelineLine,
  TimelineTitle,
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
        <strong>Resume</strong>
        <small>Skills and career</small>
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
        <strong>SKILLS</strong>
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
        <strong>CAREER EXPERIENCE</strong>
      </h2>
      <Timeline>
        {data.history.map((item) => (
          <TimelineItem key={item.title.join('')}>
            <TimelineDate>{item.date.start}</TimelineDate>
            <TimelineLine />
            <TimelineEntry>
              <TimelineTitle id={item.title.join('')}>
                {item.position}
                <small>{item.title.join(' ')}</small>
              </TimelineTitle>
              <TimelineDescription>
                <br />
                {item.description}
              </TimelineDescription>
            </TimelineEntry>
          </TimelineItem>
        ))}
      </Timeline>
      <h2 id="education">
        <strong>EDUCATION</strong>
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
