'use client';

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
        className={styles.images}
        onClick={handleOnScrollToTop}
        title="Jump to Images"
        type="button"
      >
        <span className={styles.image} />
        <span className={styles.image} />
        <span className={styles.image} />
      </button>
      <button
        className={styles.overview}
        onClick={handleOnScrollToOverview}
        title="Jump to Overview"
        type="button"
      >
        <span className={styles.text} />
        <span className={styles.text} />
        <span className={styles.text} />
      </button>
    </>
  );
}
