import Link from 'next/link';

import data from '@/db/config';

import styles from './stylesheet';

type Props = {
  isRoot: boolean;
};

export default function Footer({ isRoot }: Props) {
  return (
    <footer className={styles.container}>
      {!isRoot && (
        <Link className={styles.anchor} href="/">
          ./
        </Link>
      )}
      <p className={styles.copyright}>
        Continuously copyrighted since 2011, most recently compiled on {data.lastUpdated}, all bits reserved. Please don't `git clone` my life.
      </p>
    </footer>
  );
}
