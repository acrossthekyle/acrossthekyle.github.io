'use client';

import { GalleryVertical, ListMinus } from 'lucide-react';

import { useModel } from './model';
import styles from './stylesheet';

export default function Shortcuts() {
  const {
    handleOnScrollToOverview,
    handleOnScrollToTop,
  } = useModel();

  return (
    <>
      <div aria-hidden="true" className={styles.anchor} id="anchor" />
      <button
        className={styles.top}
        onClick={handleOnScrollToTop}
        title="Jump to Images"
        type="button"
      >
        <GalleryVertical className={styles.icon} />
      </button>
      <button
        className={styles.bottom}
        onClick={handleOnScrollToOverview}
        title="Jump to Overview"
        type="button"
      >
        <ListMinus className={styles.icon} />
        <span className={styles.text}>Learn More</span>
      </button>
    </>
  );
}
