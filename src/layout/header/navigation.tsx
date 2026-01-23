import Link from 'next/link';

import styles from './stylesheet';

type Props = {
  className: string;
  route?: string;
};

export default function Navigation({ className, route }: Props) {
  return (
    <ul className={className}>
      <li>
        <Link
          aria-current={route === 'trails-and-travels' ? 'page' : undefined}
          className={styles.link}
          data-active={route === 'trails-and-travels'}
          href="/trails-and-travels"
        >
          Trails and Travels
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
          aria-current={route === 'photos' ? 'page' : undefined}
          className={styles.link}
          data-active={route === 'photos'}
          href="/photos"
        >
          Photos
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
          aria-current={route === 'now' ? 'page' : undefined}
          className={styles.link}
          data-active={route === 'now'}
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
          Email
        </Link>
      </li>
    </ul>
  );
}
