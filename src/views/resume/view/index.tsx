import { Layout } from '@/layout';
import { LinkButton } from '@/ui/link';

import styles from './stylesheet';
import type { Data } from './types';

type Props = {
  data: Data;
};

export default function View({ data }: Props) {
  return (
    <Layout group="resume">
      <article>
        <h2>
          <strong>Resume</strong>
          <small>Work and career</small>
        </h2>
        <p>
          I'm a self-taught web developer/software engineer who is driven to create because making things with code thrills me to no end. With a strong background in <em>JavaScript/TypeScript</em>, and <em>HTML/CSS</em>, I have hands-on experience working with high-traffic, customer-facing products built with an attention to detail.
        </p>
        <p>
          <strong>Currently</strong>
          <small>Senior Software Engineer II &ndash; Optum Digital</small>
        </p>
        <p>
          <strong>Previously</strong>
          <small>Senior Frontend Engineer &ndash; Rally Health</small>
        </p>
        <br />
        <LinkButton className={styles.pdf} href="/kyle-gilbert-resume.pdf" target="_blank">
          Download PDF
        </LinkButton>
      </article>
      <section>
        <h2>
          <strong>SKILLS</strong>
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
        <ul>
          {data.history.map((item) => (
            <li
              className={styles.article}
              key={item.title.join('')}
            >
              <h3>
                <strong>{item.position}</strong>
                <small>
                  {item.title.join(' ')} &mdash; {item.date.start} {!!item.date.end && <>- {item.date.end}</>}
                </small>
              </h3>
              <ul className="list">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>
          <strong>EDUCATION</strong>
        </h2>
        <ul>
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
        </ul>
      </section>
    </Layout>
  );
}
