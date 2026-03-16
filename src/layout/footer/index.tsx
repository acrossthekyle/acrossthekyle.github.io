import Link from 'next/link';

import styles from './stylesheet';

type Props = {
  isRoot: boolean;
};

export default function Footer({ isRoot }: Props) {
  const lastUpdated = (
    process.env.NEXT_PUBLIC_LAST_UPDATED ||
    new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10)
  ).trim();

  return (
    <footer className={styles.container}>
      {!isRoot && (
        <Link className={styles.anchor} href="/">
          ./
        </Link>
      )}
      <p className={styles.copyright}>
        Continuously copyrighted since 2011, most recently compiled on {lastUpdated}, all bits reserved. Please don't `git clone` my life.
      </p>
    </footer>
  );
}
