import { LinkArrow, LinkStacked } from '@/ui/link';

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
            <LinkStacked href="/places" id="skip-to">
              Places
              <small>Trails and travels</small>
            </LinkStacked>
          </li>
          <li>
            <LinkStacked href="/words">
              Words
              <small>Quick thoughts</small>
            </LinkStacked>
          </li>
          <li>
            <LinkStacked href="/photos">
              Photos
              <small>Snapshots from life</small>
            </LinkStacked>
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
            <LinkStacked href="/about">
              About
              <small>My backstory</small>
            </LinkStacked>
          </li>
          <li>
            <LinkStacked href="/now">
              Now
              <small>Presently doing</small>
            </LinkStacked>
          </li>
          <li>
            <LinkStacked href="/resume">
              Resume
              <small>Skills and career</small>
            </LinkStacked>
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
            <LinkStacked
              aria-label="view instagram profile"
              href="https://instagram.com/acrossthekyle"
              target="_blank"
            >
              <LinkArrow>Instagram</LinkArrow>
              <small>
                @acrossthekyle
              </small>
            </LinkStacked>
          </li>
          <li>
            <LinkStacked
              aria-label="view linkedin profile"
              href="https://linkedin.com/in/acrossthekyle"
              target="_blank"
            >
              <LinkArrow>LinkedIn</LinkArrow>
              <small>
                in/acrossthekyle
              </small>
            </LinkStacked>
          </li>
          <li>
            <LinkStacked href="/email">
              Email
              <small>hello@acrossthekyle.com</small>
            </LinkStacked>
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
            <LinkStacked href="/colophon">
              Colophon
              <small>Website philosophy</small>
            </LinkStacked>
          </li>
          <li>
            <LinkStacked
              aria-label="view codebase on github.com"
              href="https://github.com/acrossthekyle"
              target="_blank"
            >
              <LinkArrow>Github</LinkArrow>
              <small>
                Code projects
              </small>
            </LinkStacked>
          </li>
          <li>
            <LinkStacked
              aria-label="view websitecarbon.com rating"
              href="https://www.websitecarbon.com/website/acrossthekyle-com/"
              target="_blank"
            >
              <LinkArrow>Carbon</LinkArrow>
              <small>
                A+ rating
              </small>
            </LinkStacked>
          </li>
        </ul>
      </section>
    </>
  );
}
