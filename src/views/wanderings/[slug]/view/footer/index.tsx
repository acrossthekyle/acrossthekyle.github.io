'use client';

import styles from './stylesheet';

export default function Footer() {
  const handleOnScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <button
        className={styles.up}
        onClick={handleOnScrollToTop}
        type="button"
      >
        Back to top
      </button>
    </footer>
  );
}
