import Link from 'next/link';

import { Image } from '@/ui/image';

import Menu from './menu';
import styles from './stylesheet';
import Theme from './theme';

type Props = {
  route?: string;
};

export default function Header({ route }: Props) {
  return (
    <header className={styles.container}>
      <Link
        aria-label="acrossthekyle.com home"
        className={styles.anchor}
        href="/"
      >
        <Image
          alt=""
          height={540}
          sizes="100vw"
          src="8ed54501-bdcb-40b7-9387-f2fc306db83d.png"
          width={960}
        />
      </Link>
      <nav aria-label="main navigation">
        <ul className={styles.list}>
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
              aria-current={route === 'email' ? 'page' : undefined}
              className={styles.link}
              data-active={route === 'email'}
              href="/email"
            >
              Email
            </Link>
          </li>
        </ul>
        <Menu />
        <Theme className={styles.theme} />
      </nav>
    </header>
  );
}
