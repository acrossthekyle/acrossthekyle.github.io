'use client'

import { useContext } from 'react';
import Link from 'next/link';

import { SettingsContext } from 'contexts/settings';
import styles from 'scss/app/header.module.scss'

export default function Header() {
  const {
    isDarken,
    isImageless,
    isMonochrome,
    toggleDarken,
    toggleImageless,
    toggleMonochrome,
  } = useContext(SettingsContext);

  return (
  	<header className={styles.header}>
  	  <Link className={styles.logo} href="/" title="Take me home, Wadsworth" aria-label="home">
  	  	<div />
  	  </Link>
  	  <section className={styles.settings}>
        <button
          onClick={toggleDarken}
          title="Darken or lighten the mood"
          type="button"
        >
          (D)arken [ {isDarken ? 'Y' : 'N'} ]
        </button>
        <button
          onClick={toggleImageless}
          title="Do not display images"
          type="button"
        >
          (I)mages [ {isImageless ? 'N' : 'Y'} ]
        </button>
        <button
          onClick={toggleMonochrome}
          title="Make everything gray"
          type="button"
        >
          (C)olors [ {isMonochrome ? 'N' : 'Y'} ]
        </button>
      </section>
  	</header>
  );
}
