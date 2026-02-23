import Link from 'next/link';
import { Fragment } from 'react';

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
  TimelineHeader,
  TimelineItem,
  TimelineItems,
  TimelineLine,
} from '@/ui/timeline';

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
      <Timeline>
        <TimelineHeader>
          <strong>CAREER HISTORY</strong>
        </TimelineHeader>
        <TimelineItems>
          {data.history.map((item) => (
            <TimelineItem key={item.title.join('')}>
              <TimelineLine />
              <TimelineDate>{item.date.start}</TimelineDate>
              <TimelineEntry>
                <TimelineHeading>
                  {item.position}
                  <small>{item.title.join(' ')}</small>
                </TimelineHeading>
                <TimelineContent>
                  {item.description}
                </TimelineContent>
              </TimelineEntry>
            </TimelineItem>
          ))}
        </TimelineItems>
      </Timeline>
      <h2 id="education">
        <strong>EDUCATION</strong>
      </h2>
      <ol aria-labelledby="education">
        {data.education.map((item) => (
          <li key={item.degree}>
            <h3>
              {item.school}
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
