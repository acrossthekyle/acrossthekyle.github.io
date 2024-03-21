'use client'

import { useContext } from 'react';

import styles from './styles.module.scss'
import { TripsContext, TripsMode } from './trips';

export default function Footer() {
  const { mode, toggleMode } = useContext(TripsContext);

  return (
  	<footer className={styles.footer}>
      <button
        className={`${styles.mode} ${mode === TripsMode.List ? styles.gallery : styles.list}`}
        onClick={toggleMode}
        title={mode === TripsMode.List ? 'Show the thru hikes as a gallery' : 'Show the thru hikes in a list'}
        type="button"
      >
        <span />
        <span />
        <span />
        <span />
      </button>
  	</footer>
  );
}
