import Link from 'next/link';

import { LayoutFooter, LayoutHeader, LayoutMain } from '@/layout';
import { HeaderHeading, HeaderSection } from '@/ui/header';
import { Eyebrow, Paragraph, Title } from '@/ui/typography';

import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <>
      <LayoutHeader route="cv">
        <HeaderHeading>
          <Eyebrow>CV/Resume</Eyebrow>
          Creating things from scratch motivates me to do what I do
        </HeaderHeading>
        <HeaderSection>
          <Paragraph>
            I'm a self-taught web developer/software engineer and making things with code thrills me to no end.
          </Paragraph>
          <Paragraph>
            With a strong background in <span className={styles.emphasis}>JavaScript/TypeScript</span>, and <span className={styles.emphasis}>HTML/CSS</span>, I have hands-on experience working with high-traffic, customer-facing products built with an attention to detail.
          </Paragraph>
          <Paragraph>
            Connect with me on <Link
              aria-label="view linkedin profile"
              className={styles.link}
              data-work="true"
              href="https://linkedin.com/in/acrossthekyle"
              target="_blank"
              rel="noreferrer"
            >LinkedIn</Link>
          </Paragraph>
        </HeaderSection>
      </LayoutHeader>
      <LayoutMain>
        <article aria-labelledby="main-heading">
          <section className={styles.section}>
            <Title className={styles.header} shrink>Education</Title>
            {data.education.map((item) => (
              <article key={item.degree}>
                <h4 className={styles.title}>{item.degree}</h4>
                <Paragraph className={styles.meta}>
                  <span>{item.school}</span>
                  <span className={styles.right}>{item.graduation}</span>
                </Paragraph>
              </article>
            ))}
          </section>
          <section className={styles.section}>
            <Title className={styles.header} shrink>Work Experience</Title>
            {data.history.map((item) => (
              <article className={styles.history} key={item.title.join('-')}>
                <h4 className={styles.title}>
                  {item.position}
                </h4>
                <Paragraph className={styles.meta}>
                  {item.website ? (
                    <span>
                      <Link
                        className={styles.link}
                        href={item.website}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.title.join(' ')}
                      </Link>
                    </span>
                  ) : (
                    <span>{item.title.join(' ')} &ndash; {item.overview}</span>
                  )}
                  <span className={styles.right}>
                    {item.date.start} &ndash; {item.date.end}
                  </span>
                </Paragraph>
                <ul className={styles.responsibilities}>
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
            <Title className={styles.header} shrink>Skills</Title>
            <ul className={styles.skills}>
              {data.skills.map((skill) => (
                <li className={styles.skill} key={skill.name}>
                  <label htmlFor={skill.name.toLowerCase().replace(' ', '-')}>
                    {skill.name}
                  </label>
                  <progress
                    className={styles.progress}
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
        </article>
      </LayoutMain>
      <LayoutFooter />
    </>
  );
}
