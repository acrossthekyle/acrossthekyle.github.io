import Link from 'next/link';

import styles from './styles.module.scss'

export default function Header() {
  return (
  	<header className={styles.header}>
  	  <Link className={styles.logo} href="/" title="Take me home, Wadsworth" aria-label="home">
  	  	<div />
  	  </Link>
  	  <nav className={styles.nav}></nav>
  	</header>
  );
}
