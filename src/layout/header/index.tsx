import { Circle } from 'lucide-react';
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
    href: '/albums',
    subtitle: 'Photographic journal',
    title: 'Albums',
  },
];

type Props = {
  data: {
    job: {
      isAvailable: boolean;
      place: string;
      title: string;
    };
    trail: {
      id: string;
      title: string;
    };
  };
};

export default function Header({ data }: Props) {
  return (
    <header>
      <div className={styles.callouts}>
        <Link className={styles.callout} href={`/trails/${data.trail.id}`} tabIndex={2}>
          Latest trail: <span className={styles.highlight}>{data.trail.title}</span> [→]
        </Link>
        <Link className={styles.callout} href="/info" tabIndex={3}>
          Currently:{' '}
          {data.job.isAvailable && (
            <>
              Available for work
              <Circle className={`${styles.icon} ${styles.filled}`} />
            </>
          )}
          {!data.job.isAvailable && (
            <>
              <span className={styles.highlight}>{data.job.title}</span>
              {' '}@{' '}
              <span className={styles.highlight}>{data.job.place}</span>
              <Circle className={styles.icon} />
            </>
          )}
        </Link>
      </div>
      <div className={styles.container}>
        <Link className={styles.anchor} href="/" tabIndex={1}>
          KYL
          <span className={styles.definition}>
            /kī(ə)l/ • Gaelic
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
      </div>
    </header>
  );
}
