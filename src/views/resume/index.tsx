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
import { Heading, Small, Strong } from '@/ui/typography';

import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
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
        <Strong>{route('resume').text}</Strong>
        <Small>{route('resume').subtitle}</Small>
      </Heading>
      <p>
        I'm a self-taught web developer/software engineer who is driven to create because making things with code thrills me to no end. With a strong background in JavaScript/TypeScript, and HTML/CSS, I have hands-on experience working with high-traffic, customer-facing products built with an attention to detail.
      </p>
      <Heading level={2} id="skills">
        <Strong uppercase>Skills</Strong>
      </Heading>
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
          <Strong uppercase>Career History</Strong>
        </TimelineHeader>
        <TimelineItems>
          {data.history.map((item) => (
            <TimelineItem key={item.title.join('')}>
              <TimelineLine />
              <TimelineDate>{item.date.start}</TimelineDate>
              <TimelineEntry>
                <TimelineHeading>
                  {item.position}
                  <Small>{item.title.join(' ')}</Small>
                </TimelineHeading>
                <TimelineContent>
                  {item.description}
                </TimelineContent>
              </TimelineEntry>
            </TimelineItem>
          ))}
        </TimelineItems>
      </Timeline>
      <Heading level={2} id="education">
        <Strong uppercase>Education</Strong>
      </Heading>
      <ol aria-labelledby="education">
        {data.education.map((item) => (
          <li key={item.degree}>
            <Heading level={3}>
              {item.school}
              <Small>
                {item.degree} &mdash; {item.graduation}
              </Small>
            </Heading>
          </li>
        ))}
      </ol>
    </Layout>
  );
}
