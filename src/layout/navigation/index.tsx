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
            <Link className="backdrop" href="/places" id="skip-to">
              Places
              <small>Trails and travels</small>
            </Link>
          </li>
          <li>
            <Link className="backdrop" href="/words">
              Words
              <small>Quick thoughts</small>
            </Link>
          </li>
          <li>
            <Link className="backdrop" href="/photos">
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
            <Link className="backdrop" href="/about">
              About
              <small>My backstory</small>
            </Link>
          </li>
          <li>
            <Link className="backdrop" href="/now">
              Now
              <small>Presently doing</small>
            </Link>
          </li>
          <li>
            <Link className="backdrop" href="/resume">
              Resume
              <small>Skills and career</small>
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
              className="backdrop"
              href="https://instagram.com/acrossthekyle"
              target="_blank"
            >
              <LinkArrow>Instagram</LinkArrow>
              <small>
                @acrossthekyle
              </small>
            </Link>
          </li>
          <li>
            <Link
              aria-label="view linkedin profile"
              className="backdrop"
              href="https://linkedin.com/in/acrossthekyle"
              target="_blank"
            >
              <LinkArrow>LinkedIn</LinkArrow>
              <small>
                in/acrossthekyle
              </small>
            </Link>
          </li>
          <li>
            <Link className="backdrop" href="/email">
              Email
              <small>Say hello</small>
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
            <Link className="backdrop" href="/colophon">
              Colophon
              <small>Website philosophy</small>
            </Link>
          </li>
          <li>
            <Link
              aria-label="view codebase on github.com"
              className="backdrop"
              href="https://github.com/acrossthekyle"
              target="_blank"
            >
              <LinkArrow>Github</LinkArrow>
              <small>
                Code projects
              </small>
            </Link>
          </li>
          <li>
            <Link
              aria-label="view websitecarbon.com rating"
              className="backdrop"
              href="https://www.websitecarbon.com/website/acrossthekyle-com/"
              target="_blank"
            >
              <LinkArrow>Carbon</LinkArrow>
              <small>
                A+ rating
              </small>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
