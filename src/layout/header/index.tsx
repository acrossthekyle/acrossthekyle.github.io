import Link from 'next/link';

import Anchor from './anchor';
import styles from './stylesheet';

const LINKS = [
  {
    href: '/info',
    subtitle: 'About me',
    title: 'Info',
  },
  {
    href: '/trails',
    subtitle: 'Hikes and summits',
    title: 'Trails',
  },
  {
    href: '/blog',
    subtitle: 'Quick thoughts',
    title: 'Miniblog',
  },
  {
    href: '/gallery',
    subtitle: 'Photographic journal',
    title: 'Gallery',
  },
];

export default function Header() {
  return (
    <header className={styles.container}>
      <Link className={styles.anchor} href="/">
        KYL
        <span className={styles.definition}>
          /kī(ə)l/ • Gaelic • Channel or strait
        </span>
      </Link>
      <nav aria-label="primary navigation">
        <ul className={styles.items}>
          {LINKS.map((link, index: number) => (
            <li className={styles.item} key={link.href}>
              <Anchor {...link} index={index} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
