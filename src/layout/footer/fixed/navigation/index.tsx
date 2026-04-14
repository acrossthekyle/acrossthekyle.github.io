import Link from 'next/link';

import styles from './stylesheet';

const LINKS = [
  {
    href: '/',
    subtitle: 'Overview',
    title: 'Index',
  },
  {
    href: '/trails',
    subtitle: 'Hikes and summits',
    title: 'Trails',
  },
  {
    href: '/albums',
    subtitle: 'Photographic journal',
    title: 'Albums',
  },
  {
    href: '/info',
    subtitle: 'About me',
    title: 'Info',
  },
  {
    href: '/books',
    subtitle: `What I've read`,
    title: 'Books',
  },
  {
    href: '/packs',
    subtitle: `What I carry`,
    title: 'Packs',
  },
];

export default function Navigation() {
  return (
    <ul className={styles.container}>
      {LINKS.map((link, index: number) => (
        <li className={styles.item} key={link.href}>
          <Link className={styles.link} href={link.href} title={link.subtitle}>
            {link.title}
          </Link>
          {(index < LINKS.length - 1) && (
            <span className={styles.divider} role="presentation">//</span>
          )}
        </li>
      ))}
    </ul>
  );
}
