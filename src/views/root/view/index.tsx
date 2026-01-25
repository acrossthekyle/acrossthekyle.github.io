import { Layout } from '@/layout';
import { LinkItalic } from '@/ui/link';

import { TIMELINE } from './constants';
import styles from './stylesheet';

export default function View() {
  return (
    <Layout group="home">
      <header>
        <h1>
          <strong>
            Hi, I'm Kyle
          </strong>
          <small>A backpacker and software engineer</small>
        </h1>
      </header>
      <p>
        I'm based in <em>Chicago</em> with my partner and our dog Dax, on the lands of the <em>Potawatomi</em>, <em>Ojibwe</em>, and <em>Odawa</em>. By day, I build web apps as a self-taught software engineer. By trail, I explore the world &ndash; from Nepal's Himalayas to windswept Patagonia &ndash; carrying everything I need on my back. <em>Wandering is life</em>, and the thrill keeps me coming back for more.
      </p>
      <LinkItalic href="/trails-and-travels">
        My trails and travels
      </LinkItalic>
      <section>
        <h2>
          <strong>Timeline</strong>
          <sub>A brief history of me</sub>
        </h2>
        <ul className={styles.list}>
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
                  <span className={styles.text}>
                    {paragraph}
                  </span>
                )}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
