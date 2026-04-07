import Link from 'next/link';

import Anchor from './anchor';
import styles from './stylesheet';

const LINKS = [
  {
    href: '/info',
    subtitle: 'Bio, Resume, Etc.',
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
    href: '/albums',
    subtitle: 'Photographic journal',
    title: 'Albums',
  },
];

export default function Header() {
  return (
    <header>
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
