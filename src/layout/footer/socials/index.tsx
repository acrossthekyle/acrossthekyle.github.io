import Link from 'next/link';

import { ExternalIcon } from '@/ui/link';
import { padIndex } from '@/utils';

import styles from './stylesheet';

const LINKS = [
  {
    href: 'https://instagram.com/acrossthekyle',
    subtitle: '@acrossthekyle',
    title: 'Instagram',
  },
  {
    href: 'https://linkedin.com/in/acrossthekyle',
    subtitle: 'u/acrossthekyle',
    title: 'LinkedIn',
  },
  {
    href: 'mailto:hello@acrossthekyle.com',
    subtitle: 'hello@acrossthekyle',
    title: 'Email',
  },
  {
    href: 'https://github.com/acrossthekyle',
    subtitle: '/acrossthekyle',
    title: 'GitHub',
  },
];

export default function Header() {
  return (
    <ul className={styles.items}>
      {LINKS.map((link, index: number) => (
        <li className={styles.item} key={link.href}>
          <Link className={styles.link} href={link.href}>
            <span className={styles.eyebrow}>
              {padIndex(index + 1)}.
            </span>
            <span className={styles.title}>
              <ExternalIcon>{link.title}</ExternalIcon>
            </span>
            <span className={styles.lid}>{link.subtitle}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
