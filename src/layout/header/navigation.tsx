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
          <span className={styles.tagline}>A travelogue of my journeys</span>
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
          <span className={styles.tagline}>Thinking out loud</span>
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
          <span className={styles.tagline}>Frames from everywhere</span>
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
          <span className={styles.tagline}>Driven to create</span>
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
          <span className={styles.tagline}>What's happening in my world</span>
        </Link>
      </li>
      <li>
        <Link
          aria-current={route === 'email' ? 'page' : undefined}
          className={styles.link}
          data-active={route === 'email'}
          href="/email"
        >
          Email
          <span className={styles.tagline}>Reach out and say hello</span>
        </Link>
      </li>
    </ul>
  );
}
