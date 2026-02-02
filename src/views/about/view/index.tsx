import { Layout } from '@/layout';

import { TIMELINE } from './constants';
import styles from './stylesheet';

export default function View() {
  return (
    <Layout group="about">
      <article>
        <h2>
          <strong>About</strong>
        </h2>
        <p>
          Hi, I'm Kyle. I explore the world &mdash; from Nepal's Himalayas to windswept Patagonia. Between adventures, I build web apps in <em>Chicago</em>, on the lands of the <em>Potawatomi</em>, <em>Ojibwe</em>, and <em>Odawa</em>, as a self-taught software engineer.
        </p>
        <p>Here's a brief history of my life, so far:</p>
        <ul className={styles.timeline}>
          {TIMELINE.map(({ paragraph, title, year }) => (
            <li className={styles.item} key={year}>
              <span className={styles.year}>{year}</span>
              <div className={styles.line}>
                <div className={styles.dot} />
              </div>
              <p className={styles.description}>
                <strong className={styles.title}>
                  {title}
                </strong>
                {!!paragraph && (
                  <small>
                    {paragraph}
                  </small>
                )}
              </p>
            </li>
          ))}
        </ul>
      </article>
    </Layout>
  );
}
