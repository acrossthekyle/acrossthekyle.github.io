'use client'

import { useState } from 'react';

import styles from 'scss/app/hikes.module.scss'

export default function Page() {
  const [isGallery, toggleIsGallery] = useState(false);

  const handleOnDisplayToggle = () => {
    toggleIsGallery(!isGallery);
  };

  return (
    <section className={styles.hikes}>
      <button
        className={isGallery ? styles['as-list'] : styles['as-gallery']}
        onClick={handleOnDisplayToggle}
        title={isGallery ? 'Show as list' : 'Show as gallery'}
        type="button"
      >
        <span />
        <span />
        <span />
        <span />
      </button>
    </section>
  );
}
