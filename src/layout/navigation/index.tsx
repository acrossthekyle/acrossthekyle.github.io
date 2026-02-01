import Link from 'next/link';

import { LinkArrow } from '@/ui/link';

import styles from './stylesheet';

export default function Menu() {
  return (
    <>
      <section>
        <h2 className={styles.heading}>
          Blogging
          <small>My experiences</small>
        </h2>
        <hr className={styles.hr} />
        <ul className={styles.list}>
          <li>
            <Link className={styles.link} href="/places">
              Places
              <small>Trails and travels</small>
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/writing">
              Writing
              <small>Quick thoughts</small>
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/photos">
              Photos
              <small>Snapshots from life</small>
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <h2 className={styles.heading}>
          Info
          <small>
            More about me
          </small>
        </h2>
        <hr className={styles.hr} />
        <ul className={styles.list}>
          <li>
            <Link className={styles.link} href="/about">
              About
              <small>My backstory</small>
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/now">
              Now
              <small>Presently doing</small>
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/resume">
              Resume
              <small>Work and career</small>
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <h2 className={styles.heading}>
          Connect
          <small>Reach out</small>
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
              <small>
                <LinkArrow>@acrossthekyle</LinkArrow>
              </small>
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
              <small>
                <LinkArrow>in/acrossthekyle</LinkArrow>
              </small>
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/email">
              Email
              <small>hello@acrossthekyle.com</small>
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <h2 className={styles.heading}>
          Code
          <small>What and why</small>
        </h2>
        <hr className={styles.hr} />
        <ul className={styles.list}>
          <li>
            <Link className={styles.link} href="/colophon">
              Colophon
              <small>Website philosophy</small>
            </Link>
          </li>
          <li>
            <Link
              aria-label="view codebase on github.com"
              className={styles.link}
              href="https://github.com/acrossthekyle/acrossthekyle.github.io"
              target="_blank"
              rel="noreferrer"
            >
              Github
              <small>
                <LinkArrow>Code projects</LinkArrow>
              </small>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
