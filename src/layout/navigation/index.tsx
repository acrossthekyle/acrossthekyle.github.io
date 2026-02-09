import Link from 'next/link';

import { LinkArrow } from '@/ui/link';

import styles from './stylesheet';

type Props = {
  isMenu?: boolean;
};

type HeadingProps = {
  children: React.ReactNode | React.ReactNode[];
  id: string;
  isMenu?: boolean;
};

function Heading({ children, id, isMenu }: HeadingProps) {
  if (isMenu) {
    return (
      <h3 id={id}>
        {children}
      </h3>
    );
  }

  return (
    <h2 id={id}>
      {children}
    </h2>
  );
}

export default function Menu({ isMenu }: Props) {
  return (
    <>
      <Heading id="blogging" isMenu={isMenu}>
        BLOGGING
        <small>My experiences</small>
      </Heading>
      <hr className={styles.hr} />
      <ul aria-labelledby="blogging" className={styles.list(isMenu)}>
        <li>
          <Link className="backdrop" href="/places">
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
            <small>Life snapshots</small>
          </Link>
        </li>
      </ul>
      <Heading id="info" isMenu={isMenu}>
        INFO
        <small>More about me</small>
      </Heading>
      <hr className={styles.hr} />
      <ul aria-labelledby="info" className={styles.list(isMenu)}>
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
      <Heading id="connect" isMenu={isMenu}>
        CONNECT
        <small>Reach out</small>
      </Heading>
      <hr className={styles.hr} />
      <ul aria-labelledby="connect" className={styles.list(isMenu)}>
        <li>
          <Link
            aria-label="view instagram profile"
            className="backdrop"
            href="https://instagram.com/acrossthekyle"
            target="_blank"
          >
            <LinkArrow>Instagram</LinkArrow>
            <small>@acrossthekyle</small>
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
            <small>in/acrossthekyle</small>
          </Link>
        </li>
        <li>
          <Link className="backdrop" href="/email">
            Email
            <small>Say hello</small>
          </Link>
        </li>
      </ul>
      <Heading id="code" isMenu={isMenu}>
        CODE
        <small>What and why</small>
      </Heading>
      <hr className={styles.hr} />
      <ul aria-labelledby="code" className={styles.list(isMenu)}>
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
    </>
  );
}
