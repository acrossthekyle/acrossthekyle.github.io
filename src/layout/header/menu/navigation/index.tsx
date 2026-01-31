import Link from 'next/link';

import styles from './stylesheet';

export default function Menu() {
  return (
    <>
      <section>
        <h2 className={styles.heading}>
          Blogging
          <span className={styles.tagline}>
            Thinking out loud
          </span>
        </h2>
        <hr className={styles.hr} />
        <ul className={styles.list}>
          <li>
            <Link
              className={styles.link}
              href="/trails-and-travels"
            >
              Trails and Travels
              <span className={styles.tagline}>
                Travelogue
              </span>
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              href="/writing"
            >
              Writing
              <span className={styles.tagline}>Thoughts</span>
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              href="/photos"
            >
              Photos
              <span className={styles.tagline}>Snapshots</span>
            </Link>
          </li>
        </ul>
      </section>
      <hr className={styles.hr} />
      <section>
        <h2 className={styles.heading}>
          Pages
          <span className={styles.tagline}>
            About me
          </span>
        </h2>
        <hr className={styles.hr} />
        <ul className={styles.list}>
          <li>
            <Link
              className={styles.link}
              href="/"
            >
              About
              <span className={styles.tagline}>
                Me
              </span>
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              href="/now"
            >
              Now
              <span className={styles.tagline}>Presently</span>
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              href="/resume"
            >
              Resume
              <span className={styles.tagline}>Work</span>
            </Link>
          </li>
        </ul>
      </section>
      <hr className={styles.hr} />
      <section>
        <h2 className={styles.heading}>
          Connect
          <span className={styles.tagline}>
            Get in touch
          </span>
        </h2>
        <hr className={styles.hr} />
        <ul className={styles.list}>
          <li>
            <Link
              aria-label="view instagram profile"
              className={styles.link}
              href="https://instagram.com/acrossthekyle"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
              <span className={styles.tagline}>@acrossthekyle</span>
            </Link>
          </li>
          <li>
            <Link
              aria-label="view linkedin profile"
              className={styles.link}
              href="https://linkedin.com/in/acrossthekyle"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <span className={styles.tagline}>in/acrossthekyle</span>
            </Link>
          </li>
          <li>
            <Link
              className={styles.link}
              href="/email"
            >
              Email
              <span className={styles.tagline}>hello@acrossthekyle.com</span>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
