import Link from 'next/link';

import styles from 'scss/app/header.module.scss'

export default function Header() {
  return (
  	<header className={styles.header}>
  	  <Link className={styles.logo} href="/" title="Take me home, Wadsworth" aria-label="home">
  	  	<div />
  	  </Link>
  	</header>
  );
}
