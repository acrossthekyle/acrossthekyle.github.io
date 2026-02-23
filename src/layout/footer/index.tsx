import Link from 'next/link';

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
      <small>Copyright 1987 &ndash; {new Date().getFullYear()}, all rights reserved. See you out there.</small>
    </footer>
  );
}
