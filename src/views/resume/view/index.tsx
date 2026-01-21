import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/ui/breadcrumbs';
import { Image } from '@/ui/image';

import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout group="resume">
      <header>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/" id="skip-to">
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                Resume
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1>
          <strong>Driven to create</strong>
          <small>It's what motivates me to code.</small>
        </h1>
        <p>
          I'm a self-taught web developer/software engineer and making things with code thrills me to no end. With a strong background in <em>JavaScript/TypeScript</em>, and <em>HTML/CSS</em>, I have hands-on experience working with high-traffic, customer-facing products built with an attention to detail.
        </p>
      </header>
      <p>
        <strong>Currently</strong>
        <small>
          Senior Engineer &ndash; Optum Digital <em>(Formerly Rally Health)</em>
        </small>
      </p>
      <p>
        <strong>Previously</strong>
        <small>
          Senior Fullstack Engineer &ndash; Earlybird Co
        </small>
      </p>
      <section className={styles.section}>
        <h2>
          <strong>
            Skills
          </strong>
        </h2>
        <ul className={styles.list}>
          {data.skills.map((skill) => (
            <li className={styles.skill} key={skill.name}>
              <label htmlFor={skill.name.toLowerCase().replace(' ', '-')}>
                {skill.name}
              </label>
              <progress
                id={skill.name.toLowerCase().replace(' ', '-')}
                max="100"
                value={skill.percent}
              >
                {skill.percent}%
              </progress>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.section}>
        <h2>
          <strong>
            Work Experience
          </strong>
        </h2>
        {data.history.map((item) => (
          <article className={styles.article} key={item.title.join('')} id={item.title.join('-').toLowerCase()}>
            <figure className={styles.figure}>
              <Image
                alt=""
                className={styles.image}
                height={540}
                sizes="50vw"
                src={item.image.src}
                width={960}
              />
              <figcaption className={styles.caption}>
                {item.title.join(' ')}, {item.overview}
              </figcaption>
            </figure>
            <h3 className={styles.spread}>
              {item.position}
              <small className={styles.date}>
                {item.date.start} {!!item.date.end && <>&ndash; {item.date.end}</>}
              </small>
            </h3>
            <p>
              {item.website ? (
                <Link href={item.website} target="_blank" rel="noreferrer">
                  {item.title.join(' ')} {item.website.includes('archive.org') ? '[archived]' : ''}
                </Link>
              ) : (
                <>
                  {item.title.join(' ')} &ndash; {item.overview}
                </>
              )}
            </p>
            <ul className={`${styles.list} ${styles.responsibilities}`}>
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility}>
                  {responsibility}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <section className={styles.section}>
        <h2>
          <strong>
            Education
          </strong>
        </h2>
        {data.education.map((item) => (
          <article key={item.degree}>
            <h3 className={styles.spread}>
              {item.school}
              <small className={styles.date}>
                {item.graduation}
              </small>
            </h3>
            <p>
              {item.degree}
            </p>
          </article>
        ))}
      </section>
    </Layout>
  );
}
