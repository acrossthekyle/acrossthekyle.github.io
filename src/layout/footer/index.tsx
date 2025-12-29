import Link from 'next/link';

import styles from './stylesheet';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <p className={styles.content}>
        1987 - {new Date().getFullYear()} © <Link href="/">Kyle</Link>. All Right Reserved. Published with <a href="https://vercel.com" target="_blank" rel="noreferrer">Vercel</a>. See you out there.
      </p>
    </footer>
  );
}
