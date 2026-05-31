import Link from 'next/link';

import { Ui } from '@/ui';

import styles from './stylesheet';

export default function View() {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <span>Hi</span>
          <span>I'm Kyle &mdash;</span>
          <span>an inspired</span>
          <span>backpacker</span>
          <span>and travel</span>
          <span>enthusiast</span>
          <span>living a</span>
          <span>city-based</span>
          <span>life in</span>
          <span>Chicago.</span>
        </h1>
      </header>
      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.heading}>
            <span className={styles.index}>01</span>
            Backstory
          </h2>
          <p className={styles.paragraph}>
            My obsession with long-distance trails, alpine peaks, and a curiosity to explore first arose in the Andes mountains of S. America at an elevation of 10,611 feet as I stared up at the leading edge of a calving glacier during a vacation to Chile in 2016, and further cemented by a visit to the Torres del Paine national park in Patagonia a few days later.
          </p>
          <p className={styles.paragraph}>
            It left such an impression on me that I ended up embarking on my first long-distance backpacking adventure two years later by walking 600 miles across Northern Spain on a route called El Camino De Santiago.
          </p>
          <p className={styles.paragraph}>
            Since then I've travelled to numerous destinations, and spent hundreds of days traipsing thousands of miles through nature and over mountain passes all around the world.
          </p>
          <p className={styles.paragraph}>
            This website is a nearly complete <Link className={styles.link} href="/catalog">collection</Link> of those experiences.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>
            <span className={styles.index}>02</span>
            Presently
          </h2>
          <p className={styles.paragraph}>
            Between adventures I get lost in books, YouTube videos, podcasts, films, and anything else that fuels the imagination and inspires critical thinking.
          </p>
          <p className={styles.paragraph}>
            I'm also an enthusiastic software developer who loves building web applications with an approach rooted in a genuine thrill for writing code, even after a <Link className={styles.link} href="https://linkedin.com/in/acrossthekyle" target="_blank">career</Link> of 14 years.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>
            <span className={styles.index}>03</span>
            Connect
          </h2>
          <p className={styles.paragraph}>
            Sometimes I post stuff on <Link className={styles.link} href="https://instagram.com/acrossthekyle" target="_blank">instagram</Link>, but the best way to get in touch with me is <Link className={styles.link} href="mailto:hello@acrossthekyle.com">email</Link>.
          </p>
          <p className={styles.paragraph}>
            See you out there.
          </p>
        </section>
      </div>
      <figure className={styles.figure}>
        <Ui.Image
          className={styles.image}
          src="12a81235-f377-4a2c-ba0f-22fb36e8c399.jpeg"
          thumb="data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAgACgDAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEDAgT/xAAjEAACAgEDBAMBAAAAAAAAAAABAgARUQMhMRITQWEEMmJx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AK9eAIB3DgQDufmAB/UBdzfgQJWazACTUA0XUqwfjOIASB52gLrwIElchlF8QKahYLu13AzoKWajsD5MBsrLvz7EBFh5swLH469XEDkf7kYgAdl4NQNpqsHu/wCjMDY0y52FLA//2Q=="
        />
      </figure>
    </article>
  );
}
