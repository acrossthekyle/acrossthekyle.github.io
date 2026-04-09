import Anchor from './anchor';
import styles from './stylesheet';

const INTERNAL = [
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
    href: '/thoughts',
    subtitle: 'Quick reads',
    title: 'Thoughts',
  },
  {
    href: '/albums',
    subtitle: 'Photographic journal',
    title: 'Albums',
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
  {
    href: '/colophon',
    subtitle: `How it's made`,
    title: 'Colophon',
  },
];

const EXTERNAL = [
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
      {INTERNAL.map((link, index: number) => (
        <li className={styles.item} key={link.href}>
          <Anchor {...link} index={index} />
        </li>
      ))}
      {EXTERNAL.map((link, index: number) => (
        <li className={styles.item} key={link.href}>
          <Anchor {...link} index={index + 7} />
        </li>
      ))}
    </ul>
  );
}
