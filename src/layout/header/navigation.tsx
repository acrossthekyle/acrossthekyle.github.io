import Link from 'next/link';

import styles from './stylesheet';

type Props = {
  className: string;
  route: string;
};

export default function Navigation({ className, route }: Props) {
  return (
    <ul className={className}>
      <li>
        <Link
          aria-current={route === 'experiences' ? 'page' : undefined}
          className={styles.link}
          data-active={route === 'experiences'}
          href="/experiences"
        >
          Experiences
        </Link>
      </li>
      <li>
        <Link
          aria-current={route === 'writing' ? 'page' : undefined}
          className={styles.link}
          data-active={route === 'writing'}
          href="/writing"
        >
          Writing
        </Link>
      </li>
      <li>
        <Link
          aria-current={route === 'art' ? 'page' : undefined}
          className={styles.link}
          data-active={route === 'art'}
          href="/art"
        >
          Art
        </Link>
      </li>
      <li>
        <Link
          aria-current={route === 'resume' ? 'page' : undefined}
          className={styles.link}
          data-active={route === 'resume'}
          href="/resume"
        >
          Resume
        </Link>
      </li>
      <li>
        <Link
          className={styles.link}
          href="/now"
        >
          Now
        </Link>
      </li>
      <li>
        <Link
          className={styles.link}
          href="mailto:hello@acrossthekyle.com"
          target="_blank"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}
