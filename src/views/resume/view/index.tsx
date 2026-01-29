import { Layout } from '@/layout';
import { LinkItalic } from '@/ui/link';

import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout group="resume">
      <header>
        <h1>
          <strong>
            Resume
          </strong>
          <small>
            <em>Driven to create</em>
          </small>
        </h1>
        <p>
          I'm a self-taught web developer/software engineer and making things with code thrills me to no end. With a strong background in <em>JavaScript/TypeScript</em>, and <em>HTML/CSS</em>, I have hands-on experience working with high-traffic, customer-facing products built with an attention to detail.
        </p>
      </header>
      <p>
        <strong>Currently</strong>
        <em>Senior Engineer &ndash; Optum Digital (Formerly Rally Health)</em>
      </p>
      <p>
        <strong>Previously</strong>
        <em>Senior Fullstack Engineer &ndash; Earlybird Co</em>
      </p>
      <section>
        <h2>
          <strong>
            SKILLS
          </strong>
        </h2>
        <ul>
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
      <section>
        <h2>
          <strong>
            CAREER EXPERIENCE
          </strong>
        </h2>
        {data.history.map((item) => (
          <article
            className={styles.article}
            key={item.title.join('')}
          >
            <h3>
              <strong>{item.position}</strong>
            </h3>
            <p>
              <small>
                <em>
                  {item.title.join(' ')} &mdash; {item.date.start} {!!item.date.end && <>- {item.date.end}</>}
                </em>
              </small>
            </p>
            <ul className="list">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility}>
                  {responsibility}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <section>
        <h2>
          <strong>
            EDUCATION
          </strong>
        </h2>
        {data.education.map((item) => (
          <article key={item.degree}>
            <h3>
              <strong>{item.school}</strong>
            </h3>
            <p>
              <em>
                {item.degree} &mdash; {item.graduation}
              </em>
            </p>
          </article>
        ))}
      </section>
      <section>
        <LinkItalic href="/kyle-gilbert-resume.pdf" target="_blank">
          View resume as PDF
        </LinkItalic>
      </section>
    </Layout>
  );
}
