import Link from 'next/link';

import styles from 'scss/app/header.module.scss'

export default function Header() {
  return (
  	<header className={styles.header}>
  	  <Link href="/" aria-label="home">
        <div />
  	  </Link>
      <h1>Kyle</h1>
      <h2>
        Thru-hiker by design<br />
        Developer by trade
      </h2>
      <h3>Chicago</h3>
  	</header>
  );
}
